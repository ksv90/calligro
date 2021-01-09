import React from 'react'
import styles from './author.module.scss'
import Fa from '../fa/Fa'

interface Social {
    icon: string
    url: string
}

interface AuthorProps {
    name: string
    socialLinks: Social[]
}

function Author(props: AuthorProps) {
    const renderSocial = props.socialLinks.map(social =>
        <a className={styles.socialLink} href={social.url} key={social.url}>
            <Fa icon={social.icon} className={styles.icon} />
        </a>
    )

    return (
        <div className={styles.container}>
            <h3 className={styles.name}>{props.name}</h3>
            <div className={styles.socialContainer}>
                {renderSocial}
            </div>
        </div>
    )
}

export default Author
