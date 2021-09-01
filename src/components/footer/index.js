import React from 'react';
import { FaGithub, FaInstagram, FaTwitch } from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterSocial, SocialWrap, SocialLogo, SocialIConLink,  SocialIcon } from './FooterElements';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterSocial>
                    <SocialWrap>
                    <SocialLogo to="/">Pizaa</SocialLogo>
                        <SocialIcon>
                            <SocialIConLink to="/" target="_blank" arial-label="Instagram" rel="noopener noreferer">
                                <FaInstagram/> 
                            </SocialIConLink>
                            <SocialIConLink to="/" target="_blank" arial-label="Github" rel="noopener noreferer">
                                <FaGithub/> 
                            </SocialIConLink>
                            <SocialIConLink to="/" target="_blank" arial-label="Twitch" rel="noopener noreferer">
                                <FaTwitch/>
                            </SocialIConLink>
                        </SocialIcon>
                    </SocialWrap>
                </FooterSocial>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
