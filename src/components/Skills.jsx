import React from 'react';
import styled from 'styled-components';

export const Skills = () => {
    const textItems = [
        "C++",
        "Python",
        "Java",
        "JavaScript",
        "HTML/CSS",
        "SQL",
        "Shell Script",
        "Market Research",
        "Effective Communication",
        "Data Analysis",
        "Strategic Thinking",
        "Leadership",
        "NodeJS",
        "ExpressJS",
        "ReactJS",
        "Flask",
        "GitHub",
        "Postman",
        "Figma",
        "Git",
        "MS Office"
    ];
    
  return (
    <SkillsContainer>
      <ItemContainer>
        {textItems.map((item, index) => (
          <ItemContentWrapper key={index}>
            <ItemContent>
              <div>{item}</div>
            </ItemContent>
          </ItemContentWrapper>
        ))}
      </ItemContainer>
    </SkillsContainer>
  );
};

// Styled Components
const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;  
  width: 100%;
  padding: 30px;
  overflow-y: auto;

  /* Custom Scrollbar */
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: ${({ theme }) => `${theme.scrollbar} ${theme.scrollbarBg}`};

  &::-webkit-scrollbar {
    width: 2px; /* Width for vertical scrollbar */
    height: 2px; /* Height for horizontal scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbar};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.scrollbarBg};
  }

  @media (max-width: 1024px) {
    padding: 15px;  
    height: auto;  
  }

  @media (max-width: 768px) {
    padding: 10px;  
    height: auto;  
  }

  @media (max-width: 480px) {
    padding: 5px;  
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  align-items: center;
  gap: 20px; 
  width: 100%;
  height: 100%; 
  overflow-y: auto;

  /* Custom Scrollbar */
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: ${({ theme }) => `${theme.scrollbar} ${theme.scrollbarBg}`};

  &::-webkit-scrollbar {
    width: 2px; /* Width for vertical scrollbar */
    height: 2px; /* Height for horizontal scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbar};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.scrollbarBg};
  }

  @media (max-width: 1024px) {
    gap: 15px;  
  }

  @media (max-width: 768px) {
    gap: 10px;  
  }

  @media (max-width: 480px) {
    gap: 8px; 
  }
`;

const ItemContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw; 
  min-width: 200px; 
  border: 1px solid ${({theme})=>theme.border};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    width: 30vw;  
    min-width: 180px;  
  }

  @media (max-width: 768px) {
    width: 40vw;  
    min-width: 150px;  
  }

  @media (max-width: 480px) {
    width: 80vw; 
    min-width: 120px;  
    padding: 15px;
  }
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap:2vh;
`;


const ExtendedContent = styled.div`
  margin-top: 15px;
  font-size: 1rem;
  color: #333;
  text-align: justify;
  padding: 10px;
  background-color: #e9e9e9;
  border-radius: 5px;
`;

export default Skills;
