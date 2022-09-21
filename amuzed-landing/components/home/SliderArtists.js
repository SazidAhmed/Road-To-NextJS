// components/SliderArtists.js
import { useEffect, useRef } from "react";

// slider
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'

// assets
import Image from 'next/image'

export const SliderArtists = () => {

    const classOptions = { selected: 'my-selected-class' } // Options
    const classNames = ClassNames(classOptions)
    
    const options = { delay: 3000 } // Options
    const autoplayRoot = (emblaRoot) => emblaRoot.parentElement // Root node
    const autoplay = Autoplay(options, autoplayRoot)

    const [viewportRef, emblaApi] = useEmblaCarousel({ 
        loop: true,
        inViewThreshold: 1,
    }, [classNames])

    const artists = [
        '/images/artists/alrima_platinum.png',
        '/images/artists/bmj_diamond.png',
        '/images/artists/bmj_glass.png',
        '/images/artists/bmj_gold.png',
        '/images/artists/kool-savas_gold.png',
        '/images/artists/larry_diamond.png',
        '/images/artists/niaks_platinum.png',
        '/images/artists/olexesh_gold.png',
        '/images/artists/pajel_platinum.png',
        '/images/artists/rk_diamond.png',
        '/images/artists/takt32_diamond.png',
    ]

    useEffect(() => {
        // slider
        if (emblaApi) {
            console.log('slider artists is ready');
        }

    }, [emblaApi])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={viewportRef}>
                <ul className="embla__container">
                    {artists && artists.map((artist, index) => {
                        return (
                            <li key={ index } className="slider-item__wrapper embla__slide">
                                <Image src={ artist }  width="500px" height="895px" alt="" />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}