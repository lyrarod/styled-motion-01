import styled from "styled-components";
import Overlay from "../components/Overlay";
import { motion } from "framer-motion";

const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #201e50;
  background-image: url("/assets/grunge-wall.png");
  overflow: hidden;

  h1 {
    font-size: 7rem;
    font-weight: 900;
    font-family: "Orbitron", sans-serif;
    /* background: linear-gradient(red, blue);
    background-clip: text;
    -webkit-background-clip: text; */
    color: whitesmoke;
    text-shadow: 3px 3px 3px #0009;

    @media screen and (max-width: 665px) {
      font-size: 3.5rem;
      text-shadow: 2px 2px 2px #0009;
    }
  }
`;

const h1Variants = {
  show: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 5,
      ease: "backInOut",
    },
  },
  hidden: {
    y: 100,
    scale: 0,
    opacity: 0,
  },
};

export default function Home() {
  return (
    <>
      <Section>
        <Overlay />
        <motion.h1 initial="hidden" animate="show" variants={h1Variants}>
          liraCode
        </motion.h1>
      </Section>
    </>
  );
}
