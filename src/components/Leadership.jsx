import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './elements/Button';

export const Leadership = () => {
    const textItems = [
        "President - FED KIIT",
        "Senior Operations Executive - FED KIIT",
        "Founder - FreeTern",
        "Community Head - Team Jazbaat",
        "Scrum Master - The Entrepreneurship Network",
      ];
      
      const extendedContent = [
        "Led FED KIIT as President from Nov 2023 to Oct 2024. Key responsibilities included project management, team recruitment, and fostering organizational growth. Skills: Leadership, Data Analysis, Marketing Management, Public Relations, Corporate Communications.",
        "Served as Senior Operations Executive at FED KIIT from Nov 2022 to Nov 2023. Managed social media marketing, executive support, and business communications. Skills: Social Media Management, Copywriting, Business Communications.",
        "Founded FreeTern, a startup focused on social media management and team collaboration, operating remotely from Mar 2022 to May 2024. Skills: Entrepreneurship, Social Media Marketing, Creative Ideation, Team Management.",
        "Community Head of Team Jazbaat from Aug 2020 to Aug 2022. Oversaw executive support, social media management, and community engagement in Lucknow, India. Skills: Business Communications, Team Management, Executive Support.",
        "Worked as a Scrum Master at The Entrepreneurship Network from Aug 2021 to Nov 2021. Coordinated agile practices and streamlined project workflows. Skills: Scrum Methodology, Team Collaboration, Agile Project Management."
      ];
      

  const [expandedItem, setExpandedItem] = useState(null);

  const handleReadMoreClick = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <LeadershipContainer>
      <ItemContainer>
        {textItems.map((item, index) => (
          <ItemContentWrapper key={index}>
            <ItemContent>
              <div>{item}</div>
              <Button btntxt={expandedItem === index ? 'Read Less' : 'Read More'} onClick={() => handleReadMoreClick(index)} />
              {expandedItem === index && (
                <ExtendedContent>{extendedContent[index]}</ExtendedContent>
              )}
            </ItemContent>
          </ItemContentWrapper>
        ))}
      </ItemContainer>
    </LeadershipContainer>
  );
};

// Styled Components
const LeadershipContainer = styled.div`
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
  text-align: center;
  padding: 10px;
  background-color: #e9e9e9;
  border-radius: 5px;
`;

export default Leadership;
