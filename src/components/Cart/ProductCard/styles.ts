import styled from 'styled-components'

export const ProductCartLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 385px;
  background-color: ${(props) => props.theme.white};
  margin-left: 3rem;
  border-radius: 8px;
  padding: 1rem 2rem;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border: none;
  gap: 20px;
`

export const ProductCartImagee = styled.img`
  height: 70px;
  width: 70px;
`

export const ProductCartText = styled.p`
  font-size: 0.813rem;
  max-width: 120px;
`

export const ProductCartInput = styled.input`
  width: 50px;
  height: 19px;
`

export const ProductCartPrice = styled.p`
  font-size: 0.875rem;
  font-weight: bold;
`

export const ProductCartCloseButton = styled.button`
  display: flex;
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 999px;
  height: 18px;
  width: 18px;
  padding: 0.2rem;
`
