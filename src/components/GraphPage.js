import React, { useState } from 'react'
import axios from 'axios';
import BubbleChart from './BubbleChart'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


export default function GraphPage() {

    const [graphData, setGraphData] = useState([]);
    const [loading, setLoading] = useState(false)

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
        setLoading(false)
    }

    return (
        <div>
            <Button 
            variant="contained" 
            onClick={()=>{
                setLoading(true);
                getData();
            }}
            sx={{ marginTop: '30px', marginRight: '10px' }}
            >visualize data</Button>
            <Box
            sx={{
                width: "80vw",
                marginLeft: "auto",
                marginRight: "auto"
            }}>
                {
                    loading?
                    <CircularProgress sx={{
                        marginTop: "5rem"
                    }} />
                    :
                    <BubbleChart raw={graphData}></BubbleChart>
                }
            </Box>
        </div>
    )
}
