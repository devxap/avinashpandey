import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './elements/Button';

export const Projects = () => {
    const textItems = [
        "WiFi-MAC based Automatic Attendance System",
        "Route optimization for Freight Trains in India",
        "Faculty-Student Appointment Management Platform",
        "Chat-App",
        "E-commerce Website"
    ];

    const extendedContent = [
        "Identified a problem in attendance management by faculties. Created an application to mark the attendance of students using their device’s mac-address via ping-sweeping. Tech Stack: Flask (Python)",
        "Identified the key problem of frequent delays in service of goods container trains in India. Created a superficial algorithm to find the most optimal path using Floyd-Warshall all-pair multi-source, multi-destination algorithm. Tech Stack: Node, React, Express",
        "Identified the key problem of communication gap between faculties and students. Developed a functional prototype to solve this problem by developing an appointment management system on the MERN Framework. Tech Stack: Node, React, Express, MongoDB",
        "Created a text-based chat application with real-time text exchange using Socket.IO for implementing socket functions. Tech Stack: Node, React, Express, MongoDB, Socket.IO",
        "Developed a functional e-commerce platform as a personal learning project, which manages users, roles, and products. Implemented a modular design. Tech Stack: Node, React, Express, MongoDB, Postman, Cloudinary, Razorpay"
    ];

    const [expandedItem, setExpandedItem] = useState(null);

    const handleReadMoreClick = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    const extractTechStack = (content) => {
        const techStackRegex = /Tech Stack: (.+)/;
        const match = content.match(techStackRegex);
        return match ? match[1] : '';
    };

    return (
        <ProjectsContainer>
            <InnerContainer>
                <InnerLeftContainer>
                    {textItems.map((item, index) => (
                        <ItemContentWrapper key={index}>
                            <Button
                                btntxt={item}
                                onClick={() => handleReadMoreClick(index)}
                            />
                        </ItemContentWrapper>
                    ))}
                </InnerLeftContainer>

                <InnerRightContainer>
                    {expandedItem !== null ? (
                        <div>
                            <ExtendedContent>{extendedContent[expandedItem]}</ExtendedContent>
                            <TechStackTextBox
                                readOnly
                                value={extractTechStack(extendedContent[expandedItem])}
                            />
                        </div>
                    ) : (
                        <DefaultContent>Select a project to view details.</DefaultContent>
                    )}
                </InnerRightContainer>
            </InnerContainer>
        </ProjectsContainer>
    );
};

// Styled Components
const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;  
  width: 100%;
  padding: 5vh;

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
    padding: 3vh;
    height: auto;  
  }

  @media (max-width: 768px) {
    padding: 5vh;  
    height: auto;  
  }

  @media (max-width: 480px) {
    padding: 5vh;  
  }
`;

const DefaultContent = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;  /* Aligns left and right containers horizontally */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap:2vw;
`;

const InnerLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 30%;
  gap: 2vh;
  max-height: 100%; /* Use the full height of the parent container */
  overflow-y: auto; /* Enable scrolling for the left container */

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
    width: 30%;
  }

  @media (max-width: 768px) {
    width: 30%;
  }

  @media (max-width: 480px) {
    width: 50%;
  }
`;

const InnerRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-left: 1vh;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 50%;
    padding-left: 10px;
  }
`;

const ItemContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    min-width: 180px;
  }

  @media (max-width: 768px) {
    min-width: 150px;
  }

  @media (max-width: 480px) {
    min-width: 120px;
    padding: 15px;
  }
`;

const ExtendedContent = styled.div`
  margin:auto;
  font-size: 1rem;
  color: #333;
  text-align: center;
  padding: 10px;
  background-color: #e9e9e9;
  border-radius: 5px;
`;

const TechStackTextBox = styled.textarea`
  margin-top: 15px;
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  resize: none;
  box-sizing: border-box;
  color: #333;
`;

export default Projects;
