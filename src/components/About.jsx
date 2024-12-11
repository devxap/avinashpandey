import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { styled } from 'styled-components';
import avinashpandey from '../assets/bnw.png';
import { Button } from './elements/Button';
import { Line } from './elements/Line';

export const About = () => {
    return (
        <>
            <AboutContainer>
                <AboutName>
                    <p>AVINASH PANDEY.</p>
                </AboutName>
                <AboutProfileCard>
                <AboutImageContainer>
                        <img src={avinashpandey} alt='Avinash Pandey' />
                    </AboutImageContainer>
                    <AboutProfileContent>
                        <AboutDescription>
                            <p>I am enthusiastic about developing valuable and innovative solutions to create impact at a global scale. I preserve experience of over an year in directing and working with teams of diverse natures. I am also equally inclined towards the welfare of the society in general.</p>
                        </AboutDescription>
                        
                        <AboutButtons>
                            <Button btntxt ="Resume" linktxt="https://drive.usercontent.google.com/download?id=1cln6tBOhzFXXanVSGtrA9YjjmaI6Gf_a&export=download&authuser=0&confirm=t&uuid=2ed0d8c7-5cff-44b9-a1e6-85b033d65b44&at=APvzH3pgbVQv42Idh3L2V6lKdTXf:1733689708775"/>
                            <Button btntxt ="Github" linktxt="https://www.github.com/devxap" />
                            <Button btntxt="Leetcode" linktxt="https://www.leetcode.com/dispuzzler" />
                        </AboutButtons>
                    </AboutProfileContent>
                    
                </AboutProfileCard>
                <Line/>

                <SocialContainer>
                    <a href="https://instagram.com/avinashxpandey" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com/in/avinashatwork" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </SocialContainer>
            </AboutContainer>
        </>
    );
};

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5vh;
    align-items: center;
    height: 80vh;
    width: 100vw;

    @media (max-width: 768px) {
        gap: 3vh;
        height: auto;
        padding: 10px;
    }
`;

const AboutProfileCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 60vw;
    gap:3vw;

    @media (max-width: 1024px) {
        width: 60vw;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content:center;
        align-items:center;
        width: 60vw;
        gap: 5vh;
    }
`;

const AboutImageContainer = styled.div`
    display: flex;
    height: 30vh;
    width: auto;
    justify-content: center;
    align-items: center;

    img {
        height: 100%;
        width: auto;
        object-fit: cover;
        border-radius: 10%;

        @media (max-width: 768px) {
            width:30vh;
            height: auto;
            border-radius: 50%;
        }
    }
`;

const AboutName = styled.div`
    display: flex;
    align-items: center;
    height: 10vh;

    p {
        font-size: 13vh;
        font-weight: 500;

        @media (max-width: 768px) {
            font-size: 6vh;
            text-align: center;
        }
    }
`;

const AboutProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    gap: 4vh;

    @media (max-width: 768px) {
        width: 100%;
        gap: 2vh;
        
    }
`;

const AboutDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;

    p {
        font-size: 2.5vh;
        margin: auto;
        text-align: justify;
        text-justify: inter-word;

        @media (max-width: 768px) {
            font-size: 3.5vh;
            text-align:center;
        }
    }
`;

const AboutButtons = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100%;
    gap: 2vw;

    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        gap: 2vw;
        justify-content:center;
        align-items:center;
    }
`;

const SocialContainer = styled.div`
    display: flex;
    gap: 1vw;
    height: 10vh;
    justify-content: center;
    align-items: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 6vh;
        color: ${({ theme }) => theme.text};
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.2);
        }

        @media (max-width: 768px) {
            font-size: 5.5vh;
        }
    }   
`;

export default About;