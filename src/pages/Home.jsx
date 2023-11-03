import logo from "/logo5.png";
import pizzaHome from "/bg-pizza4.png";
import Pizza1 from "../components/Pizza1";
import Pizza2 from "../components/Pizza2";
import Pizza3 from "../components/Pizza3";
import Contact from "../components/Contact";
import photo from "/bg-pizza6.jpeg";
import dataImg from "/data-img.png";
import dataImg2 from "/data-img2.png";
import dataImg3 from "/data-img3.png";
import { motion } from "framer-motion";
import { useState } from "react";
import "./styles/home.css";

const motionVariants = [
  {
    variantR: {
      hidden: {
        rotateZ: -90,
        opacity: 0.3,
      },
      visible: {
        rotateZ: 0,
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      },
      exit: {
        rotateZ: 90,
        opacity: 0,
        transition: {
          duration: 0.7,
        },
      },
    },
  },
  {
    variantL: {
      hidden: {
        rotateZ: 90,
        opacity: 0.3,
      },
      visible: {
        rotateZ: 0,
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      },
      exit: {
        rotateZ: -90,
        opacity: 0,
        transition: {
          duration: 0.7,
        },
      },
    },
  },
];
const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const variants2 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .7,
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const variants3 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}

const Home = () => {
  const [move, setMove] = useState(motionVariants[0].variantR);

  const [activeContact, setIsActiveContact] = useState(false);

  const [activeP, setIsActiveP] = useState(true);
  const [activeP2, setIsActiveP2] = useState(false);
  const [activeP3, setIsActiveP3] = useState(false);

  const handleMoveR = () => {
    setMove(motionVariants[0].variantR);
  };
  const handleMoveL = () => {
    setMove(motionVariants[1].variantL);
  };

  const handleViewContact = () => {
    setIsActiveP(false);
    setIsActiveP2(false);
    setIsActiveP3(false);
    setIsActiveContact(true);
  };

  const handleViewP1 = () => {
    setIsActiveP(true);
    setIsActiveP2(false);
    setIsActiveP3(false);
    setIsActiveContact(false);
  };

  const handleViewP2 = () => {
    setIsActiveP(false);
    setIsActiveP2(true);
    setIsActiveP3(false);
  };

  const handleViewP3 = () => {
    setIsActiveP(false);
    setIsActiveP2(false);
    setIsActiveP3(true);
  };

  return (
    <>
      <main className="home-wrapper">
        <motion.section
          className="logo"
          variants={variants2}
          initial="hidden"
          animate="visible"
        >
          <img src={logo} alt="" />
        </motion.section>

        <motion.section
          className="text"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <div className="title">
            <h1>HOT CHEESE</h1>
            <p>Pizzeria</p>
          </div>
        </motion.section>

        <motion.div
          className="img-home"
          variants={variants2}
          initial="hidden"
          animate="visible"
        >
          <img src={pizzaHome} alt="" />
        </motion.div>
      </main>

      <section className="home2">
        <div className="photo">
          <img src={photo} alt="" />
        </div>
        <article className="slogan">
          <h4>Good things have a way to come together</h4>
        </article>
      </section>

      <section className="cards-wrapper">
        <div className="card">
          <div className="card-img first">
            <img src={dataImg} alt="" />
          </div>
          <article className="card-data">
            <h3>ORDER YOUR FOOD</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              deleniti.
            </p>
          </article>
        </div>
        <div className="card">
          <div className="card-img sec">
            <img src={dataImg3} alt="" />
          </div>
          <article className="card-data">
            <h3>DELICIOUS RECEIPE</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              deleniti.
            </p>
          </article>
        </div>
        <div className="card">
          <div className="card-img third">
            <img src={dataImg2} alt="" />
          </div>
          <article className="card-data">
            <h3>DELIVERY OR PICK UP</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              deleniti.
            </p>
          </article>
        </div>
      </section>

      <section className="btn-menu">
        <button onClick={handleViewP1}>MENU</button>
        <button onClick={handleViewContact}>CONTACT</button>
      </section>

      {activeContact && <Contact />}

      {activeP && (
        <Pizza1
          move={move}
          handleMoveL={handleMoveL}
          handleMoveR={handleMoveR}
          handleViewP2={handleViewP2}
          handleViewP3={handleViewP3}
          variants3 = {variants3}
        />
      )}
      {activeP2 && (
        <Pizza2
          move={move}
          handleMoveL={handleMoveL}
          handleMoveR={handleMoveR}
          handleViewP1={handleViewP1}
          handleViewP3={handleViewP3}
          variants3 = {variants3}
        />
      )}
      {activeP3 && (
        <Pizza3
          move={move}
          handleMoveL={handleMoveL}
          handleMoveR={handleMoveR}
          handleViewP1={handleViewP1}
          handleViewP2={handleViewP2}
          handleViewP3={handleViewP3}
          variants3 = {variants3}
        />
      )}
    </>
  );
};

export default Home;
