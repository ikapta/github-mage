
import Store from './store'
const Github = require('github-api')
import { Message } from 'element-ui'

class GithubAction {
  get api () {
    if (!this.authUser) {
      const GithubInstance = new Github(Store.get('authInfo'))
      this.authUser = GithubInstance.getUser()
    }
    return this.authUser
  }

  listNotifications () {
    return this.api.listNotifications().then(({data}) => {
      return data
    }).catch(this.ghError)
  }

  listStarredRepos () {

  }

  getRepos () {
    return this.github.getRepo('chanzig', 'dust')
  }

  ghError (badResponse) {
    return Message.error(badResponse.response.data.message)
  }
}

export default new GithubAction()
