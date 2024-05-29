import { X } from '@phosphor-icons/react'
import styled from 'styled-components'

export const CartLayout = styled.aside`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.blue};
  height: 100vh;
  width: 486px;
  padding-top: 2rem;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  @media (max-width: 700px) {
    width: 80vw;
    padding-top: 2rem;
  }
`

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.black};
  border: none;
  height: 38px;
  width: 38px;
  border-radius: 999px;
  margin-right: 2rem;
  @media (max-width: 700px) {
    width: 45px;
    height: 45px;
    padding: 0.5rem;
    margin-right: 1rem;
  }
`

export const IconCloseButton = styled(X)`
  height: 16px;
  width: 16px;
  @media (max-width: 700px) {
    height: 40px;
    width: 40px;
    color: ${(props) => props.theme.blue};
  }
`
export const TitleCart = styled.p`
  font-size: 1.688rem;
  font-weight: bold;
  max-width: 180px;
  color: ${(props) => props.theme.white};
  margin-left: 3rem;

  @media (max-width: 700px) {
    margin-left: 1rem;
  }
`
export const HeaderCart = styled.header`
  display: flex;
  justify-content: space-between;
`
export const FooterCard = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 2.5rem;
  padding-top: 1rem;

  @media (max-width: 700px) {
    justify-content: space-around;
    padding-right: 1rem;
  }
`

export const FooterCardContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 21px;
`
export const FooterCartText = styled.p`
  font-size: 1.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  margin-left: 3rem;
  margin-right: 2rem;
  @media (max-width: 700px) {
    margin-left: 0rem;
    margin-right: 0rem;

    font-size: 28px;
  }
`
export const FooterCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97px;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  border: none;
  width: 100%;
  padding-left: -2rem;
  padding-right: -1rem;
  @media (max-width: 700px) {
    height: 65px;
  }
`
export const MainCart = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  max-height: 700px;
  overflow-y: auto;
  padding: 1rem 0rem;
  @media (max-width: 700px) {
    align-items: center;
    padding: 1rem;
    margin-left: -3rem;
  }
`
