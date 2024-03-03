import styles from '../css/Grid.module.css';
import { MusicSamplesCard } from './MusicSamplesCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: 'patFxPf3jl4UgClNb.875a0a95d8fb838a3ccd507b9e768ed60c603c09fb68477d8e4d88e09bc8bc3e' }).base('appxdFddKFJGA9LAb');

export function MusicSamplesGrid() {
    const [samples, setSamples] = useState([])

    useEffect(() => {
        base("musicsamples")
        .select({ 
            view: "Grid view",
            sort:[
                {
                    field: 'Name', direction: 'asc'
                }
            ],
        })
        .eachPage((records, fetchNextPage) => {
            setSamples(records)
            fetchNextPage();
        })
    }, []);

    return (
        <>
            <div className={styles.maintitleMissions} id="samples">Samples</div>
            <ul className={styles.grid}>
                {samples.map((sample) => (
                    <MusicSamplesCard key={sample.id} sample={sample} />
                ))}
            </ul>
        </>
    );
}