import styled from 'styled-components/macro'

export const Container = styled.div<{ darkMode?: boolean }>`
  width: 100%;
  height: 100vh;
  background: ${({ darkMode }) => (darkMode ? '#000000' : '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: center;

  .md-circular-progress-path {
    stroke: ${({ darkMode }) => (darkMode ? '#ffffff' : '#000000')};
  }
`
