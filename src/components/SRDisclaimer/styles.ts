import styled from 'styled-components/macro'

export const Text = styled.p`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  color: #8b8d8e;
  max-width: 301px;
`

export const Link = styled.a`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  color: #8b8d8e;
  text-decoration: underline;

  :active,
  :visited {
    color: #8b8d8e;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const PrimaryLink = styled.a`
  font-family: 'Arial Rounded MT Bold';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #3576f4;

  :first-child {
    margin-bottom: 10px;
  }
  &:nth-child(2) {
    margin-bottom: 30px;
  }
`
