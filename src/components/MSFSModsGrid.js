import styles from '../css/DCSModsGrid.module.css'
import { MSFSModCard } from './MSFSModCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function MSFSModsGrid() {
    const [mods, setMods] =useState([])

    useEffect(() => {
        base("msfsmods")
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
            <div className={styles.maintitleMods}>Addons</div>
            <ul className={styles.grid}>
                {mods.map((mod) => (
                    <MSFSModCard key={mod.id} mod={mod} />
                ))}
            </ul>
        </>
    );
}