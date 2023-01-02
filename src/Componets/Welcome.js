import React from "react";
import styled from "styled-components";




const WelcomeDiv = styled.div`
   
`
const TextDiv = styled.div`
    font-size: ${props => props.primary ? "10px" : "5px"};
    font-weight: 15px;
    font-style: monospace;

`

function Welcome () {
    return (
        <WelcomeDiv>
            <TextDiv primary><h1>Welcome to plantI</h1></TextDiv>
            <TextDiv><h1>Hello Noble. Welcome back!</h1></TextDiv>
        </WelcomeDiv>
    )
}


export default Welcome;