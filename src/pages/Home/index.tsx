import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import TestImage from '../../assets/test.png'
import { MainLayout } from './styles'
import Cart from '../../components/Cart'
export default function Home() {
  return (
    <div>
      <Header />
      <MainLayout>
        <Card
          title="Apple Watch Series 4 GPS"
          description="Redesigned from scratch and completely revised."
          image={TestImage}
          price={399}
        />
        <Card
          title="Apple Watch Series 4 GPS"
          description="Redesigned from scratch and completely revised."
          image={TestImage}
          price={399}
        />
        <Card
          title="Apple Watch Series 4 GPS"
          description="Redesigned from scratch and completely revised."
          image={TestImage}
          price={399}
        />
        <Card
          title="Apple Watch Series 4 GPS"
          description="Redesigned from scratch and completely revised."
          image={TestImage}
          price={399}
        />
        <Card
          title="Apple Watch Series 4 GPS"
          description="Redesigned from scratch and completely revised."
          image={TestImage}
          price={399}
        />
        <Card
          title="Apple Watch Series 4 GPS"
          description="Redesigned from scratch and completely revised."
          image={TestImage}
          price={399}
        />
        <Card
          title="Apple Watch Series 4 GPS"
          description="Redesigned from scratch and completely revised."
          image={TestImage}
          price={399}
        />
        <Card
          title="Apple Watch Series 4 GPS"
          description="Redesigned from scratch and completely revised."
          image={TestImage}
          price={399}
        />
      </MainLayout>
      <Cart />
      <Footer />
    </div>
  )
}
