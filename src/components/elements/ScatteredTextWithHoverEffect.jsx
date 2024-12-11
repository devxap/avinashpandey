import React from 'react';
import styled from 'styled-components';

export const ScatteredTextWithHoverEffect = ({ items, extendedContent }) => {
    // Generate random positions and rotations for the items
    const generateRandomStyle = () => {
        const randomLeft = `${Math.random() * 30}vw`;  // Random horizontal position
        const randomTop = `${Math.random() * 60}vh`;  // Random vertical position
        const randomRotation = `${(Math.random() - 0.5) * 90}deg`;  // Random rotation between -45 and 45 degrees

        return {
            left: randomLeft,
            top: randomTop,
            transform: `rotate(${randomRotation})`,
        };
    };

    return (
        <Container>
            {items.map((item, index) => (
                <TextDivWrapper key={index} style={generateRandomStyle()}>
                    <div className="textDiv">
                        {item}
                    </div>
                    <div className="extendedDiv">
                        {extendedContent[index]}
                    </div>
                </TextDivWrapper>
            ))}
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:auto;
    position: relative;
    height: 100%;
    width: 100%;
`;

const TextDivWrapper = styled.div`
    transition: transform 0.3s ease;
    cursor: pointer;
    display:flex;

    .textDiv {
    disply:flex;
    justify-content:center;
    align-items:center;
        padding: 2.2vh;
        background: #ddd;
        border-radius: 2vh;
        text-align: center;
        transition: all 0.3s ease;
        width: 15vw;
        height:8vh;
        font-size: 2.2vh;
    }
    .extendedDiv {
        display: none;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding: 4vh;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        border-radius: 2vh;
        width: 20vw;
        height:20vh;
        z-index: 10;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
    }

    &:hover {
        .textDiv {
            transform: scale(1.2);
        }
        .extendedDiv {
            display: block;
        }
    }
`;

export default ScatteredTextWithHoverEffect;
