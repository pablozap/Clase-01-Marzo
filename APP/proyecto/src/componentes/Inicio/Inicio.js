import styled from 'styled-components';
import React from 'react';
export default class Inicio extends React.Component {
    render() {
        return (
            <div>
                <Titulo>Bienvenido</Titulo>
                <Button>Ingresar</Button>
            </div>
        )
    } 
}
const Titulo = styled.h1`
    font-size: 3rem;
    text-align: center;
    color: blue;`;

const Button = styled.button`
    border-radius:20px;
    border: 2px;`