// components/Footer.js
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import LanguageSwitchLink from './LanguageSwitchLink'
import i18nextConfig from '../next-i18next.config'

// assets
import Image from 'next/image'

// styles
import styles from '../styles/Header.module.css'

export const Header = () => {
    const router = useRouter()
    const { t } = useTranslation('header')
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale

    return (
        <header className={`${styles.header} ${styles.header__container}`}>
            <Image src="/svgs/header-logo.svg" alt="me" width="45" height="45"/>

            {i18nextConfig.i18n.locales.map((locale) => {
                if (locale === currentLocale) return null
                return (
                    <LanguageSwitchLink
                        locale={locale}
                        key={locale}
                    />
                )
            })}

            <a className="button header__button">Buy now</a>
        </header>
    )
}