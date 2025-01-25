import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    height: ${(props) => props.height || 'auto'};
    width: ${(props) => props.width || '50%'};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 20px;
    background-color: rgba(31, 60, 31, 0.7);
    border-radius: 10px;
    text-align: center;
    border: 1rem solid #92B775;
    position: relative;
    z-index: 1;

    h1 {
        font-size: 6rem;
        color: rgba(243, 232, 211, 1);
        margin-bottom: 20px;
        margin-top: 20px;
    }

    h3,h4 {
        font-size: 2rem;
        color: rgba(243, 232, 211, 1);
        margin: 2px;
    }
`;

export const Intro = ({ height, width }) => {
    return (
        <StyledDiv height={height} width={width}>
            <h1>Central Library</h1>
            <h3>Indian Institute of Technology, Bombay</h3>
            <h4>Mumbai, Maharashtra - 400076</h4>
        </StyledDiv>
    );
};