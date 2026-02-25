import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section"

const Hero = () => {
  return (
    <Section
        className='pt-48 -mt-21'
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
    >
        <div className="container relative">
            <div className="relative z-1 maz-w-[62rem] mx-auto text-center mb-16 md:mb-20 lg:mb-24">
                <h1 className="h1 mb-6">
                    Explore the Posibility of AI Chatting with
                    <span className="inline-block relative">
                        Brainwave{' '} 
                        <img src={curve} className="absolute top-full left-0 w-full xl:-mt-2" width={624} height={28} alt="curve" />
                    </span>
                </h1>
                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                    Unleash the power of AI within Brainwave.
                    Upgrade your productivity with Brainwave, the open AI chat App.
                </p>
                <Button href='/pricing' white>
                    Get Started
                </Button>
            </div>
            <div>

            </div>
        </div>
    </Section>
  )
}

export default Hero;