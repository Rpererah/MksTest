import { ShoppingCart } from '@phosphor-icons/react'
import {
  CartButton,
  CartButtonText,
  EmphasizedLogo,
  LayoutHeader,
  Logo,
  RegularLogo,
} from './styles'

export default function Header() {
  return (
    <LayoutHeader>
      <Logo>
        <EmphasizedLogo>MKS</EmphasizedLogo>
        <RegularLogo>Sistemas</RegularLogo>
      </Logo>
      <div>
        <CartButton>
          <ShoppingCart weight="fill" size={18} />
          <CartButtonText>0</CartButtonText>
        </CartButton>
      </div>
    </LayoutHeader>
  )
}
