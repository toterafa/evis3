import React from 'react'
import Cards from '../../css/index/cards1-2.css'
import css from '../../css/style.css'

export default () => {
    return(
    <>
    <div className="divCards">
        <div className="divCard2">
            <div className="card2">
                <h3 class="tituloCard">Título título</h3>
                <p class="textoCard">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div class="divBtn">
                <button class="btnCard">Saiba mais</button>
                </div>
            </div>

            <div className="card2">
                <h3 class="tituloCard">Título título</h3>
                <p class="textoCard">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div class="divBtn">
                <button class="btnCard2">Saiba mais</button>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}