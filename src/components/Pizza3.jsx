import pizzaImg from "/pizza3.png";
import { motion } from "framer-motion";
import ".././pages/styles/pizzas.css";


const Pizza3 = ({
  move,
  handleMoveL,
  handleMoveR,
  handleViewP2,
  handleViewP1,
}) => {
  return (
    <>
      <section className="pizza3-wrapper">
        <div className="text-pizza3">
          <h2>NAPOLITANA</h2>
          <p>
            Lorem ipsum dolor sit, amet Eum rerum excepturi nam enim Lorem ipsum
            dolor sit, amet Eum rerum excepturi nam enim
          </p>
        </div>
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
