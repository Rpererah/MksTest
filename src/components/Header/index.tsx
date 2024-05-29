import {
  CartButton,
  CartButtonText,
  EmphasizedLogo,
  LayoutHeader,
  Logo,
  RegularLogo,
  StyledShoppingCart,
} from './styles'

import { VisibilyCardButtonProps } from '../../pages/Home'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'

export default function Header({ onClickCartButton }: VisibilyCardButtonProps) {
  const { cart } = useContext(CartContext)
  const [AmountItems, setAmoutItems] = useState<number>(0)

  useEffect(() => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
    setAmoutItems(totalItems)
  }, [cart])

  return (
    <LayoutHeader>
      <Logo>
        <EmphasizedLogo>MKS</EmphasizedLogo>
        <RegularLogo>Sistemas</RegularLogo>
      </Logo>
      <div>
        <CartButton data-testid="toggle-button" onClick={onClickCartButton}>
          <StyledShoppingCart />
          <CartButtonText>{AmountItems}</CartButtonText>
        </CartButton>
      </div>
    </LayoutHeader>
  )
}
