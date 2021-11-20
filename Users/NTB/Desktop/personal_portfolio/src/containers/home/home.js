import { useContext, useState, useEffect } from 'react'
import { LangContext } from '../../context/langContext'
import { intro } from './languages'
import { Container, LeftWrapper, MainTitle, Hi, Links, Link, ProfilePic, Additional, RightPanel, PhotoContainer, HomeContainer } from "./homeStyles"
import Ja from '../../img/ja-upraveny.png'
import Gmail from '../../img/gmail.png'
import Ig from '../../img/instagram.png'
import Fb from '../../img/facebook.png'

const Home = () => {
    const { lang } = useContext(LangContext)
    
    return (
        <Container>
            <HomeContainer>
                <LeftWrapper>
                    <Hi>{ lang && intro[lang].hi }</Hi>
                    <MainTitle>{ lang && intro[lang].main }</MainTitle>
                    <Additional>
                        <h2>{ lang && intro[lang].p1 }</h2>
                   </Additional>
                </LeftWrapper>
                <RightPanel>
                    <PhotoContainer>
                        <ProfilePic src={Ja} />
                    </PhotoContainer>
                </RightPanel>
            </HomeContainer>
            <Links>
                <Link href="mailto:carryaway91@gmail.com"><img  src={Gmail} width="20px" /> carryaway91@gmail.com</Link>
                <Link href="https://www.instagram.com/carryshout/"><img src={Ig} width="20px" />carryshout</Link>
                <Link href="https://www.facebook.com/carry.c.shout"><img src={Fb} width="20px"/>Peter Babej</Link>
            </Links>
        </Container>
    )
}

export default Home