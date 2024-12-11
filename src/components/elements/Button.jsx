import React from 'react'
import {  motion, spring } from 'framer-motion';
import styled from 'styled-components';

 export const Button = ({ btntxt, linktxt, onClick }) => {
  return (
    <MotionButton
      onClick={onClick}  
      layout
      whileHover={{ scale: 1.1, rotate: "-5deg" }}
      whileTap={{ scale: 0.8 }}
      transition={{
        duration: 0.5,
        type: spring,
        damping: 5
      }}
    >
      <a href={linktxt} target="_blank" rel="noopener noreferrer">
        {btntxt}
      </a>
    </MotionButton>
  )
}

const MotionButton = styled(motion.button)`
  background: ${({ theme }) => theme.buttonBg}; 
  font-size: 3vh;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1vh 2vh;
  cursor: pointer;
  transition: all 0.1s ease;
  border-radius:0.5vw;

  &a:hover {
    background: ${({ theme }) => theme.buttonText};
    color: ${({ theme }) => theme.border};
    transform: scale(1.1);
  }

  &a:active {
    transform: scale(0.95);
  }

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.buttonText}; 
    font-family: 'Courier New', Courier, monospace;
  }
`;

export default Button;