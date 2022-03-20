import styles from '../css/Grid.module.css';
import { ACCarCard } from './ACCarCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: "key03qIMV5bFoWdvj" }).base('appxdFddKFJGA9LAb');

export function ACCarsGrid() {
    const [cars, setMods] =useState([])

    useEffect(() => {
        base("accars")
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
            <div className={styles.maintitleMods} id="cars">Cars</div>
            <ul className={styles.grid}>
                {cars.map((car) => (
                    <ACCarCard key={car.id} car={car} />
                ))}
            </ul>
        </>
    );
}