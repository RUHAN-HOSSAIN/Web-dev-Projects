import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../Components/Button"

const SpecialOffers = () => {
  return (
    <section
      id="special"
      className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold">
          <span className="text-coral-red">
            Special
          </span> Offer
        </h2>
        <p className="mt-4 font-montserrat text-slate-gray text-lg leading-7">
          Ensure premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 font-montserrat text-slate-gray text-lg leading-7">
          Navigates a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-8 ">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button 
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers