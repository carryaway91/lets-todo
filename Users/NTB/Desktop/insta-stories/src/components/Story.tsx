import React, { useEffect, useRef, useState } from 'react'
import { StoryContainer, Btn, Wrapper, IntervalContainer } from './StoryStyles'
import Interval from './Interval'
import { getJSDocPrivateTag, preProcessFile } from 'typescript'
interface IProps {
    primePosition: boolean,
    toPrime: (n: number) => void,
    id: number,
    goPrev: () => void,
    goNext: () => void,
    setCoords: (coords: number) => void
}


const Story: React.FC<IProps> = (props) => {
    const wrapper = useRef<HTMLDivElement>(null)

    /**
     * State
     */
    const [activeInterval, setActiveInterval] = useState<number>(0)
    const [stories, setStories] = useState([...Array(2)])
    
    
    useEffect(() => {
        if(props.primePosition) {
            props.setCoords(wrapper.current!.getBoundingClientRect().left)
        }
    },[])

    /**
     *  ked skonci interval storky automaticky
     */
    const handleDone = (index: number) : void => {
        if(stories.length - 1> index ) {
            setActiveInterval(index + 1)
        } else { 
            props.goNext()
        }
    }

    /**
     * dalsi interval alebo storka ( po kliknuti na next)
     */
    const handleNextIntervalOrStory = () => {
        if(activeInterval < stories.length - 1) {
            setActiveInterval(activeInterval + 1)
        } else {
            props.goNext()
        }
    }

    /**
     * predchadzajuci interval alebo storka
     */
    const handlePrevIntervalOrStory = () => {
        if(activeInterval === 0) {
            props.goPrev()
        } else {
            setActiveInterval(prev => { return prev - 1})
        }
    }

    return (
        <Wrapper ref={wrapper}>
            <StoryContainer prime={props.primePosition} onClick={() => props.toPrime(props.id)}>
            {
                props.primePosition && (
                    <IntervalContainer>
                        {
                            stories.map((i, index) => (
                                <Interval key={index} 
                                        index={index} 
                                        active={activeInterval === index} 
                                        done={(index: number) => handleDone(index)} 
                                        completed={activeInterval - 1 === index}
                                        completedPrev={activeInterval + 1 === index}
                                    />
                                ))
                        }
                    </IntervalContainer>
                )
            }
            </StoryContainer>
            {
                props.primePosition && <Btn className="previous" onClick={handlePrevIntervalOrStory}>P</Btn>
            }
            {
                props.primePosition && <Btn className="next" onClick={handleNextIntervalOrStory}>N</Btn>
            }
        </Wrapper>

    )
}

export default Story
