import pizzaImg from "/pizza2.png";
import { motion } from "framer-motion";
import ".././pages/styles/pizzas.css";


const Pizza2 = ({
  move,
  handleMoveL,
  handleMoveR,
  handleViewP1,
  handleViewP3,
  variants3
}) => {
  return (
    <>
      <section className="pizza2-wrapper">
        <motion.div className="text-pizza2"
         variants={variants3}
         initial="hidden"
         animate="visible"
         >
          <h2>CHICKEN CHEESE</h2>
          <p>
            Lorem ipsum dolor sit, amet Eum rerum excepturi nam enim Lorem ipsum
            dolor sit, amet Eum rerum excepturi nam enim
          </p>
        </motion.div>
        <section className="pizza2">
          <div className="pizza-btn">
            <button
              onClick={() => {
                handleMoveL();
                handleViewP1();
              }}
              className="btn-prev"
            >
              <i className="bx bxs-chevron-left"></i>
            </button>

            <button
              onClick={() => {
                handleMoveR();
                handleViewP3();
              }}
              className="btn-next"
            >
              <i className="bx bxs-chevron-right"></i>
            </button>
          </div>

          <motion.div
            className="pizza2-img"
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

export default Pizza2;
