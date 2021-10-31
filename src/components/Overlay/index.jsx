import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div).attrs(() => {
  return {
    variants: wrapper,
    animate: "show",
  };
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 2000;
  display: ${({ endanimation }) => (endanimation ? "none" : "flex")};
`;

const Item = styled(motion.div).attrs(() => {
  return {
    variants: item,
  };
})`
  width: 100%;
  background: ${(props) => props.color || "#201E50"};
`;

const wrapper = {
  show: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  show: {
    y: "-100%",
    transition: {
      duration: 1,
    },
  },
};

export default function index() {
  const [endAnimation, setEndAnimation] = useState();

  const onComplete = (def) => {
    console.log("Animation completed!", def);
    if (def === "show") setEndAnimation(1);
  };

  return (
    <Wrapper onAnimationComplete={onComplete} endanimation={endAnimation}>
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <Item key={i} />
        ))}
    </Wrapper>
  );
}
