import React from 'react'
import styled from 'styled-components'

export const Line = () => {
  return (
    <Linedivision/>
  )
}

const Linedivision = styled.hr`
  height: 0.2vh; /* Increases line weight */
  border: none; /* Removes the default border style */
  background: ${({theme})=>theme.text};
  width: 40%; /* Makes the line span the container width */
  margin-bottom:4vh;
`;

export default Line;