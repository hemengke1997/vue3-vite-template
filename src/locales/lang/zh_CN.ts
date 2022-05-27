import { genMessage } from '../helper'
import { LanguageType } from '../setupI18n'

const modules = import.meta.globEager(`./zh-CN/**/*.ts`)

export default {
  message: {
    ...genMessage(modules, LanguageType.ZH_CN),
  },
}
