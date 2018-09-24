import styled from 'styled-components'

export const ScreenWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`

export const ReposContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 1.5rem auto;
  background-color: #fff;
  border-radius: 5px;
`

export const RepoItem = styled.a`
  display: block;
  font-size: 1.1rem;
  padding: 1rem;
  color: #222;
  border-bottom: 1px solid #ddd;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
  &:hover {
    background: #eee;
    color: #111;
  }
`
