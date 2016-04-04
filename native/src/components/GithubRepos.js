import React, {PropTypes, View, TextInput, ListView, Text, Component, StyleSheet} from 'react-native'

class GithubRepos extends Component {
  render() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    ds = ds.cloneWithRows(this.props.repos)
    return (
      <View>
        <TextInput
          onSubmitEditing={(event) => this.props.fetchRepos(event.nativeEvent.text)}
        />
        <ListView
          dataSource={ds}
          renderRow={this.renderRepo}
        />
      </View>
    )
  }

  renderRepo(repo) {
    return (
      <Text>
        {repo}
      </Text>
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
