import { X } from '@phosphor-icons/react'
import {
  CartLayout,
  CloseButton,
  FooterCartText,
  HeaderCart,
  TitleCart,
  FooterCard,
  FooterCartButton,
  MainCart,
  FooterCardContainer,
} from './styles'
import ProductCard from './ProductCard'

import { VisibilyCardButtonProps } from '../../pages/Home'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function Cart({ onClickCartButton }: VisibilyCardButtonProps) {
  const { cart, total } = useContext(CartContext)
  return (
    <CartLayout>
      <HeaderCart>
        <TitleCart>Carrinho de compras</TitleCart>
        <CloseButton onClick={onClickCartButton}>
          <X size={16} />
        </CloseButton>
      </HeaderCart>
      <MainCart>
        {cart.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.photo}
            price={parseInt(item.price)}
            quantity={item.quantity ?? 0}
            title={item.name}
          />
        ))}
      </MainCart>
      <FooterCardContainer>
        <FooterCard>
          <FooterCartText>Total</FooterCartText>
          <FooterCartText>R${total}</FooterCartText>
        </FooterCard>

        <FooterCartButton>
          <FooterCartText>Finalizar Compra</FooterCartText>
        </FooterCartButton>
      </FooterCardContainer>
    </CartLayout>
  )
}
