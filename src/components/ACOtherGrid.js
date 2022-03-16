import styles from '../css/DCSModsGrid.module.css'
import { ACOtherCard } from './ACOtherCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function ACOtherGrid() {
    const [others, setMods] =useState([])

    useEffect(() => {
        base("acother")
            .select({ view: "Grid view" })
            .eachPage((records, fetchNextPage) => {
                setMods(records)
                fetchNextPage();
            })
    }, []);

    return (
        <>
            <div className={styles.maintitleMods}>Other</div>
            <ul className={styles.grid}>
                {others.map((other) => (
                    <ACOtherCard key={other.id} other={other} />
                ))}
            </ul>
        </>
    );
}