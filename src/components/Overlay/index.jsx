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

const index = () => {
  const [endAnimation, setEndAnimation] = useState();

  return (
    <Wrapper
      onAnimationComplete={(def) => {
        console.log("Completed Animating! ", def);
        if (def === "show") setEndAnimation(1);
      }}
      endanimation={endAnimation}
    >
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <Item key={i} />
        ))}
    </Wrapper>
  );
};

export default index;
