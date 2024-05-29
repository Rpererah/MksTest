import { X } from '@phosphor-icons/react'
import styled from 'styled-components'

export const ProductCartLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100px;
  width: 385px;
  background-color: ${(props) => props.theme.white};
  margin-left: 3rem;
  border-radius: 8px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border: none;
  gap: 20px;
  padding: 1rem;
  @media (max-width: 700px) {
    height: 220px;
    width: 250px;
    flex-direction: column;
  }
`

export const ProductCartImagee = styled.img`
  display: flex;
  height: 70px;
  width: 70px;
  flex: 1;
`

export const ProductCartText = styled.p`
  font-size: 0.813rem;
  width: 120px;
  margin: 0;
  padding: 0;
  flex-grow: 1;
  @media (max-width: 700px) {
    text-align: center;
    font-size: 1rem;
    margin-bottom: -1rem;
  }
`

export const ProductCartPrice = styled.p`
  display: flex;
  font-size: 0.875rem;
  font-weight: bold;
  margin: 0;
  flex: 1;
  @media (max-width: 700px) {
    padding: 1rem;
    background-color: ${(props) => props.theme['gray-900']};
    width: 84px;
    flex: 0;
    height: 35px;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.white};
    border-radius: 5px;
    margin-top: -10px;
  }
`

export const ProductCartCloseButton = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 999px;
  height: 18px;
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  cursor: pointer;
  @media (max-width: 700px) {
    height: 45px;
    background-color: ${(props) => props.theme.white};
    width: 45px;
    top: 0px;
    right: 0px;
  }
`
export const IconCartCloseButton = styled(X)`
  height: 12px;
  width: 12px;
  color: ${(props) => props.theme.black};
  @media (max-width: 700px) {
    height: 30px;
    width: 30px;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex: 1;
  justify-content: center;
  height: 45px;
  margin-bottom: 10px;
  padding: 0rem 1rem;
`

export const ProductCardSmallLabel = styled.p`
  font-size: 0.75rem;
  padding: 4px 0px;
  align-self: start;
  @media (max-width: 700px) {
    display: none;
  }
`

export const ProductCartInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 5px;
`

export const ProductCartInputValue = styled.div`
  width: 20px;
  text-align: center;
  font-size: 0.875rem;
  @media (max-width: 700px) {
    width: 30px;
    font-size: 20px;
  }
`

export const ProductCartInputButton = styled.button`
  width: 22px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  @media (max-width: 700px) {
    width: 30px;
  }

  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: none;
    border: none;
    box-shadow: none;
  }
`
export const ContainerInputAndPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`
