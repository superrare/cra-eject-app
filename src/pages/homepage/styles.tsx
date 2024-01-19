import styled from 'styled-components/macro'
import StickyBox from 'react-sticky-box'

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: 2em;
`

export const Main = styled.main`
  width: 100%;
  flex-basis: 300px;
`

export const SideSection = styled.section`
  flex-direction: column;
  flex-basis: 240px;
  display: none;
`

export const CustomStickyBox = styled(StickyBox)`
  height: fit-content;
  width: 240px;
  display: none;
`
