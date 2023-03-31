import '@/styles/globals.css'
import { Layout } from '@/components/Layout'
import { RegisterModal } from '@/components/modals/RegisterModal'
import { LoginModal } from '@/components/modals/LoginModal'

export default function App({ Component, pageProps }) {
  return (
    <>
    <RegisterModal/>
    <LoginModal/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
