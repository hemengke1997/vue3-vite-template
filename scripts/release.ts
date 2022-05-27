import type { Options as ExecaOptions } from 'execa'
import { execa } from 'execa'
import colors from 'picocolors'
import minimist from 'minimist'
import semver from 'semver'
import prompts from 'prompts'
import pkg from '../package.json'
import fsExtra from 'fs-extra'
import fs from 'fs'
import path from 'path'

export const args = minimist(process.argv.slice(2))

export async function run(bin: string, args: string[], opts: ExecaOptions<string> = {}) {
  return execa(bin, args, { stdio: 'inherit', ...opts })
}

export async function tagRun(bin: string, args: string[], opts?: ExecaOptions<string>) {
  console.log(colors.blue(`[with-tag] ${bin} ${args.join(' ')}`), opts || '')
  return run(bin, args, opts)
}

export const finalRun = args.tag ? tagRun : run

export function step(msg: string) {
  return console.log(colors.cyan(msg))
}

export function updateVersion(pkgPath: string, version: string): void {
  const pkg = fsExtra.readJSONSync(pkgPath)
  pkg.version = version
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
}

async function main(): Promise<void> {
  let targetVersion: string | undefined
  const withTag = args.tag

  let tag: string

  if (!targetVersion && withTag) {
    const { version } = await prompts({
      type: 'text',
      name: 'version',
      message: `please input version(currentVersion is ${pkg.version}):`,
    })
    targetVersion = version

    if (!semver.valid(targetVersion) && semver.lt(pkg.version, targetVersion)) {
      console.log(colors.red('Please follow NPM semver'), colors.underline('https://semver.org/lang/zh-CN/'))
      throw new Error(`invalid target version: ${targetVersion}`)
    }

    tag = `v${targetVersion}`

    step('\nUpdating package version...')
    updateVersion(path.resolve(__dirname, '../package.json'), targetVersion)

    // generate changelog
    step('\nGenerating changelog...')
    await run(`pnpm`, ['run', 'changelog'])
  } else {
    tag = pkg.version
  }

  // tesing or master branch, build before git push
  enum BranchEnum {
    test = 'test',
    prod = 'master',
  }
  const Branch = [BranchEnum.test, BranchEnum.prod] as string[]
  const { stdout: branch } = await run('git', ['rev-parse', '--abbrev-ref', 'HEAD'], { stdio: 'pipe' })

  if (Branch.includes(branch)) {
    step('\nBuilding...')
    // switch (branch) {
    //   case BranchEnum.test:
    //     await run('npm', ['run', 'build:test'])
    //     break
    //   case BranchEnum.prod:
    //     await run('npm', ['run', 'build'])
    //     break
    //   default:
    //     break
    // }
    step('\nBuild success')
  }

  const { stdout } = await run('git', ['diff'], { stdio: 'pipe' })
  if (stdout) {
    step('\nCommitting changes...')
    await finalRun('git', ['add', '-A'])

    await finalRun('git', ['commit', '-m', `release: ${tag}`, '--no-verify'])

    if (withTag) {
      step('\nSetting git tag...')
      await finalRun('git', ['tag', tag])
    }
  } else {
    console.log('No changes to commit.')
    return
  }

  step('\nPushing to Gitee...')
  if (withTag) {
    await finalRun('git', ['push', 'origin', `refs/tags/${tag}`])
  }
  await finalRun('git', ['push'])

  console.log(`\nGit push finished`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
