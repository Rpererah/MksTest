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
import TestImage from './../../assets/test.png'
export default function Cart() {
  return (
    <CartLayout>
      <HeaderCart>
        <TitleCart>Carrinho de compras</TitleCart>
        <CloseButton>
          <X size={16} />
        </CloseButton>
      </HeaderCart>
      <MainCart>
        <ProductCard
          image={TestImage}
          price={399}
          quantity={1}
          title="Apple Watch Series 4 GPS"
        />
        <ProductCard
          image={TestImage}
          price={399}
          quantity={1}
          title="Apple Watch Series 4 GPS"
        />
      </MainCart>
      <FooterCardContainer>
        <FooterCard>
          <FooterCartText>Total</FooterCartText>
          <FooterCartText>R$798</FooterCartText>
        </FooterCard>

        <FooterCartButton>
          <FooterCartText>Finalizar Compra</FooterCartText>
        </FooterCartButton>
      </FooterCardContainer>
    </CartLayout>
  )
}
