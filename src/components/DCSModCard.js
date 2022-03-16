import styles from '../css/DCSModCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export const DCSModCard = ({ mod }) => {
    return (
        <li className={styles.modCard}>
            <img src={mod.fields.Picture} width={300} height={165} alt={mod.fields.title} className={styles.modImage}/>
            <div className={styles.info}><a href={mod.fields.Info} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCircleInfo}/></a></div>
            <div className={styles.cardBody}>
                <div className={styles.title}>{mod.fields.Unit}</div>
                <div className={styles.type}><i className='bx bx-info-circle' ></i>{mod.fields.Type}</div>
                <div className={styles.downloadButton}><a href={mod.fields.URL} target="_blank" rel="noreferrer">Download</a></div>
            </div>
        </li>
    );
}   