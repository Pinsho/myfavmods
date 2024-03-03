import styles from '../css/Grid.module.css';
import { ACCompetizioneOtherCard } from './ACCompetizioneOtherCard';
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import NoResults from '../pages/NoResults';
import { useLocation } from 'react-router-dom';

const base = new Airtable({ apiKey: 'patFxPf3jl4UgClNb.875a0a95d8fb838a3ccd507b9e768ed60c603c09fb68477d8e4d88e09bc8bc3e' }).base('appxdFddKFJGA9LAb');

export function ACCompetizioneModsGrid() {
    const [others, setOthers] =useState([])
    const [isLoading, SetIsLoading] = useState(true);

    function useQuery() {
        return new  URLSearchParams(useLocation().search);
    }

    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        SetIsLoading(true);

        const filter = search 
        ? search
        : "";
        
        const formulaOther = "SUM(Search('" + filter.toLowerCase() + "', {Name_low}),Search('" + filter.toLowerCase() + "', {Type_low}))";

        base("accompetizioneother")
            .select({ 
                view: "Grid view",
                filterByFormula: formulaOther,
                sort:[
                    {
                        field: 'Name', direction: 'asc'
                    }
                ],
            })
            .eachPage((records, fetchNextPage) => {
                setOthers(records)
                SetIsLoading(false);
                fetchNextPage();
            })
    }, [search]);

    if (isLoading){
        return(
            <Spinner/>
        )
    }

    if(others.length === 0){
        return(
            <NoResults/>
        )
    }

    return (
        <>
            <div className={styles.maintitleACOther} id="other">Other</div>
            <ul className={styles.grid}>
                {others.map((other) => (
                    <ACCompetizioneOtherCard key={other.id} other={other} />
                ))}
            </ul>
        </>
    );
}