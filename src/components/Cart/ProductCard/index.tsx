import { X } from '@phosphor-icons/react'
import {
  ProductCartCloseButton,
  ProductCartImagee,
  ProductCartInputButton,
  ProductCartInputContainer,
  ProductCartInputValue,
  ProductCartLayout,
  ProductCartPrice,
  ProductCartText,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../context/CartContext'

interface ProductCardProps {
  id: number
  image: string
  title: string
  quantity: number
  price: number
}
export default function ProductCard({
  id,
  image,
  title,
  quantity,
  price,
}: ProductCardProps) {
  useEffect(() => {
    setUpdatedQuantity(quantity)
  }, [quantity])

  const { removeFromCart, changeQuantity } = useContext(CartContext)
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity)

  function handleRemoveOneFromCart() {
    removeFromCart(id, true)
  }

  function handleQuantityChange(newQuantity: number) {
    if (newQuantity >= 0) {
      setUpdatedQuantity(newQuantity)
      changeQuantity(id, newQuantity)
    }
  }

  function handleIncrement() {
    handleQuantityChange(updatedQuantity + 1)
  }

  function handleDecrement() {
    if (updatedQuantity > 1) {
      handleQuantityChange(updatedQuantity - 1)
    }
  }

  return (
    <ProductCartLayout>
      <ProductCartImagee src={image} alt="" />
      <ProductCartText>{title}</ProductCartText>
      <ProductCartInputContainer>
        <ProductCartInputButton onClick={handleDecrement}>
          -
        </ProductCartInputButton>
        <ProductCartInputValue>{updatedQuantity}</ProductCartInputValue>
        <ProductCartInputButton onClick={handleIncrement}>
          +
        </ProductCartInputButton>
      </ProductCartInputContainer>
      <ProductCartPrice>R${price}</ProductCartPrice>
      <ProductCartCloseButton onClick={handleRemoveOneFromCart}>
        <X size={12} />
      </ProductCartCloseButton>
    </ProductCartLayout>
  )
}
