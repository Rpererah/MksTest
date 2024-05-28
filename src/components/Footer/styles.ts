import styled from 'styled-components'

export const FooterLayout = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: auto;
  background-color: ${(props) => props.theme['gray-200']};
`
export const FooterText = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.black};
`
