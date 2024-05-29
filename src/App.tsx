import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import Home from './pages/Home'
import { GlobalStyle } from './styles/global'
import { QueryClient, QueryClientProvider } from 'react-query'
import CartProvider from './context/CartContext'
const queryClient = new QueryClient()
export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Home />
        </CartProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
