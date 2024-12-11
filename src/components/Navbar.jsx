import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = ({ toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <NavigationBar>
                <MenuIcon onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </MenuIcon>
                <NavLinks isOpen={isOpen}>
                    <Link to="/" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
                    <Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
                    <ToggleButton onClick={toggleTheme}>Flip Theme</ToggleButton>
                </NavLinks>
            </NavigationBar>
        </>
    );
};

const NavigationBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2vw;
    height: 20vh;
    color: ${({ theme }) => theme.text};
    position: relative;

    @media (max-width: 768px) {
        padding: 0 4vw;
    }
`;

const MenuIcon = styled.div`
    display: none;
    font-size: 4vh;
    cursor: pointer;

    @media (max-width: 600px) {
        display: block;
    }
`;

const NavLinks = styled.div`
    display: flex;
    gap: 4vw;
    align-items: center;

    a {
        font-size: 3.5vh;
        text-decoration: none;
        color: ${({ theme }) => theme.text};
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.2);
        }
    }

    @media (max-width: 600px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 10vh;
        left: 0;
        width: 100%;
        background: ${({ theme }) => theme.background};
        padding: 2vh 0;
        gap: 2vh;

        a {
            text-align: center;
        }
    }
`;

const ToggleButton = styled.button`
    padding: 1vh 2vw;
    background: ${({ theme }) => theme.buttonBg};
    color: ${({ theme }) => theme.buttonText};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
    font-size: 2.5vh;

    &:hover {
        background: ${({ theme }) => theme.border};
    }

    @media (max-width: 768px) {
        margin: 0 auto;
    }
`;