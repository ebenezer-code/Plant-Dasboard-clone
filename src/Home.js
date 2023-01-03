import React from 'react';
import styled from 'styled-components';
import Welcome from "./Componets/Welcome";
import Search from "./Componets/Search";
// import Icons from "./Componets/Icons";

const Main = styled.main`
         background-color: #95959526;
         flex-grow: 3;
         

`


function Home() {
       return (
            <Main>
                <Welcome />
                <Search />
                {/* <Icons /> */}
            </Main>
        )
}


export default Home;