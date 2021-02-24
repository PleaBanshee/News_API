import React, { useEffect, useState } from 'react';
import TopNavigation from '../../components/top-menu';
import { getHeadLines } from '../../services/http';
import NewsHero from '../../components/news-hero';
import {shuffle} from 'lodash';
import Loader from '../../components/loader';
import 'tachyons';

export default function Home() {
    const [headlines, setHeadlines] = useState([]);
    const [page,setPage] = useState(null);
    const [appState, setAppState] = useState({
        loading: true,
        error: false
    });


    useEffect(() => {
        setAppState(a => ({ ...a, loading: true }));
        getHeadLines(page)
        .then(response => {
            if (response && response.data && response.data.status === 'ok') {
                setHeadlines(shuffle(response.data.articles));
            }
        }, error => {
            console.log(error);
            setAppState(a => ({ ...a, error: true }));
        })
        .finally(_ => {
            setAppState(a => ({ ...a, loading: false }));
        });
    }, [page]);


    const ContentView = appState.loading ? <Loader /> : <NewsHero headlines={headlines} />;
    return (

        <div className="content-wrapper">
            <TopNavigation onChangePage={(page)=>setPage(page)} />
            {ContentView}
        </div>

    )
}