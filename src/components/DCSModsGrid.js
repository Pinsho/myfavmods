import styles from '../css/DCSModsGrid.module.css'
import { DCSModCard } from './DCSModCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function DCSModsGrid() {
    const [mods, setMods] =useState([])

    useEffect(() => {
        base("dcsmods")
            .select({ 
                view: "Grid view",
                sort:[
                    {
                        field: 'Name', direction: 'asc'
                    }
                ],
            })
            .eachPage((records, fetchNextPage) => {
                setMods(records)
                fetchNextPage();
            })
        /* base("missions")
        .select({ view: "Grid view" })
        .eachPage((records, fetchNextPage) => {
            console.log(records);
            setMissions(records)
            fetchNextPage();
        })
        base("other")
        .select({ view: "Grid view" })
        .eachPage((records, fetchNextPage) => {
            console.log(records);
            setOther(records)
            fetchNextPage();
        }) */
    }, []);

    return (
        <>
            <div className={styles.maintitleMods}>MODs</div>
            <ul className={styles.grid}>
                {mods.map((mod) => (
                    <DCSModCard key={mod.id} mod={mod} />
                ))}
            </ul>
        </>
    );
}