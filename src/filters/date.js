import { formatDate } from '@/assists'

export default function (value) {
  return formatDate(value, 'yyyy/MM/dd hh:mm')
}
