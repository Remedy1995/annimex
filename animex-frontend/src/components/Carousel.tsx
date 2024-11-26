import React from "react";
import { useState, useEffect } from "react";


interface CarouselProps {
    images: string[]
}

const Carousel = ({ images }: CarouselProps) => {
    const [activeStep, setActiveStep] = useState(0);
    const [clicked, setClicked] = useState(false)

    const NextStep = () => {
        setClicked(true)
        setActiveStep((prev) => prev === images.length - 1 ? 0 : prev + 1)
    }

    const PreviousStep = () => {
        setClicked(true)
        setActiveStep((prev) => prev === 0 ? images.length - 1 : prev - 1)
    }
    //console.log('fgfgu', activeStep)

    useEffect(() => {
        const clear = setInterval(() => {
            setActiveStep((prev) => prev === images.length - 1 ? 0 : prev + 1)
        }, 5000)

        if (clicked) {
            clearInterval(clear);
        }
    }, [])


    return (
        <div>

            <img src={images[activeStep]} style={{ width: '-webkit-fill-available' }} />
            <div className="button" style={{ display: 'flex', justifyContent: 'space-around' }}>
              
                <span style={{
                    position: 'relative',
                    top: '-200px'
                }} onClick={PreviousStep} className="btn btn-primary btn-md" >Previous</span>
                  <span className="btn btn-primary btn-md"
                    style={{
                        position: 'relative',
                        top: '-200px'
                    }} onClick={NextStep}  >Next</span>

            </div>
        </div>)
}


export default Carousel;