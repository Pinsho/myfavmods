import styles from '../css/DCSModCard.module.css';

export const DCSMissionCard = ({ mission }) => {
    return (
        <li className={styles.modCard}>
            <img src={mission.fields.Picture} width={300} height={165} alt={mission.fields.title} className={styles.modImage}/>
            
            <div className={styles.cardBody}>
                <div className={styles.title}>{mission.fields.Title}</div>
                <div className={styles.type}><i className='bx bxs-flag-alt' ></i>{mission.fields.Type}</div>
                <div className={styles.type}><i className='bx bxs-map' ></i>{mission.fields.Map}</div>
                <div className={styles.type}><i className='bx bxs-plane-alt' ></i>{mission.fields.Unit}</div>
                <div className={styles.type}><i className='bx bxs-error-circle' ></i>Required mods: {mission.fields.AdditionalMods}</div>
                <div><a href={mission.fields.URL} target="_blank" rel="noreferrer" className={styles.downloadButton}>Download</a></div>
            </div>
        </li>
    );
}   