import React, {PropTypes, Component} from 'react'

class GithubRepos extends Component {
  render() {
    let input
    return (
      <div>
        <form onSubmit={
            e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            this.props.fetchRepos(input.value)
            input.value = ''
        }}>
          <input ref={node => {
            input = node
          }}/>
          <button type="submit">
            Fetch Repos
          </button>
        </form>
        <ul>
          { this.props.repos.map(name =>
            <li>{name}</li>
          )}
        </ul>
      </div>
    )
  }
}

GithubRepos.propTypes = {
  username: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired,
  fetchRepos: PropTypes.func.isRequired
}

export default GithubRepos
