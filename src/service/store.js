export default {
  set (key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
    return this
  },
  get (key) {
    try {
      return JSON.parse(sessionStorage.getItem(key))
    } catch (e) {
      return
    }
  },
  remove (key) {
    sessionStorage.removeItem(key)
    return this
  }
}
