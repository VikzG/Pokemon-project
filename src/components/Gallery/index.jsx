import Card from "../Card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";


function Gallery() {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

    const [pokemonList, setPokemonList] = useState([]);
    
    const navigate = useNavigate();

    const openDetails = (id) => { 
      console.log("Clic détecté pour l'ID du Pokémon :", id);
        navigate(`/details/${id}`);
      };

    useEffect(() => {
        const fetchPokemon = async () => {
          try {
            const response = await axios.get(
              "https://pokebuildapi.fr/api/v1/pokemon/limit/151"
            );
            setPokemonList(response.data);
          } catch (error) {
            console.error(
              "Une erreur s'est produite lors de la récupération des données des Pokémon : ",
              error
            );
          }
        };
    
        fetchPokemon();
      }, []);

  return (
    <motion.section 
    className="flex flex-row justify-center flex-wrap gap-7 mt-10"
    variants={container}
    initial="hidden"
    animate="visible"
    >
      {pokemonList.map((pokemon, index) => (
        <Card 
          key={index} 
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.apiTypes}
          sprite={pokemon.sprite}
          onClick={() => openDetails(pokemon.id)}
        />
      ))}
    </motion.section>
  );
}

export default Gallery;
