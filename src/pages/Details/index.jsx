import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [apiTypesImages, setApiTypesImages] = useState([]);

  const goToPreviousPokemon = () => {
    const previousPokemonId = parseInt(id, 10) - 1;
    navigate(`/details/${previousPokemonId}`);
  };

  const goToNextPokemon = () => {
    const nextPokemonId = parseInt(id, 10) + 1;
    navigate(`/details/${nextPokemonId}`);
  };

  const goToHomePage = () => {
    navigate("/"); // Redirige vers l'ancre "works" de la page principale
  };

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
    <motion.section className="pokemon-details bg-black min-h-screen overflow-hidden">
      {pokemon ? (
        <div className="text-white min-h-screen">
          <div className="flex flex-row items-center lg:gap-40 sm:gap-10 flex-wrap min-h-screen justify-center relative">
            <motion.div
              className="flex flex-row self-start p-5  gap-10 text-3xl absolute top-1 left-1"
              initial={{
                x: 50,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.2,
                ease: "linear",
              }}
            >
              <AiOutlineClose
                className="cursor-pointer hover:scale-125 active:scale-75 transition-all"
                onClick={goToHomePage}
              />
              <AiOutlineArrowLeft
                className="cursor-pointer hover:scale-125 active:scale-75 transition-all"
                onClick={goToPreviousPokemon}
              />
              <AiOutlineArrowRight
                className="cursor-pointer hover:scale-125 active:scale-75 transition-all"
                onClick={goToNextPokemon}
              />
            </motion.div>
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
    </motion.section>
  );
}

export default Details;
