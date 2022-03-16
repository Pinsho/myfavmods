import styles from '../css/ACCarCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export const ACCarCard = ({ car }) => {
    return (
        <li className={styles.modCard}>
            <img src={car.fields.Picture} width={300} height={165} alt={car.fields.Name} className={styles.modImage}/>
            {/* <div className={styles.info}><a href={car.fields.Info} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCircleInfo}/></a></div> */}
            <div className={styles.cardBody}>
                <div className={styles.title}>{car.fields.Name}</div>
                <div className={styles.type}><i class='bx bxs-car' ></i>{car.fields.Type}</div>
                <div><a href={car.fields.URL} target="_blank" rel="noreferrer" className={styles.downloadButton}>Download</a></div>
            </div>
        </li>
    );
}   