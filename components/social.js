import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

export default function Social({ iconSize= 'initial' }) {
  return (
    <ul className={styles.list} style={{ '--icon-size': iconSize }}>
      <li>
        <a href="https://github.com/OtaniToma/">
          <FontAwesomeIcon icon={faGithub} />
          <span className='sr-only'>Github</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/otani-toma/">
          <FontAwesomeIcon icon={faLinkedin} />
          <span className='sr-only'>LinkedIn</span>
        </a>
      </li>
    </ul>
  )
}