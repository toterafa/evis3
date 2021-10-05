import React from 'react'
import Video from '../../css/index/video.css'
import imgVideo from '../../imagens/video.jpg'

export default () => {
    return(
    <>
    <div className="comeco">
        <h1 className="titulo">Bem vindo ao EVI!</h1>
        <p className="subtitulo">Frase de efeito lorem ipsum lorem ipsum</p>
        <div className="divVideo">
            <img src={imgVideo} className="imgVideo"/>
        </div>
        <p className="linkJogo">Clique <a className="link">aqui para fazer o teste</a>.</p>
    </div>
    </>
    )
}