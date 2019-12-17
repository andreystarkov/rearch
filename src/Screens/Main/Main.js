import React from 'react'
import { ScreenWrapper } from './MainStyles'

import { Button, Input } from 'Components'

import FetchRepos from './Components/FetchRepos'

function MainScreen ({ fetchRequest, data }) {
  const { error, loading } = data
  const handleClick = () => fetchRequest()
  console.log({ data, error })
  return (
    <ScreenWrapper>
      <Input placeholder='Login' errors={error.login} />
      <Input placeholder='Instagram' errors={error.instagram} />
      <Input placeholder='Password' type='password' errors={error.password} />
      <Button
        onClick={() => handleClick()}
        disabled={loading}
        gradient='blue'>
        {loading ? 'Loading...' : 'Send'}
      </Button>
      <FetchRepos />
    </ScreenWrapper>
  )
}

export default MainScreen
