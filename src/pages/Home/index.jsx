import Gallery from "../../components/Gallery";
import pokeball from "../../assets/pokeball.png"
import './style.css';

function Home() {
  return (
    <section className="home flex flex-col items-center">
      <div className="title-composition">
      <img src={pokeball} className="pokeball" alt="pokeball"></img>
      <h1 className="text-5xl font-bold">Pokemon Animated Pokedex</h1>
      <img src={pokeball} className="pokeball" alt="pokeball"></img>
      </div>
      <h2 className="text-3xl font-semi-bold">Welcome to the Pokemon's world Pokedex !</h2>
      <Gallery />
    </section>
  );
}

export default Home;
