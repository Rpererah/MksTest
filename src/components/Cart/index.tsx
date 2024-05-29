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
  IconCloseButton,
} from './styles'
import ProductCard from './ProductCard'
import { motion } from 'framer-motion'
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
          <IconCloseButton />
        </CloseButton>
      </HeaderCart>
      <MainCart>
        {cart.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ProductCard
              id={item.id}
              image={item.photo}
              price={parseInt(item.price)}
              quantity={item.quantity ?? 0}
              title={item.name}
            />
          </motion.div>
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
