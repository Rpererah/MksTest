import { X } from '@phosphor-icons/react'
import {
  ProductCartCloseButton,
  ProductCartImagee,
  ProductCartInput,
  ProductCartLayout,
  ProductCartPrice,
  ProductCartText,
} from './styles'

interface ProductCardProps {
  image: string
  title: string
  quantity: number
  price: number
}
export default function ProductCard({
  image,
  title,
  quantity,
  price,
}: ProductCardProps) {
  return (
    <ProductCartLayout>
      <ProductCartImagee src={image} alt="" />
      <ProductCartText>{title}</ProductCartText>
      <ProductCartInput
        maxLength={2}
        type="number"
        name=""
        id=""
        value={quantity}
      />
      <ProductCartPrice>R${price}</ProductCartPrice>
      <ProductCartCloseButton>
        <X size={12} />
      </ProductCartCloseButton>
    </ProductCartLayout>
  )
}
