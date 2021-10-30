import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: #0009; */
  display: flex;
  pointer-events: none;
  z-index: 2000;
`;

const Item = styled(motion.div).attrs(() => {
  return {
    variants,
    animate: "visible",
  };
})`
  width: 100%;
  background: ${(props) => props.color || "#201E50"};
`;

const variants = {
  visible: (custom) => ({
    y: "-100%",

    transition: {
      delay: custom * 0.3,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const index = () => {
  return (
    <Wrapper>
      <Item custom={0} />
      <Item custom={1} />
      <Item custom={2} />
    </Wrapper>
  );
};

export default index;
