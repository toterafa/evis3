import React from 'react'

import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>

	<Container>
		<Row>
            <Column>
                <Heading>Evi</Heading>
                <FooterLink href="#">Jogar</FooterLink>
                <FooterLink href="#">Instruções</FooterLink>
                <FooterLink href="#">O que é OrBit</FooterLink>
                <FooterLink href='#'>Perfil</FooterLink>
            </Column>
            <Column>
                <Heading>Contate</Heading>
                <FooterLink href="#">orbittech@email.com.br</FooterLink>
                <FooterLink href="#">Facebook</FooterLink>
                <FooterLink href="#">Instagram</FooterLink>
            </Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
