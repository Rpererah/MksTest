import { ShoppingBagOpen } from '@phosphor-icons/react'
import {
  BuyButton,
  CardContainer,
  CardLayout,
  DescribeText,
  ImageLayout,
  PriceTag,
  TitleCard,
  TitleText,
} from './styles'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Product from '../../pages/Home/productInterface'

interface CardProps {
  id: number
  image: string
  title: string
  price: number
  description: string
  quantity: number | 0
}

export default function Card({
  id,
  image,
  title,
  price,
  description,
  quantity,
}: CardProps) {
  const { addToCart } = useContext(CartContext)

  function handleAddToCart() {
    const productAdd: Product = {
      id,
      photo: image,
      name: title,
      description,
      price: price.toString(),
      quantity,
    }

    addToCart(productAdd)
  }
  return (
    <CardContainer>
      <CardLayout>
        <ImageLayout
          src={image}
          alt={`This is the image of our product called ${title}`}
        />
        <TitleCard>
          <TitleText>{title}</TitleText>
          <PriceTag>R${price}</PriceTag>
        </TitleCard>
        <DescribeText>{description}</DescribeText>
      </CardLayout>
      <BuyButton onClick={handleAddToCart}>
        <ShoppingBagOpen size={14} />
        COMPRAR
      </BuyButton>
    </CardContainer>
  )
}
