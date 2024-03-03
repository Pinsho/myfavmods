import styles from '../css/Grid.module.css';
import { DCSMissionCard } from './DCSMissionCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';
import { Spinner } from './Spinner';

const base = new Airtable({ apiKey: 'patFxPf3jl4UgClNb.875a0a95d8fb838a3ccd507b9e768ed60c603c09fb68477d8e4d88e09bc8bc3e' }).base('appxdFddKFJGA9LAb');

export function DCSMissionsGrid() {
    const [missions, setMissions] =useState([])

    useEffect(() => {
        base("dcsmissions")
        .select({ 
            view: "Grid view",
            sort:[
                {
                    field: 'Name', direction: 'asc'
                }
            ],
        })
        .eachPage((records, fetchNextPage) => {
            setMissions(records)
            fetchNextPage();
        })
    }, []);

    return (
        <>
            <div className={styles.maintitleMissions} id="missions">Missions</div>
            <ul className={styles.grid}>
                {missions.map((mission) => (
                    <DCSMissionCard key={mission.id} mission={mission} />
                ))}
            </ul>
        </>
    );
}