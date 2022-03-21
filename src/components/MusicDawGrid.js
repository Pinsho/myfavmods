import styles from '../css/Grid.module.css';
import { MusicDawCard } from './MusicDawCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function MusicDawGrid() {
    const [daws, setDaws] =useState([])

    useEffect(() => {
        base("musicdaw")
        .select({ 
            view: "Grid view",
            sort:[
                {
                    field: 'Name', direction: 'asc'
                }
            ],
        })
        .eachPage((records, fetchNextPage) => {
            setDaws(records)
            fetchNextPage();
        })
    }, []);

    return (
        <>
            <div className={styles.maintitleMissions} id="daws">DAWs</div>
            <ul className={styles.grid}>
                {daws.map((daw) => (
                    <MusicDawCard key={daw.id} daw={daw} />
                ))}
            </ul>
        </>
    );
}