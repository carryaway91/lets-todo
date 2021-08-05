import React, { useEffect, useRef, useState } from 'react'
import { Wrapper, Int } from './IntervalStyles'

interface IProps {
    active: boolean,
    done: (i: number) => void,
    index: number,
    completed: boolean,
    completedPrev: boolean
}

const Interval: React.FC<IProps> = (props) => {
    const i = useRef<HTMLDivElement>(null)
    const [intervalCurrentWidth, setIntervalCurrentWidth] = useState<string>('')
    const [interval, setActualIterval] = useState<any>()

    useEffect(() => {
        if(!props.completed) {

            i.current!.style.width = '0%'
            if(props.active) {
                setActualIterval(setInterval(() => {
                    if(i.current?.style.width) {
                        
                        i.current!.style.width = JSON.stringify(parseInt(i.current!.style.width) + 1) + '%'
                        if(i.current!.style.width === '100%'  ) {
                            clearInterval(interval)
                            props.done(props.index)
                        } 
                    }
                }, 100))
            }
        }
    }, [ props.active ])
   
    useEffect(() => {
        if(props.completed) {
            clearInterval(interval)
            i.current!.style.width = '100%'
        }
    },[props.completed])

    useEffect(() => {
        clearInterval(interval)

    }, [props.completedPrev])

    return (
        <Wrapper>
            <Int ref={i} />
        </Wrapper>
    )
}

export default Interval
