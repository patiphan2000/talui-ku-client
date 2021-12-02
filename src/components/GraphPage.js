import React, { useState } from 'react'
import {
    Link
  } from "react-router-dom";
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
        id: "station C",
        group: "group A",
        time: 16,
        volume: 12
    },
    {
        id: "station A",
        group: "group A",
        time: 13,
        volume: 5
    },
    {
        id: "station C",
        group: "group A",
        time: 16,
        volume: 17
    },
    {
        id: "station D",
        group: "group A",
        time: 8,
        volume: 16
    }
]

export default function GraphPage() {

    const [graphData, setGraphData] = useState([]);

    const getData = async () => {
        let newData = [];
        const res = await axios.get(process.env.REACT_APP_SERVER_URL + 'station/using/entry');
        // console.log('geting data...');
        // console.log(res.data);
        const info = res.data;
        for (let d in info) {
            // console.log(info[d].time.split(" ")[1].split(":")[0]);
            const time = parseInt(info[d].time.split(" ")[1].split(":")[0])
            newData.push({
                id: info[d].station,
                group: "entry",
                time: time,
                volume: info[d].value
            })
        }
        const res2 = await axios.get(process.env.REACT_APP_SERVER_URL + 'station/using/dest');
        // console.log('geting data...');
        // console.log(res.data);
        const info2 = res2.data;
        for (let d in info2) {
            // console.log(info[d].time.split(" ")[1].split(":")[0]);
            const time = parseInt(info2[d].time.split(" ")[1].split(":")[0])
            newData.push({
                id: info2[d].station,
                group: "destination",
                time: time,
                volume: info2[d].value
            })
        }
        setGraphData(newData)
    }

    return (
        <div>
            <Button 
            variant="contained" 
            onClick={()=>{getData()}}
            sx={{ marginTop: '30px', marginRight: '10px' }}
            >get data</Button>

            <BubbleChart raw={graphData}></BubbleChart>

            <Button 
            variant="contained" 
            component={Link}
            to="/"
            sx={{ marginTop: '30px' }}
            >back</Button>
        </div>
    )
}
