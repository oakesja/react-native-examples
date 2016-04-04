import { connect } from 'react-redux'
import { GithubActions } from 'domain-layer'
import GithubRepos from '../components/GithubRepos'

const mapStateToProps = (state) => {
  return {
    username: state.github.username,
    isFetching: state.github.isFetching,
    error: state.github.error,
    repos: state.github.repos,
  }
}

const GithubApp = connect(
  mapStateToProps,
  GithubActions
)(GithubRepos)

export default GithubApp
