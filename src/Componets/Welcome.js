import React from "react";
import styled from "styled-components";




const WelcomeDiv = styled.div`

`
// const TextDiv = styled.div`
//     font-size: ${props => props.primary ? "10px" : "5px"};
//     font-weight: 15px;
//     font-style: monospace;

// `

function Welcome () {
    return (
        <WelcomeDiv>
          <span>Welcome to plantI</span>
          <code>Hello Noble. Welcome back!</code>
        </WelcomeDiv>
    )
}


export default Welcome;