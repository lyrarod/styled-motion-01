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
  /* background-color: #004f8c; */
  background-color: #c4f1be;
  background-image: url("http://www.transparenttextures.com/patterns/grunge-wall.png");
  overflow: hidden;

  h1 {
    font-size: 5rem;
    font-family: "Orbitron", sans-serif;
    font-weight: 900;
    background: linear-gradient(red, blue);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    @media screen and (max-width: 499px) {
      font-size: 4rem;
    }
  }
`;

const h1Variants = {
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 1,
      duration: 3,
      ease: "backInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0,
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
