import pizzaImg from "/pizza1.png";
import { motion } from "framer-motion";
import ".././pages/styles/pizzas.css";

const Pizza1 = ({ move, handleMoveL, handleMoveR, handleViewP2, handleViewP3 }) => {
  return (
    <>
      <section className="pizza1-wrapper">
        <div className="text-pizza1">
          <h2>PEPERONI</h2>
          <p>Lorem ipsum dolor sit, amet Eum rerum excepturi nam enim
          Lorem ipsum dolor sit, amet Eum rerum excepturi nam enim
          </p>
        </div>

        <section className="pizza1">
          <div className="pizza-btn">
            <motion.button onClick={() =>{
              handleMoveL();
              handleViewP3();
              }}
               className="btn-prev">
                <i className="bx bxs-chevron-left"></i>
            </motion.button>
            <motion.button onClick={() =>{
              handleMoveR();
              handleViewP2();
            }
               }
                className="btn-next">
                <i className="bx bxs-chevron-right"></i>
            </motion.button>
          </div>

          <motion.div
            className="pizza1-img"
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

export default Pizza1;
