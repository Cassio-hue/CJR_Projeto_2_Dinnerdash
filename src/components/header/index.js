import React from "react";
import { HeaderSty, Logo, ParaSty, DivLogo, NavSty } from './styles'

const Header = () => {
    return (
        <HeaderSty>
            <DivLogo>
                <Logo>dinnerdash</Logo>
                    <NavSty>
                        <ParaSty>backoffice</ParaSty>
                        <ParaSty>perfil</ParaSty>
                        <ParaSty>sair</ParaSty>
                    </NavSty>
            </DivLogo>
            <div>
                <h2>Backoffice</h2>
                <p>Gerencie pedidos, refeições e mais.</p>
            </div>
        </HeaderSty>
    )
}

export default Header;