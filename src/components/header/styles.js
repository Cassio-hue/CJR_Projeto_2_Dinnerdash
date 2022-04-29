import styled from "styled-components";

export const HeaderSty = styled.header `
    color: var(--nav-links-color);
    background-image: var(--dark-layer), var(--bg-img-header);
    background-size: cover;
    background-position: center;
    height: 35vh;
    padding: 2% 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Logo = styled.h1 `
    font-size: 1.2rem;
    cursor: pointer;
`

export const ParaSty = styled.p `
    cursor: pointer;
    display: inline-block;
    padding-left: 1%;
    &:hover {
        color: var(--nav-link-hover-color);
    }

`

export const NavSty = styled.nav `
    display: flex;
    column-gap: 2rem;
`

export const DivLogo = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`