import { CustomerReviews, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality, Footer } from "./sections/index";
import Nav from './Components/Nav'

const App = () => {
  return (
    <main className='relative'>
      <Nav />

      <section className="max-xl:px-16 max-lg:px-12 max-md:px-8 padding-b">
        <Hero />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding">
        <Services />
      </section>

      <section className="padding">
        <SpecialOffers />
      </section>
      

      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-6">
        <Footer />
      </section>
    </main>
  )
}

export default App