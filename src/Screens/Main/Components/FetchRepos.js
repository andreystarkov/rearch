import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button } from 'Components'
import { Container, RepoItem, ReposContainer } from '../MainStyles'

import Actions from 'Stores/MainStore'

class FetchReposComponent extends Component {
  fetchRepos = () => {
    const { fetchReposRequest } = this.props
    fetchReposRequest()
  }
  renderRepoItem = ({ full_name, html_url }, index) => {
    return (
      <RepoItem
        key={`repo:${index}`}
        href={html_url}
        target='_blank'>
        {full_name}
      </RepoItem>
    )
  }
  renderRepos = () => {
    const { repos } = this.props
    const { list } = repos
    return (
      <ReposContainer>
        {list.filter((f, i) => i < 5).map(this.renderRepoItem)}
      </ReposContainer>
    )
  }
  render () {
    const { repos } = this.props
    const { loading, error, errorCode, list } = repos
    return (
      <Container>
        <Button
          onClick={this.fetchRepos}
          gradient='blue'>
          {list.length > 0 ? 'Refresh repos' : 'Fetch repos'}
        </Button>
        <Container>
          {loading && 'loading...'}
          {list && this.renderRepos()}
          {error && errorCode === 'NETWORK_PROBLEM' && 'No connection, sorry'}
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.main.repos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReposRequest: params => dispatch(Actions.fetchReposRequest(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchReposComponent)
