import styled from 'styled-components'

export const LayoutHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
`
export const EmphasizedLogo = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  margin-right: 0.5rem;
`
export const RegularLogo = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
`

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 45px;
  width: 90px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
`

export const CartButtonText = styled.span`
  font-size: 1.125rem;
  font-weight: bold;
`
