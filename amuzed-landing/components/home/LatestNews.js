import { useEffect, useRef } from "react";

// assets
import Image from 'next/image'

// slider
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.css'

export const LatestNews = () => {

    const news = [
        {
            title: 'EmiXem Says Rapping About Mental Health, Addiction Struggles Has Been ‘Therapeutic’',
            date: '01/05/2022',
            imageURL: '/images/emixem-1.png',
            tags: [ 'Trending' ]
        },
        {
            title: 'Five Reasons Why BeZonYe’s Return to a Traditional Roll-out',
            date: '14/05/2022',
            imageURL: '/images/five-reasons-1.png',
            tags: [ 'Release Radar', 'NFT' ]
        },
        {
            title: 'Jid Tudi Announces Dates For 2022 ‘To the Moon’ World Tour',
            date: '04/04/2022',
            imageURL: '/images/jid-tudi-1.png',
            tags: [ 'Trending', 'Release Radar' ]
        }
    ]

    useEffect(() => {
        // slider
        new Glide('.glide', {
            type: 'slider',
            startAt: 0,
            perView: 3,
            gap: 20,
            breakpoints: {
                600: {
                    perView: 1,
                    gap: 0,
                    peek: { 
                        before: 0,
                        after: 0
                    }
                },
                991: {
                    perView: 2,
                    gap: 10,
                }
            }
        })
        .mount()
    }, [])

    return (
        <div className="glide">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {news && news.map((item, index) => {
                        return (
                            <li key={ index } className="latest-news__item glide__slide">
                                <div className="latest-news__item-wrapper">
                                    <Image className="latest-news__image" src={ item.imageURL } width="192" height="116" alt="" />
                                    <p className="latest-news__title">{ item.title }</p>
                                    <p className="latest-news__date">{ item.date }</p>
                                    <ul className="latest-news__tags">
                                        { item.tags && item.tags.map((tag, index) => {
                                            return (
                                                <p className="latest-news__tag" key={ index }>{ tag }</p>
                                            )
                                        }) }
                                    </ul>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
                {news && news.map((item, index) => {
                    return (
                        <button key={ index } className="glide__bullet" data-glide-dir={ `=${index}` }></button>
                    )
                })}
            </div>
        </div>
    )
}