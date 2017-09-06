export default function (date, fmt = 'yyyy-MM-dd') {
  if (!date) return null
  var _date = new Date(date)
  var o = {
    'M+': _date.getMonth() + 1,
    'd+': _date.getDate(),
    'h+': _date.getHours(),
    'm+': _date.getMinutes(),
    's+': _date.getSeconds(),
    'q+': Math.floor((_date.getMonth() + 3) / 3),
    'S': _date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, `${_date.getUTCFullYear()}`)
  }
  Object.keys(o).forEach(k => {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (RegExp.$1.length === 1)
          ? (o[k])
          : (('00' + o[k]).substr(('' + o[k]).length))
      )
    }
  })
  return fmt
}
