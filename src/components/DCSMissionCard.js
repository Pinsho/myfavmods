import styles from '../css/DCSModCard.module.css';

export const DCSMissionCard = ({ mission }) => {
    return (
        <li className={styles.modCard}>
            <img src={mission.fields.Picture} width={300} height={165} alt={mission.fields.title} className={styles.modImage}/>
            
            <div className={styles.cardBody}>
                <div className={styles.title}>{mission.fields.Title}</div>
                <div className={styles.type}><i className='bx bxs-flag-alt' ></i>{mission.fields.Type}</div>
                <div className={styles.type}><i className='bx bx-map'></i>{mission.fields.Map}</div>
                <div className={styles.type}><i className='bx bxs-plane-alt' ></i>{mission.fields.Unit}</div>
                <div className={styles.type}><i className='bx bx-error-circle' ></i>Required mods: {mission.fields.AdditionalMods}</div>
                <div className={styles.downloadButton}><a href={mission.fields.URL} target="_blank" >Download</a></div>
            </div>
        </li>
    );
}   