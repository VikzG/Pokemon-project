import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion,useInView } from "framer-motion";

function Card({ id, name, sprite, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <Link to={`/details/${id}`} className="card-link">
        <motion.div
          key={id}
          ref={ref}
          initial={{
            y:20,
            opacity:0,
          }}
          animate={{
            y: isInView ? 0:20,
            opacity:isInView ? 1:0,
          }}
          transition={{
            delay: 0.1,
          }}
          whileHover={{
            scale: 1.1
          }}
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
