import React from "react";
import { NavStyled, LinkStyled } from './styles';


const NavBar = () => {
    return (
        <NavStyled>
            <LinkStyled>Pedidos</LinkStyled>
            <LinkStyled>Usuários</LinkStyled>
            <LinkStyled>Refeições</LinkStyled>        
            <LinkStyled>Categorias de Refeição</LinkStyled> 
        </NavStyled>
    )
}


export default NavBar;