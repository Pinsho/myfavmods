import styles from '../css/DCSModsGrid.module.css';
import { DCSMissionCard } from './DCSMissionCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function DCSMissionsGrid() {
    const [missions, setMissions] =useState([])

    useEffect(() => {
        base("missions")
        .select({ view: "Grid view" })
        .eachPage((records, fetchNextPage) => {
            setMissions(records)
            fetchNextPage();
        })
    }, []);

    return (
        <>
            <div className={styles.maintitleMissions}>DCS Missions</div>
            <ul className={styles.grid}>
                {missions.map((mission) => (
                    <DCSMissionCard key={mission.id} mission={mission} />
                ))}
            </ul>
        </>
    );
}