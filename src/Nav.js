import React from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import {MdDashboard,MdProductionQuantityLimits,MdCelebration,MdRemoveShoppingCart} from "react-icons/md";

const NavContainer = styled.nav`
    border-right: 1px solid #878484;
    flex-grow: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const NavUl = styled.ul`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
        list-style: none;
        margin: 20px;
        padding: 10px;
`
const NavLi = styled.li`
        padding: 10px 0;
`
const LinkDiv = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: center;

`
const NavP = styled.p`
        font-size: 20px;
        font-weight: 100;
        font-family: ${props => props.primary ? "arial san-serif" : "monospace"};
        color: ${props => props.primary ? "#0e0e0e" : "#34af32"};

`


function Nav () {
        return(

                <NavContainer>
                          <NavP>
                         Planti.
                        </NavP>
                        <NavP primary>
                                Quick Menu
                        </NavP>
                    <NavUl>
                        <LinkDiv>
                              <MdDashboard className="icon"/> 
                               <NavLi>
                                <Link to= "/dashboard" className="link">Dashboard</Link>
                               </NavLi>   
                        </LinkDiv>
                        <LinkDiv>
                                <MdRemoveShoppingCart className="icon"/>
                               <NavLi>
                                <Link to= "/myorders" className="link">My Orders</Link>
                               </NavLi>
                        </LinkDiv>
                        <LinkDiv>
                                <MdCelebration className="icon"/>
                               <NavLi>
                                <Link to= "/explore" className="link">Explore</Link>
                               </NavLi>
                        </LinkDiv>
                        <LinkDiv>
                                <MdProductionQuantityLimits className="icon"/>          
                               <NavLi>
                                <Link to= "/products" className="link">Products</Link>
                               </NavLi>         
                        </LinkDiv>
                    </NavUl>
                   
                    <Outlet/>
                </NavContainer>
        )
}


export default Nav;