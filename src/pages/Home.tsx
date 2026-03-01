import About from '@/components/custom/About'
import Banner from '@/components/custom/Banner'
import Careers from '@/components/custom/Careers'
import Contact from '@/components/custom/Contact'
import Footer from '@/components/custom/Footer'
import Services from '@/components/custom/Service'

// ✅ No need to import jobs here — Careers handles that internally
function Home() {
  return (
    <div className='w-full'>
      <Banner />
      <Services />
      <Careers /> {/* ← no props needed */}
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home