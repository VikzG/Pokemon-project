import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function Details() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [apiTypesImages, setApiTypesImages] = useState([]);

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `https://pokebuildapi.fr/api/v1/pokemon/${id}`
        );
        setPokemon(response.data);

        const images = response.data.apiTypes.map((apiType) => apiType.image);
        setApiTypesImages(images);
        // Maintenant, apiTypesImages contient un tableau d'URLs des images des types du Pokémon
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des détails du Pokémon : ",
          error
        );
      }
    };

    fetchPokemonDetails();
  }, [id]);

  return (
    <section className="pokemon-details bg-black overflow-hidden">
      {pokemon ? (
        <div className="text-white flex flex-col ">
          <div className="flex flex-row items-center gap-20 flex-wrap border-4 justify-center h-screen">
            <div className="flex flex-col items-center gap-5">
              <div className="pokemon-container flex flex-col justify-center items-center">
                <motion.img
                  variants={item}
                  initial="hidden"
                  animate="visible"
                  src={pokemon.image}
                  alt={pokemon.name}
                />
              </div>
              <motion.h3
                className="text-3xl"
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.2,
                  delay: 0.2,
                  ease: "linear",
                }}
              >
                {pokemon.name}
              </motion.h3>
              <div className="flex flex-row items-center gap-20">
                {apiTypesImages.map((imageUrl, index) => (
                  <motion.img
                    className="w-20 h-20"
                    key={index}
                    src={imageUrl}
                    alt={`Type ${index + 1}`}
                    initial={{
                      scale: 0,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.4,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>
              <ul className="flex flex-row gap-28">
                {pokemon.apiTypes.map((type, index) => (
                  <motion.li
                    className="text-2xl"
                    key={index}
                    initial={{
                      y: 20,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.6,
                      ease: "linear",
                    }}
                  >
                    {type.name}
                  </motion.li>
                ))}
              </ul>
            </div>
            <ul className="pokemon-stats">
              <motion.li
                initial={{
                  x: 80,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.8,
                  ease: "linear",
                }}
              >
                HP : {pokemon.stats.HP}
              </motion.li>
              <motion.li
                initial={{
                  x: 80,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: 1,
                  ease: "linear",
                }}
              >
                Attack : {pokemon.stats.attack}
              </motion.li>
              <motion.li
                initial={{
                  x: 80,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: 1.2,
                  ease: "linear",
                }}
              >
                Defense : {pokemon.stats.defense}
              </motion.li>
              <motion.li
                initial={{
                  x: 80,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: 1.4,
                  ease: "linear",
                }}
              >
                Special Attack : {pokemon.stats.special_attack}
              </motion.li>
              <motion.li
                initial={{
                  x: 80,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: 1.6,
                  ease: "linear",
                }}
              >
                Special Defense : {pokemon.stats.special_defense}
              </motion.li>
              <motion.li
                initial={{
                  x: 80,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: 1.8,
                  ease: "linear",
                }}
              >
                Speed : {pokemon.stats.speed}
              </motion.li>
            </ul>
          </div>
        </div>
      ) : (
        <p>Chargement des détails du Pokémon...</p>
      )}
    </section>
  );
}

export default Details;
