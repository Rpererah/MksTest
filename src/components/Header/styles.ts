import { ShoppingCart } from '@phosphor-icons/react'
import styled from 'styled-components'

export const LayoutHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  @media (max-width: 700px) {
    height: 48px;
    padding: 1rem;
  }
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
  @media (max-width: 700px) {
    height: 26px;
    width: 52px;
    font-size: 12px;
  }
`
export const StyledShoppingCart = styled(ShoppingCart)`
  width: 18px;
  height: 18px;

  @media (max-width: 700px) {
    width: 13px;
    height: 13px;
  }
`
export const CartButtonText = styled.span`
  font-size: 1.125rem;
  font-weight: bold;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`
