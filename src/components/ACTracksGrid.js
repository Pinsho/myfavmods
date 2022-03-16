import styles from '../css/DCSModsGrid.module.css'
import { ACTrackCard } from './ACTrackCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function ACTracksGrid() {
    const [tracks, setMods] =useState([])

    useEffect(() => {
        base("actracks")
            .select({ view: "Grid view" })
            .eachPage((records, fetchNextPage) => {
                setMods(records)
                fetchNextPage();
            })
    }, []);

    return (
        <>
            <div className={styles.maintitleMods}>Tracks</div>
            <ul className={styles.grid}>
                {tracks.map((track) => (
                    <ACTrackCard key={track.id} track={track} />
                ))}
            </ul>
        </>
    );
}