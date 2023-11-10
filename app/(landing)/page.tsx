import Footer from './_components/Footer'
import { Heading } from './_components/Heading'
import Heros from './_components/Heros'

export default function MarketingPage() {
  return (
    <div className='min-h-full flex flex-col'>
      <div className='flex flex-col items-center justify-center md:justify-start text-center gap-8 flex-1 px-6 pb-10'>
        <Heading />
        <Heros />
      </div>
      <Footer />
    </div>
  )
}