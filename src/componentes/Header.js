import React from 'react'
import Header2 from '../css/header.css'
import Perfil from '../imagens/perfil.png'

export default () => {
    return(
        <>
        <div className="menu">
            <div className="divLogo">
                <h1 className="logo">EVI</h1>
            </div>
            <nav>
                <ul>
                    <li><a className="btnTeste" href="#">Realizar teste</a></li>
                    <li><a href="#">Instruções</a></li>
                    <li><a href="#">O que é EVI</a></li>
                </ul>
                <div>
                    <a href="#"><img className="perfil" src={Perfil}></img></a>
                </div>
            </nav>
        </div>
        </>
    )
}