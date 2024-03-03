import styles from '../css/Grid.module.css';
import { Rfactor2TrackCard } from './Rfactor2TrackCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: 'patFxPf3jl4UgClNb.875a0a95d8fb838a3ccd507b9e768ed60c603c09fb68477d8e4d88e09bc8bc3e' }).base('appxdFddKFJGA9LAb');

export function Rfactor2TracksGrid() {
    const [tracks, setTracks] =useState([])

    useEffect(() => {
        base("rf2tracks")
        .select({ 
            view: "Grid view",
            sort:[
                {
                    field: 'Name', direction: 'asc'
                }
            ],
        })
            .eachPage((records, fetchNextPage) => {
                setTracks(records)
                fetchNextPage();
            })
    }, []);

    return (
        <>
            <div className={styles.maintitleMods} id="tracks">Tracks</div>
            <ul className={styles.grid}>
                {tracks.map((track) => (
                    <Rfactor2TrackCard key={track.id} track={track} />
                ))}
            </ul>
        </>
    );
}