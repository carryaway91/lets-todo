import Call from '../../img/call..png'
import { useContext } from 'react';
import { LangContext } from '../../context/langContext';
import { desc1, desc2, desc3, desc4, desc5, desc6, desc7 } from './languages';
import FB from '../../img/facebook-clone.png'
import Weather from '../../img/weather.io.png'
import Chatty from '../../img/Chatty.png'
import Remember from '../../img/remember.png'
import Gallery from '../../img/matka.png'
import Insta from '../../img/insta.png'
import PortfolioCard from '../../components/portfolioCard/portfolioCard';
import { Container } from './portfolioStyles'

const Portfolio = () => {
    const { lang } = useContext(LangContext)

    return (
        <Container>
            <PortfolioCard 
                img={Weather} 
                title="Weather.io" 
                tech="VueJS, Vuex, api: openweathermap.org"
                link="https://stupefied-tesla-d7a51f.netlify.app/myLocation"
                git="https://github.com/carryaway91/weather-app-vue"
                >
                    <p>- { lang && desc1[lang].p1 }</p>
                    <p>- { lang && desc1[lang].p2 }</p>
                    <p>- { lang && desc1[lang].p3 }</p>
                    <p>- { lang && desc1[lang].p4 }</p>
            </PortfolioCard>
            <PortfolioCard right 
                img={FB} 
                title="Facebook clone"
                tech="ReactJS, styling: Styled Components, Inline-styles"
                link="https://react-made-facebook.vercel.app/#/"
                git="https://github.com/carryaway91/ReactFacebook"
                >
                    <p>- { lang && desc2[lang].p1 }</p>
                    <p>- { lang && desc2[lang].p2 }</p>
                    <p>- { lang && desc2[lang].p3 }</p>
                    <p>- { lang && desc2[lang].p4 }</p>
                    <p>- { lang && desc2[lang].p5 }</p>
            </PortfolioCard>
            <PortfolioCard
                img={Insta}
                title="Insta-stories remake"
                tech="React JS, Typescript, styling: Styled components"
                link="https://react-insta-stories-seven.vercel.app"
                git="https://github.com/carryaway91/react-insta-stories"
            >
                    <p>- { lang && desc7[lang].p1 }</p>
                    <p>- { lang && desc7[lang].p2 }</p>
                    <p>- { lang && desc7[lang].p3 }</p>
            </PortfolioCard>
            <PortfolioCard  
            right
                img={Remember} 
                title="Remember"
                tech="ReactJS, Redux, Typescript, styling: Styled Components"
                link="https://react-ts-redux.vercel.app/"
                git="https://github.com/carryaway91/react-ts-redux"
                >
                    <p>- { lang && desc5[lang].p1 }</p>
                    <p>- { lang && desc5[lang].p2 }</p>
                    <p>- { lang && desc5[lang].p3 }</p>
            </PortfolioCard>
            <PortfolioCard 
                img={Call} 
                title="Call."
                tech="ReactJS, Redux, server: Firebase, styling: Tailwind CSS"
                link="https://react-eshop-89vyr83cm-carryaway91.vercel.app/#/"
                git="https://github.com/carryaway91/react-eshop"
                >
                    <p>- { lang && desc3[lang].p1 }</p>
                    <p>- { lang && desc3[lang].p2 }</p>
                    <p>- { lang && desc3[lang].p3 }</p>
                    <p>- { lang && desc3[lang].p4 }</p>
            </PortfolioCard>
            <PortfolioCard 
            right
                img={Chatty} 
                title="Chatty"
                tech="ReactJS, server: Laravel, Pusher, styling: styled-components"
                link="http://chatty-made-react.herokuapp.com/"
                git="https://github.com/carryaway91/chat-made-react"
                >
                    <p>- { lang && desc4[lang].p1 }</p>
                    <p>- { lang && desc4[lang].p2 }</p>
            </PortfolioCard>
            <PortfolioCard 
                absent
                img={Gallery} 
                title="Personal Gallery"
                tech="ReactJS, Laravel, styling: tailwindcss"
                git="https://github.com/carryaway91/MartinaGecikovaSite"
                >
                    <p>- { lang && desc6[lang].p1 }</p>
                    <p>- { lang && desc6[lang].p2 }</p>
            </PortfolioCard>
        </Container>
    );
};

export default Portfolio;
