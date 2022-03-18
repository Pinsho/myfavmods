import styles from '../css/ACCarCard.module.css';

export const ACCarCard = ({ car }) => {
    return (
        <li className={styles.modCard}>
            <img src={car.fields.Picture} width={300} height={165} alt={car.fields.Name} className={styles.modImage}/>
            <div className={styles.cardBody}>
                <div className={styles.title}>{car.fields.Name}</div>
                <div className={styles.type}><i className='bx bxs-car' ></i>{car.fields.TypeName}</div>
                <div><a href={car.fields.URL} target="_blank" rel="noreferrer" className={styles.downloadButton}>Download</a></div>
            </div>
        </li>
    );
}   