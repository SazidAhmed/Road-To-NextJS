// components/SliderArtists.js
import Slider from "react-slick";

// assets
import Image from 'next/image'

export const SliderArtistsSlick = () => {

    var settings = {
        centerMode: true,
        infinite: true,
        centerPadding: 0,
        autoplay: true,
        pauseOnHover: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1359,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 3,
                    centerPadding: 0,
                }
            }
        ]
    }

    const artists = [
        '/images/artists/1-celo-abdi_glass.png',
        '/images/artists/2-kool-savas_gold.png',
        '/images/artists/3-alrima_platinum.png',
        '/images/artists/4-rk_diamond.png',
        '/images/artists/5-haft_glass.png',
        '/images/artists/6-bmj_gold.png',
        '/images/artists/7-niaks_platinum.png',
        '/images/artists/8-takt32_diamond.png',
        '/images/artists/9-shotas_glass.png',
        '/images/artists/10-olexesh_gold.png',
        '/images/artists/11-bolemvn_platinum.png',
        '/images/artists/12-larry_diamond.png',
        '/images/artists/13-koba-lad_gold.png',
        '/images/artists/14-pajel_platinum.png',
        '/images/artists/15-liz_diamond.png',
    ]

    return (
        <>
            <Slider {...settings}>
                {artists && artists.map((artist, index) => {
                    return (
                        <div key={ index } className="slider-item__wrapper">
                            <Image src={ artist }  width="500px" height="895px" alt="" />
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}