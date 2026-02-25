import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <>      
      <div className='pt-19 lg:pt-21 overflow-hidden'>
        <Header />
        <Hero />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App