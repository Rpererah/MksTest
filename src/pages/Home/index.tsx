import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { MainLayout } from './styles'
import Cart from '../../components/Cart'
import { useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import Product from './productInterface'
import Loading from '../../components/Loading'
import { motion } from 'framer-motion'

export interface VisibilyCardButtonProps {
  onClickCartButton: () => void
}

export default function Home() {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)

  const { data, isLoading, isError } = useQuery(
    'data',
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      try {
        const response = await axios.get(
          'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products',
          {
            params: {
              page: 1,
              rows: 12,
              sortBy: 'id',
              orderBy: 'ASC',
            },
          },
        )
        return response.data
      } catch (error) {
        throw new Error(`Ocorreu um erro ao carregar os produtos: ${error}`)
      }
    },
    {
      // intentional delay demonstration,for show my skeleton
      staleTime: 5000,
    },
  )

  const products: Product[] = data?.products || []

  if (isError) {
    return <div>Ocorreu um erro ao carregar os produtos.</div>
  }
  const toggleCartVisibility = () => {
    setIsAnimated(!isAnimated)
    if (isCartVisible) {
      setTimeout(() => {
        setIsCartVisible(!isCartVisible)
      }, 300)
    } else {
      setIsCartVisible(!isCartVisible)
    }
  }
  return (
    <div>
      <Header onClickCartButton={toggleCartVisibility} />
      <MainLayout>
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => <Loading key={index} />)
          : products.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                title={card.name}
                description={card.description}
                image={card.photo}
                price={parseInt(card.price)}
                quantity={card.quantity}
              />
            ))}
        {isCartVisible ? (
          <motion.div
            style={{ position: 'absolute', right: 0, top: 0 }}
            initial={{ x: '-100vh', opacity: 0 }}
            animate={{
              x: 0,
              opacity: isAnimated ? 1 : 0,
            }}
            transition={{ type: 'spring', stiffness: 110, damping: 25 }}
            exit={{ opacity: 0 }}
          >
            <Cart onClickCartButton={toggleCartVisibility} />
          </motion.div>
        ) : (
          ''
        )}
      </MainLayout>
      <Footer />
    </div>
  )
}
