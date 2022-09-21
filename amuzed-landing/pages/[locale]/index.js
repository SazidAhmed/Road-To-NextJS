import { useTranslation, trans } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import Head from 'next/head'
import { useEffect, useRef } from "react";

// animations
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";

// styles
import styles from '../../styles/Home.module.css'

// components
import Link from '../../components/Link'
// import { SliderArtists } from '../../components/home/SliderArtists';
import { SliderArtistsSlick } from '../../components/home/SliderArtistsSlick';
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { BoosterPacksList } from '../../components/home/BoosterPacksList';
import { LatestNews } from '../../components/home/LatestNews';

// hooks
import useWindowDimensions from '../../hooks/useWindowDimensions'

// assets
import Image from 'next/image'

export default function Home() {
    const { t } = useTranslation(['common', 'home', 'footer'])
    const journeyWrapperRef = useRef();
    const journeyRef = useRef();
    const containerRef = useRef();
    const collectTitleRef = useRef();
    const { width } = useWindowDimensions();

    useEffect(() => {
        // animations

        if (width < 991){
            // journey mobile animation
            gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)

            // svgs
            gsap.set('.journey-polyline--mobile', {drawSVG:'0%', autoAlpha: 1})
            gsap.set('.journey-svg-mobile__circle--1', {opacity: 0})
            gsap.set('.journey-svg-mobile__circle-outer--1', {opacity: 0})
            gsap.set('.journey-svg-mobile__circle-outer-dashed--1', {opacity: 0, transformOrigin:"50% 50%"})

            gsap.set('.journey-svg-mobile__circle--2', {opacity: 0})
            gsap.set('.journey-svg-mobile__circle-outer--2', {opacity: 0})
            gsap.set('.journey-svg-mobile__circle-outer-dashed--2', {opacity: 0, transformOrigin:"50% 50%"})
            
            gsap.set('.journey-svg-mobile__circle--3', {opacity: 0})
            gsap.set('.journey-svg-mobile__circle-outer--3', {opacity: 0})
            gsap.set('.journey-svg-mobile__circle-outer-dashed--3', {opacity: 0, transformOrigin:"50% 50%"})

            // sections
            gsap.set('.play-to-earn', {opacity: 0})
            gsap.set('.trade', {opacity: 0})

            // draw svg desktop animation
            var journeyPolylineMobile = gsap.timeline({
                scrollTrigger: {
                    trigger: '.journey-polyline--mobile',
                    start: 'top 40%',
                    endTrigger: '.booster-packs',
                    end: '+=400',
                    scrub: 1,
                    // markers: {
                    //     startColor: "orange",
                    //     endColor: "orange"
                    // }
                }
            })
            .addLabel('one')
            .to('.journey-svg-mobile__circle--1', {opacity: 1, duration: 1.25}, 'one')
            .to('.journey-svg-mobile__circle-outer--1', {opacity: 1, duration: 1}, 'one')
            .to('.journey-svg-mobile__circle-outer-dashed--1', {opacity: 1, rotation: 90, duration: 1.5}, 'one')
            .to('.journey-polyline--mobile', {drawSVG: '35%', duration: 1}, 'one')
            .to('.play-to-earn', {opacity: 1, duration: 2}, 'one')
            .addLabel('two')
            .to('.journey-svg-mobile__circle--2', {opacity: 1, duration: .25}, 'two')
            .to('.journey-svg-mobile__circle-outer--2', {opacity: 1, duration: .25}, 'two')
            .to('.journey-svg-mobile__circle-outer-dashed--2', {opacity: 1, rotation: 90, duration: 1.5}, 'two')
            .to('.journey-polyline--mobile', {drawSVG: '55%'}, 'two')
            .addLabel('three')
            .to('.trade', {opacity: 1, duration: 2}, 'three')
            .to('.journey-polyline--mobile', {drawSVG: '100%', duration: 2}, 'three')
            .to('.journey-svg-mobile__circle--3', {opacity: 1, duration: 3}, 'three')
            .to('.journey-svg-mobile__circle-outer--3', {opacity: 1, duration: 3}, 'three')
            .to('.journey-svg-mobile__circle-outer-dashed--3', {opacity: 1, rotation: 90, duration: 4}, 'three')
    
        } else {
            gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

            const sections = gsap.utils.toArray(['.collect__title', '.journey']);

            let maxWidth = 0;
            sections.forEach((section) => {
                maxWidth += section.offsetWidth;
            });

            console.log(window.innerWidth / 2)

            // scroll animation
            gsap.to("#collect", {
                x: () => `-${maxWidth - (window.innerWidth / 1.7)}`,
                ease: "none",
                scrollTrigger: {
                    trigger: "#collect",
                    start: 'left left',
                    end: () => `+=${maxWidth}`,
                    scrub: true,
                    pin: true,
                    // invalidateOnRefresh: true,
                    // anticipatePin: 1,
                    // markers: true
                }
            });

            // svgs
            gsap.set('.journey-polyline', {drawSVG:'0%', autoAlpha: 1})
            gsap.set('.journey-svg__circle--1', {opacity: 0})
            gsap.set('.journey-svg__circle-outer--1', {opacity: 0})
            gsap.set('.journey-svg__circle-outer-dashed--1', {opacity: 0, transformOrigin:"50% 50%"})

            gsap.set('.journey-svg__circle--2', {opacity: 0})
            gsap.set('.journey-svg__circle-outer--2', {opacity: 0})
            gsap.set('.journey-svg__circle-outer-dashed--2', {opacity: 0, transformOrigin:"50% 50%"})
            
            gsap.set('.journey-svg__circle--3', {opacity: 0})
            gsap.set('.journey-svg__circle-outer--3', {opacity: 0})
            gsap.set('.journey-svg__circle-outer-dashed--3', {opacity: 0, transformOrigin:"50% 50%"})

            // sections
            gsap.set('.play-to-earn', {opacity: 0})
            gsap.set('.trade', {opacity: 0})

            // draw svg desktop animation
            var journeyPolyline = gsap.timeline({
                scrollTrigger: {
                    trigger: '.journey-polyline',
                    start: 'top 20%',
                    endTrigger: '.booster-packs',
                    end: 'top bottom',
                    scrub: 1,
                    // markers: {
                    //     startColor: "yellow",
                    //     endColor: "yellow"
                    // }
                }
            })
            .addLabel('one')
            .to('.journey-svg__circle--1', {opacity: 1, duration: .25}, 'one')
            .to('.journey-svg__circle-outer--1', {opacity: 1, duration: .5}, 'one')
            .to('.journey-svg__circle-outer-dashed--1', {opacity: 1, rotation: 90, duration: .75}, 'one')
            .to('.journey-polyline', {drawSVG:'25%'}, 'one')
            .addLabel('two')
            .to('.play-to-earn', {opacity: 1, duration: 1}, 'two')
            .to('.journey-svg__circle--2', {opacity: 1, duration: .25}, 'two')
            .to('.journey-svg__circle-outer--2', {opacity: 1, duration: .25}, 'two')
            .to('.journey-svg__circle-outer-dashed--2', {opacity: 1, rotation: 90, duration: .25}, 'two')
            .to('.journey-polyline', {drawSVG:'50%', delay: .25}, 'two')
            .addLabel('three')
            .to('.trade', {opacity: 1, duration: 2}, 'three')
            .to('.journey-svg__circle--3', {opacity: 1, duration: .25}, 'three')
            .to('.journey-svg__circle-outer--3', {opacity: 1, duration: .25}, 'three')
            .to('.journey-svg__circle-outer-dashed--3', {opacity: 1, rotation: 90, duration: .25}, 'three')
            .to('.journey-polyline', {drawSVG:'100%'}, 'three')

        }
    }, []);

    return (
        <div className="index main">
            <Head>
                <title>{t('title')}</title>
                    <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
    
            {/* Hero */}
            <section id="hero" className={`hero ${styles.container}`}>
                {/* <video
                    className="hero__video"
                    loop autoPlay muted playsInline
                    preload="metadata"
                    loading="eager"
                    height="500"
                    src="https://drive.google.com/uc?export=download&id=1cLfCHlIoh1adFQKnzQn8gvO-Cme43oAe" /> */}
                <video
                    className="hero__video"
                    loop autoPlay muted playsInline
                    preload="metadata"
                    loading="eager"
                    height="500"
                    src="https://doggychewtreats.com/z.webm"
                />
                
                <div className="hero__content">
                    <h1 className="hero__title">
                        <span className="title--outline hero__title--special">
                            {t('home:hero.title-special')}
                        </span>
                        {t('home:hero.title')}
                    </h1>
                    <p className="hero__paragraph">
                        {t('home:hero.paragraph')}
                    </p>
                    <button className="button hero__button">{t('home:hero.button')}</button>
                    <p className="hero__warning">
                        {t('home:hero.warning')}
                        <a href="" className="hero-warning__link">({t('home:hero.warning-link')})</a>
                    </p>
                </div>
            </section>

            {/* Artists slider */}
            <section id="artists-slider" className={`artists-slider`}>
                <SliderArtistsSlick />
            </section>

            {/* Collect */}
            <section id="collect" className={`collect ${styles.container}`} ref={containerRef}>
                <h2 className="collect__title" ref={collectTitleRef}>
                    <span className="collect__title--tiny">
                        {t('home:collect.title-tiny-1')}
                         <br />
                        {t('home:collect.title-tiny-2')}
                    </span>
                    {t('home:collect.title-1')}
                    <br />
                    {t('home:collect.title-2')}
                    <span className="title--outline">
                        <br />
                        {t('home:collect.title-outline')}
                    </span>
                </h2>
        
                {/* Journey - GSAP animations */}
                <div id="journey" className={`journey`} ref={journeyRef}>
                    <div className="journey-collect journey__item">
                        <h3 className="journey-collect__title">
                            {t('home:collect.journey.collect.title')}
                        </h3>
                        <p className="journey-collect__paragraph">
                            {t('home:collect.journey.collect.paragraph')}
                        </p>
                        <button className="button journey-collect__button">
                            {t('home:collect.journey.collect.button')}
                        </button>
                    </div>
                    <div className="play-to-earn journey__item">
                        <h3 className="play-to-earn__title">
                            {t('home:collect.journey.play-to-earn.title')}
                        </h3>
                        <p className="play-to-earn__paragraph">
                            {t('home:collect.journey.play-to-earn.paragraph')}
                        </p>
                    </div>
                    <div className="trade journey__item">
                        <h3 className="trade__title">
                            {t('home:collect.journey.trade.title')}
                        </h3>
                        <p className="trade__paragraph">
                            {t('home:collect.journey.trade.paragraph')}
                        </p>
                    </div>
                    <div className="journey-svg__wrapper" ref={journeyWrapperRef}>
                        <div className="journey-svg__container">
                            {/* Desktop */}
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                viewBox="0 0 100 200" className="journey-svg--copy">
                                <circle className="journey-svg__circle--1--copy" cx="11" cy="40" r=".75" fill="#595959" />
                                <circle className="journey-svg__circle--2--copy" cx="45" cy="25" r=".75" fill="#595959" />
                                <circle className="journey-svg__circle--3--copy" cx="90" cy="40" r=".75" fill="#595959" />
                                <polyline className="journey-polyline--copy" points="11,40 45,25 90,40"
                                    fill="none" stroke="#595959" strokeMiterlimit="10" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                viewBox="0 0 100 200" className="journey-svg">
                                <circle className="journey-svg__circle--1" cx="11" cy="40" r=".75" fill="white" />
                                <circle className="journey-svg__circle-outer--1" cx="11" cy="40" r="1.5" fill="none" stroke="white" strokeWidth=".15" />
                                <circle className="journey-svg__circle-outer-dashed--1" cx="11" cy="40" r="1.9" fill="none" stroke="white" strokeWidth=".15" strokeDasharray=".75,.75" />

                                <circle className="journey-svg__circle--2" cx="45" cy="25" r=".75" fill="white" />
                                <circle className="journey-svg__circle-outer--2" cx="45" cy="25" r="1.5" fill="none" stroke="white" strokeWidth=".15" />
                                <circle className="journey-svg__circle-outer-dashed--2" cx="45" cy="25" r="1.9" fill="none" stroke="white" strokeWidth=".15" strokeDasharray=".75,.75" />

                                <circle className="journey-svg__circle--3" cx="90" cy="40" r=".75" fill="white" />
                                <circle className="journey-svg__circle-outer--3" cx="90" cy="40" r="1.5" fill="none" stroke="white" strokeWidth=".15" />
                                <circle className="journey-svg__circle-outer-dashed--3" cx="90" cy="40" r="1.9" fill="none" stroke="white" strokeWidth=".15" strokeDasharray=".75,.75" />
                                <polyline className="journey-polyline" points="11,40 45,25 90,40"
                                    fill="none" stroke="white" strokeMiterlimit="10" />
                            </svg>

                            {/* Mobile */}
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                viewBox="0 0 100 200" className="journey-svg--mobile--copy">
                                <circle className="journey-svg-mobile__circle--1--copy" cx="5" cy="20" r="3" fill="#595959" />
                                <circle className="journey-svg-mobile__circle--2--copy" cx="90" cy="100" r="3" fill="#595959" />
                                <circle className="journey-svg-mobile__circle--3--copy" cx="30" cy="180" r="3" fill="#595959" />
                                <polyline className="journey-polyline--mobile--copy" points="5,20 90,100 30,180"
                                    fill="none" stroke="#595959" strokeMiterlimit="10" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                viewBox="0 0 100 200" className="journey-svg--mobile">
                                <circle className="journey-svg-mobile__circle--1" cx="5" cy="20" r="3" fill="white" />
                                <circle className="journey-svg-mobile__circle-outer-dashed--1" cx="5" cy="20" r="4.5" fill="none" stroke="white" strokeWidth=".5" />
                                <circle className="journey-svg-mobile__circle-outer-dashed--1" cx="5" cy="20" r="5.5" fill="none" stroke="white" strokeWidth=".5" strokeDasharray=".75,.75" />

                                <circle className="journey-svg-mobile__circle--2" cx="90" cy="100" r="3" fill="white" />
                                <circle className="journey-svg-mobile__circle-outer-dashed--2" cx="90" cy="100" r="4.5" fill="none" stroke="white" strokeWidth=".5" />
                                <circle className="journey-svg-mobile__circle-outer-dashed--2" cx="90" cy="100" r="5.5" fill="none" stroke="white" strokeWidth=".5" strokeDasharray=".75,.75" />
                                
                                <circle className="journey-svg-mobile__circle--3" cx="30" cy="180" r="3" fill="white" />
                                <circle className="journey-svg-mobile__circle-outer-dashed--3" cx="30" cy="180" r="4.5" fill="none" stroke="white" strokeWidth=".5" />
                                <circle className="journey-svg-mobile__circle-outer-dashed--3" cx="30" cy="180" r="5.5" fill="none" stroke="white" strokeWidth=".5" strokeDasharray=".75,.75" />
                                <polyline className="journey-polyline--mobile" points="5,20 90,100 30,180"
                                    fill="none" stroke="white" strokeMiterlimit="10" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="abstract-shapes__wrapper">
                    <div className="abstract-shapes-image__wrapper abstract-shapes-image__wrapper--top">
                        <Image
                            className="abstract-shapes abstract-shapes--top"
                            src="/svgs/abstract-shapes--bottom.svg"
                            alt=""
                            width="1000"
                            height="1000" />
                    </div>
                    <div className="abstract-shapes-image__wrapper abstract-shapes-image__wrapper--bottom">
                        <Image
                            className="abstract-shapes abstract-shapes--bottom"
                            src="/svgs/abstract-shapes.svg"
                            alt=""
                            width="1000"
                            height="1000" />
                    </div>
                </div>
            </section>

            {/* Booster packs */}
            <section id="booster-packs" className={`booster-packs ${styles.container}`}>
                <div className="booster-packs__header">
                    <h2 className="booster-packs__title">
                        {t('home:booster-packs.title')}
                    </h2>
                    <p className="booster-packs__paragraph">
                        {t('home:booster-packs.paragraph')}
                    </p>
                </div>

                {/* 3D card animations */}
                <BoosterPacksList />
                
            </section>
            
            {/* Partnerships */}
            <section id="partnerships" className={`partnerships ${styles.container}`}>
                <h2 className="partnerships__title">
                    {t('home:partnerships.title')}
                </h2>
                <ul className="partnerships__list">
                    <li className="partnerships__item"><Image src="/svgs/polygon-logo.svg" height="100%" width="100%" alt="" /></li>
                    <li className="partnerships__item"><Image src="/svgs/animocabrands-logo.svg" height="100%" width="100%" alt="" /></li>
                    <li className="partnerships__item"><Image src="/svgs/kingsway-logo.svg" height="100%" width="100%" alt="" /></li>
                </ul>
                <div className="blurred-background"></div>
            </section>
           
            {/* Latest News */}
            <section id="latest-news" className={`latest-news`}>
                <h2 className="latest-news__main-title">
                    {t('home:latest-news.title')}
                </h2>
                <LatestNews />
            </section>
           
            {/* FAQ */}
            <section id="faq" className={`faq ${styles.container}`}>
                <h2 className="faq__title"><span className="title--outline">FAQ</span></h2>
                <ul className="faq__list">
                    <li className="faq__item">
                        <details open>
                            <summary>{t('home:faqs.faq-1.question')}</summary>
                            <p>{t('home:faqs.faq-1.answer')}</p>
                        </details> 
                    </li>
                    <li className="faq__item">
                        <details open>
                            <summary>{t('home:faqs.faq-2.question')}</summary>
                            <p>{t('home:faqs.faq-2.answer')}</p>
                        </details> 
                    </li>
                    <li className="faq__item">
                        <details open>
                            <summary>{t('home:faqs.faq-3.question')}</summary>
                            <p>{t('home:faqs.faq-3.answer')}</p>
                        </details> 
                    </li>
                    <li className="faq__item">
                        <details open>
                            <summary>{t('home:faqs.faq-4.question')}</summary>
                            <p>{t('home:faqs.faq-4.answer')}</p>
                        </details> 
                    </li>
                </ul>
            </section>

            {/* Featured In */}
            <section id="featured-in" className={`featured-in ${styles.container}`}>
                <h2 className="featured-in__title">
                    {t('home:featured-in.title')}
                </h2>
                <div>
                    <ul className="featured-in__list">
                        <li className="featured-in__item">
                            <Image src="/svgs/deutschrap-plus-logo.svg" alt="" width="250px" height="100%" />
                        </li>
                        <li className="featured-in__item">
                            <Image src="/svgs/deutsche-startup-logo.svg" alt="" width="240px" height="100%" />
                        </li>
                        <li className="featured-in__item">
                            <Image src="/svgs/hiphop-de-logo.svg" alt="" width="240px" height="100%" />
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buy Now */}
            <section id="buy-now" className={`buy-now ${styles.container}`}>
                <a className="button">
                    {t('home:buy-now.button')}
                </a>
            </section>

            {/* Social networks */}
            <section id="social-networks" className={`social-networks ${styles.container}`}>
                
            </section>

            <Footer />
            <div className="blurred-background"></div>
        </div>
    )
}

const getStaticProps = makeStaticProps(['common', 'home', 'footer'])
export { getStaticPaths, getStaticProps }