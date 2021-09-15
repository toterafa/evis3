import React from 'react'
import Footer from '../css/footer.css'

export default () => {
return (
	<>
	<div className="footer">
        <div class="opcoesMenu">
            <h1 className="tituloFooter">EVI</h1>
            <a className="linkFooter" href="#">Jogar</a>
            <a className="linkFooter" href="#">Instruções</a>
            <a className="linkFooter" href="#">O que é OrBit</a>
            <a className="linkFooter" href='#'>Perfil</a>
        </div>
        <div className="contate">
            <h1 className="subFooter">Contate a Orbit</h1>
            <a className="linkFooter" href="#">orbittech@email.com.br</a>
            <a className="linkFooter" href="#">Facebook</a>
            <a className="linkFooter" href="#">Instagram</a>
        </div>
	</div>
	</>
)
}
