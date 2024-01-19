import React from 'react'
import { CircularProgress } from 'react-md'
import { Container } from './styles'

function GlobalLoader({
  darkMode = false
}: {
  darkMode?: boolean
}): JSX.Element {
  return (
    <Container darkMode={darkMode}>
      <CircularProgress scale={3} id="aria-busy=true" />
    </Container>
  )
}

export default GlobalLoader
