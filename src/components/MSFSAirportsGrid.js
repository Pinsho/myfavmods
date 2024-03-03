import styles from '../css/Grid.module.css'
import { MSFSAirportsCard } from './MSFSAirportsCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: 'patFxPf3jl4UgClNb.875a0a95d8fb838a3ccd507b9e768ed60c603c09fb68477d8e4d88e09bc8bc3e' }).base('appxdFddKFJGA9LAb');

export function MSFSAirportsGrid() {
    const [airports, setAirports] =useState([])

    useEffect(() => {
        base("msfsairports")
        .select({ 
            view: "Grid view",
            sort:[
                {
                    field: 'Name', direction: 'asc'
                }
            ],
        })
            .eachPage((records, fetchNextPage) => {
                setAirports(records)
                fetchNextPage();
            })
    }, []);

    return (
        <>
            <div className={styles.maintitleMods} id="airports">Airports</div>
            <ul className={styles.grid}>
                {airports.map((airport) => (
                    <MSFSAirportsCard key={airport.id} airport={airport} />
                ))}
            </ul>
        </>
    );
}