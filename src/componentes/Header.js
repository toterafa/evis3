import React from 'react'
import Header from '../css/style.css'
import {BsJustify} from 'react-icons/bs'
import {BsPeopleCircle} from 'react-icons/bs'
import Logo from '../imagens/orbit.png'

export default ()=>{

    return(
        <>
    
            <nav>
                <input type="checkbox" id="check"/>
                <label for="check" className="checkbtn">
                <i> <BsJustify /> </i>
                </label>
                <img  className="logo" src={Logo}/>
                <ul>
                    <li><a href="#">Cadastre-se</a></li>
                    <li><a href="#">Instruções</a></li>
                    <li><a href="#">O que é Evi</a></li>
                    <li><a href="#" className="icon-usuario"><BsPeopleCircle /></a></li>
                    
                </ul>

            </nav>

            <br/><br/>
            {/* <h1>CONTEÚDO</h1>

            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p>
            <p>ajhfsohasfohjsafohasofhosahfoisahfoisahfoisahfoi</p><br/> */}
            
               

        </>
    );


}