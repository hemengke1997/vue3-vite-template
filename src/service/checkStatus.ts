import type { ErrorMessageMode } from './axios.d'
import { useI18n } from '@/hooks/useI18n'

const { t } = useI18n()

const codeMessage = {
  401: t('sys.errMsg401'),
  403: t('sys.errMsg403'),
  404: t('sys.errMsg404'),
  405: t('sys.errMsg405'),
  408: t('sys.errMsg408'),
  500: t('sys.errMsg500'),
  502: t('sys.errMsg502'),
  503: t('sys.errMsg503'),
  504: t('sys.errMsg504'),
}

export function checkStatus(
  status: number | null | undefined,
  msg: string | undefined,
  errorMessageMode: ErrorMessageMode = 'message',
): void {
  // const message = useMessage()
  let errMessage = ''

  errMessage = msg || (status && codeMessage[status])

  if (errMessage) {
    if (errorMessageMode === 'notification') {
      // 使用notification报错
      // notification.error({
      //   message: `请求错误 ${status}`,
      //   description: isProdMode() ? '请稍后再试' : errMessage,
      // });
    } else if (errorMessageMode === 'message') {
      // 使用message报错
      // message.error(errMessage)
    }
  }
}
