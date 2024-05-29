import { ReactNode, createContext, useState } from 'react'
import Product from '../pages/Home/productInterface'

interface CartContextType {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number, removeAll?: boolean) => void
  changeQuantity: (productId: number, newQuantity: number) => void
  total: number
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  changeQuantity: () => {},
  total: 0,
})

interface CartProviderProps {
  children: ReactNode
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([])
  const [total, setTotal] = useState<number>(0)

  function addToCart(product: Product) {
    const existProduct = cart.find((item) => item.id === product.id)
    if (existProduct) {
      const updateCart = cart.map((item) =>
        item.id === existProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
      setCart(updateCart)
      setTotal(totalPrice(updateCart))
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }]
      setCart(updatedCart)
      setTotal(totalPrice(updatedCart))
    }
  }
  function removeFromCart(productId: number, removeAll: boolean = false) {
    const existProduct = cart.find((item) => item.id === productId)
    if (existProduct) {
      let updatedCart
      if (removeAll) {
        updatedCart = cart.filter((item) => item.id !== productId)
      } else {
        updatedCart = cart.map((item) =>
          item.id === existProduct.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
      }
      setCart(updatedCart)
      setTotal(totalPrice(updatedCart))
    }
  }

  function totalPrice(cart: Product[]): number {
    return cart.reduce(
      (accumulator, item) =>
        accumulator + parseFloat(item.price) * item.quantity,
      0,
    )
  }

  function changeQuantity(productId: number, newQuantity: number) {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item,
    )
    setCart(updatedCart)
    setTotal(totalPrice(updatedCart))
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, total, changeQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}
