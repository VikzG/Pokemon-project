import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ id, name, sprite, onClick }) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <Link to={`/details/${id}`} className="card-link">
        <motion.div
          key={id}
          whileHover={{
            scale: 1.1
          }}
          variants={item}
          className="drop-shadow-lg flex flex-col rounded-2xl items-center justify-center w-32 h-36 bg-blue-200 cursor-pointer"
          onClick={() => onClick(id)}
        >
          <img src={sprite} alt={name} className="drop-shadow-2xl w-30 h-30" />
          <h4 className="text-black text-xl font-bold">{name}</h4>
        </motion.div>
      </Link>
    </>
  );
}

export default Card;
