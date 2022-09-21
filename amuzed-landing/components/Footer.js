// components/Footer.js
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import LanguageSwitchLink from './LanguageSwitchLink'
import i18nextConfig from '../next-i18next.config'

// images
import Image from 'next/image'

export const Footer = () => {
    const router = useRouter()
    const { t } = useTranslation('footer')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale

    return (
        <footer>
            <div className="social__wrapper--mobile">
                <Image src="/svgs/twitter-logo.svg" height="25px" width="25px" alt="" />
                <Image src="/svgs/instagram-logo.svg" height="25px" width="25px" alt="" />
            </div>
            <div className="footer__wrapper">
                
                <div className="footer__title-wrapper">
                    <Image src="/svgs/header-logo.svg" height="45px" width="45px" alt="" />
                    <span className="footer__title">Amuzed</span>
                </div>

                <div className="social__wrapper">
                    <Image src="/svgs/twitter-logo.svg" height="25px" width="25px" alt="" />
                    <Image src="/svgs/instagram-logo.svg" height="25px" width="25px" alt="" />
                </div>

                <div className="copyright__wrapper">
                    <p className="copyright">AMUZED © 2022 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}