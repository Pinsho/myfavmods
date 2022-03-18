import styles from '../css/MSFSModCard.module.css';

export const MSFSOtherCard = ({ other }) => {
    return (
        <li className={styles.modCard}>
            <img src={other.fields.Picture} width={300} height={165} alt={other.fields.Name} className={styles.modImage}/>
            <div className={styles.cardBody}>
                <div className={styles.title}>{other.fields.Name}</div>
                <div className={styles.type}><i className='bx bxs-info-circle' ></i>{other.fields.TypeName}</div>
                <div><a href={other.fields.URL} target="_blank" rel="noreferrer" className={styles.downloadButton}>Download</a></div>
            </div>
        </li>
    );
}  