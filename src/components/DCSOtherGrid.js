import styles from '../css/Grid.module.css';
import { DCSOtherCard } from './DCSOtherCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: 'patFxPf3jl4UgClNb.875a0a95d8fb838a3ccd507b9e768ed60c603c09fb68477d8e4d88e09bc8bc3e' }).base('appxdFddKFJGA9LAb');

export function DCSOtherGrid() {
    const [others, setOther] =useState([])

    useEffect(() => {
        base("dcsother")
        .select({ 
            view: "Grid view",
            sort:[
                {
                    field: 'Name', direction: 'asc'
                }
            ],
        })
        .eachPage((records, fetchNextPage) => {
            setOther(records)
            fetchNextPage();
        })
    }, []);

    return (
        <>
            <div className={styles.maintitleMods} id="other">Other</div>
            <ul className={styles.grid}>
                {others.map((other) => (
                    <DCSOtherCard key={other.id} other={other} />
                ))}
            </ul>
        </>
    );
}