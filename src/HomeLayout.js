import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Home from "./Home";


const ParentContainer = styled.div`
    display: flex;
    border: 1px solid #878484;
    box-shadow: -9px 16px 11px 17px #4443402e;
    border-radius: 5px;
    height: auto;
    max-width: 70vw;
    margin: 50px auto;
`





function HomeLayout () {
    return (
       <ParentContainer>
                <Nav/>
                <Home/>
       </ParentContainer>
    )
}

export default HomeLayout;

