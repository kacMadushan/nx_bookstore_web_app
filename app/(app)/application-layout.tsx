import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'

export function ApplicationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
