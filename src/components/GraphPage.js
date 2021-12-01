import React, { useState } from 'react'
import axios from 'axios';
import BubbleChart from './BubbleChart'
import Button from '@mui/material/Button';

import data from './data.json'

const da = [
    {
        id: "station A",
        group: "group A",
        time: 9,
        volume: 20
    },
    {
        id: "station A",
        group: "group A",
        time: 10,
        volume: 7
    },
    {
        id: "station B",
        group: "group A",
        time: 12,
        volume: 3
    },
    {
        id: "station A",
        group: "group A",
        time: 16,
        volume: 12
    }
]

export default function GraphPage() {

    const getData = async () => {
        let newData = [];
        const res = await axios.get(process.env.REACT_APP_SERVER_URL + 'station/using/entry');
        console.log(res);
        // const info = res;
        // for (let d in info) {
        //     newData.push({
        //         id: "station",
        //         group: "group A",
        //         time: 16,
        //         volume: 3
        //     })
        // }
    }

    return (
        <div>
            <Button onClick={()=>{getData()}}>get data</Button>
            <BubbleChart raw={da}></BubbleChart>
        </div>
    )
}
