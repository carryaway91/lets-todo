import { useContext } from 'react'
import { LangContext } from '../../context/langContext';
import { desc } from './languages';
import { Container, Description, ImgHolder, Img, BtnHolder, Button } from "./portfolioCardStyles";


const PortfolioCard = props => {
    const { lang } = useContext(LangContext)

    return (
        <Container right={props.right}>
            <ImgHolder>
                <Img src={props.img} />
            </ImgHolder>
            <Description margin={props.right}>
                <h1 >{ props.title }</h1>
                <div className="inner">
                    <div>
                        { props.children }
                        <strong>{ lang && desc[lang].tech}{ props.tech }</strong>
                    </div>
                    <ul>
                        {
                            !props.absent &&
                                        <BtnHolder style={{ marginRight: '2rem'}}>
                                            <Button href={props.link}>{ lang && desc[lang].btn1 }</Button>
                                        </BtnHolder>
                        }
                        <BtnHolder>
                            <Button href={props.git}>{ lang && desc[lang].btn2 }</Button>
                        </BtnHolder>
                    </ul>
                </div>
            </Description>
        </Container>
    );
};


export default PortfolioCard;
