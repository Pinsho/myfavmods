import styles from '../css/Grid.module.css'
import { MSFSOtherCard } from './MSFSOtherCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: 'patFxPf3jl4UgClNb.875a0a95d8fb838a3ccd507b9e768ed60c603c09fb68477d8e4d88e09bc8bc3e' }).base('appxdFddKFJGA9LAb');

export function MSFSOtherGrid() {
    const [others, setOthers] =useState([])

    useEffect(() => {
        base("msfsother")
        .select({ 
            view: "Grid view",
            sort:[
                {
                    field: 'Name', direction: 'asc'
                }
            ],
        })
            .eachPage((records, fetchNextPage) => {
                setOthers(records)
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
            <div className={styles.maintitleMods} id="other">Other</div>
            <ul className={styles.grid}>
                {others.map((other) => (
                    <MSFSOtherCard key={other.id} other={other} />
                ))}
            </ul>
        </>
    );
}