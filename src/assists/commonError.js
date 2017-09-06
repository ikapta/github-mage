import { Message } from 'element-ui'

export const commonError = msg => {
  const type = {
    type: 'error',
    duration: 3000
  }
  let obj = Object.prototype.toString.call(msg)
  let toastMsg = (msg) => msg && Message.error(msg, type)
  obj === '[object Object]' && toastMsg(msg.message)
  obj === '[object String]' && toastMsg(msg)
  obj === '[object Error]' && (console.error(msg.stack), toastMsg(msg.message))
}
