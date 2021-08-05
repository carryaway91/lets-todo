import React, { useState, useRef, useEffect} from 'react';
import { StoryContainer, Wrapper } from './AppStyles';
import Story from './components/Story';

const App: React.FC = () => {
  const [stories, setStories] = useState<number>(7)
  const [prime, setPrime] = useState<number>(3)
  const [primeCoords, setPrimeCoords] = useState<number>(0)

  const s = useRef<HTMLDivElement>(null)
  useEffect(() => {
    s.current!.style.transitionProperty = 'all'
    s.current!.style.transitionDuration = '.4s'
    s.current!.style.left = '0'
    
  },[])

  const handleToPrime = (n: number) : void => {
    let index = prime - n
    if(index > 0) {
      s.current!.style.left = JSON.stringify(parseInt(s.current!.style.left) + index * 11) + '%'
    } else {
      s.current!.style.left = JSON.stringify(parseInt(s.current!.style.left) + (index * 11)) + '%'
    }


    setPrime(n)
  }
  
  const handleGoPrev = (): void => {
    
    let currentPos: number | string = s.current!.style.left
    if(s.current!.style.left === '') {
      currentPos = '0rem'
    } 
    s.current!.style.left = parseInt(currentPos) + 11 + '%'
    currentPos = parseInt(currentPos) + 11 + '%'
    setPrime(prev => { return prev - 1 })
  }
  
  const handleGoNext = (): void => {
    let currentPos: number | string = s.current!.style.left
    if(s.current!.style.left === '') {
      currentPos = '0rem'
    } 
    s.current!.style.left = parseInt(currentPos) - 11 + '%'
    currentPos = parseInt(currentPos) - 11 + '%'
    setPrime(prev => { return prev + 1 })
  }

  
  return (
    <Wrapper ref={s}>
       <StoryContainer>
         {
           stories && [...Array(stories)].map((s: number, i: number) => 
              <Story goPrev={() => handleGoPrev()} goNext={() => handleGoNext()} primePosition={prime === i } key={i} id={i} toPrime={(n: number) =>handleToPrime(n)} setCoords={(coords) => setPrimeCoords(coords)}/>)
         }
       </StoryContainer>
    </Wrapper>
  );
}

export default App;
