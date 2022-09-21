import { useState, useRef } from 'react'; 

// animations
import Tilt from 'react-parallax-tilt';

// assets
import Image from 'next/image'

export const BoosterPacksList = () => {

    const cardsInit = [
        {
            front: '/images/card-1.png',
            back: '/images/card-1--back.png',
            getYours: '/images/get-yours-1.png',
            isFlipped: false,
            isBeingFlipped: false
        },
        {
            front: '/images/card-2.png',
            back: '/images/card-2--back.png',
            getYours: '/images/get-yours-2.png',
            isFlipped: false,
            isBeingFlipped: false
        },
        { 
            front: '/images/card-3.png',
            back: '/images/card-3--back.png',
            getYours: '/images/get-yours-3.png',
            isFlipped: false,
            isBeingFlipped: false
        },
        {
            'front': '/images/card-4.png',
            'back': '/images/card-4--back.png',
            'getYours': '/images/get-yours-4.png',
            isFlipped: false,
            isBeingFlipped: false
        },
    ]

    const [ cards, setCards ] = useState(cardsInit);

    function handleFlip(value, index){
        let newCards = [...cards]
        newCards[index].isFlipped = value
        
        if (!newCards[index].isBeingFlipped){
            newCards[index].isBeingFlipped = true
            setCards(newCards)
            
            setTimeout(() => {
                newCards[index].isBeingFlipped = false
                setCards(newCards)
            }, 250);
        }
    }

    return (
        <ul className="booster-packs__list">
            {cards && cards.map((card, index) => {
                return (
                    <li className="booster-packs__item" key={ index }>
                        <Tilt
                            flipHorizontally={card.isFlipped}
                            transitionSpeed={ 1250 }
                            onEnter={ (ev) => {
                                handleFlip(true, index)
                            } }
                            onLeave={ (ev) => {
                                handleFlip(false, index)
                            } }>
                            <div className="packs-item__inner">
                                <div className={ card.isFlipped ? 'packs-item__front is-hidden' : 'packs-item__front' }>
                                    <Image src={ card.front } height="100%" width="100%" alt="" layout="responsive" objectFit="contain" />
                                </div>
                                <div className={ card.isFlipped ? 'packs-item__back is-flipped' : 'packs-item__back' }>
                                    <Image src={ card.back } height="100%" width="100%" alt="" layout="responsive" objectFit="contain" />
                                    <a href="#" className="packs-item__get-yours">
                                        <Image src={ card.getYours } height="100%" width="100%" alt="" layout="responsive" objectFit="contain" />
                                    </a>
                                </div>
                            </div>
                        </Tilt>
                    </li>
                )
            })}
            
        </ul>
    )
}