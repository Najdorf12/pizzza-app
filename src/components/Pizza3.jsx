import pizzaImg from "/pizza3.png";
import { motion } from "framer-motion";
import ".././pages/styles/pizzas.css";


const Pizza3 = ({
  move,
  handleMoveL,
  handleMoveR,
  handleViewP2,
  handleViewP1,
  variants3
}) => {
  return (
    <>
      <section className="pizza3-wrapper">
        <motion.div className="text-pizza3"
         variants={variants3}
         initial="hidden"
         animate="visible"
         >
          <h2>NAPOLITANA</h2>
          <p>
           distinctio illo blanditiis veniam asperiores, animi minima excepturi
           distinctio illo blanditiis veniam asperiores, animi minima excepturi
          </p>
        </motion.div>
        <section className="pizza3">
          <div className="pizza-btn">
            <button
              onClick={() => {
                handleMoveL();
                handleViewP2();
              }}
              className="btn-prev"
            >
              <i className="bx bxs-chevron-left"></i>
            </button>
            <button
              onClick={() => {
                handleMoveR();
                handleViewP1();
              }}
              className="btn-next"
            >
              <i className="bx bxs-chevron-right"></i>
            </button>
          </div>

          <motion.div
            className="pizza3-img"
            variants={move}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <img src={pizzaImg} alt="" />
          </motion.div>
        </section>
      </section>
    </>
  );
};

export default Pizza3;
