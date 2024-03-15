import Gallery from "../../components/Gallery";
import pokeball from "../../assets/pokeball.png"
import { motion } from 'framer-motion';

function Home() {
  return (
    <section className="home flex flex-col items-center">
      <div className="flex flex-row items-center justify-around">
      <motion.img 
      src={pokeball} 
      alt="pokeball"
      className="w-12 h-12"
      initial={{
        scale:0,
      }}
      animate={{
        scale:1,
      }}
      transition={{
        duration: 0.2,
        delay: 0.3,
        ease: "linear",
      }}
      ></motion.img>
      <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-center font-bold">Season One Pokedex</h1>
      <motion.img 
      src={pokeball} 
      className="w-12 h-12" 
      alt="pokeball"
      initial={{
        scale:0,
      }}
      animate={{
        scale:1,
      }}
      transition={{
        duration: 0.2,
        delay: 0.3,
        ease: "linear",
      }}
      ></motion.img>
      </div>
      <motion.h2 
      className="lg:text-3xl sm:text-2xl font-semi-bold"
      initial={{
        x: 20,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
        delay: 0.7,
        ease: "linear",
      }}
      >The 151 first pokemons</motion.h2>
      <Gallery />
    </section>
  );
}

export default Home;
