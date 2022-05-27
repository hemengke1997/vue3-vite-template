import { genMessage } from '../helper'
import { LanguageType } from '../setupI18n'

const modules = import.meta.globEager(`./en/**/*.ts`)

export default {
  message: {
    ...genMessage(modules, LanguageType.EN_US),
  },
}
