import { useContext } from 'react'
import { LangContext } from '../../context/langContext'
import { desc } from './languages'
import { Container, PhotoHolder, AboutMe, Title } from './aboutStyles'
import Ja from '../../img/ja-about.png'

const About = () => {
    const { lang } = useContext(LangContext)
    return (
        <Container>
            <div className="inner">
                <PhotoHolder>
                    <img src={Ja} />
                </PhotoHolder>
                <AboutMe>
                    <Title>{ lang && desc[lang].header }</Title>
                    <p>{ lang && desc[lang].p1}</p>
                    <p>{ lang && desc[lang].p2}</p>
                    <p>{ lang && desc[lang].p3}</p>

                </AboutMe>
            </div>

        </Container>
    )
}

export default About