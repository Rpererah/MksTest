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

interface CardProps {
  image: string
  title: string
  price: number
  description: string
}

export default function Card({ image, title, price, description }: CardProps) {
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
      <BuyButton>
        <ShoppingBagOpen size={14} />
        COMPRAR
      </BuyButton>
    </CardContainer>
  )
}
