import React from 'react'
import { ResponsiveSwarmPlot } from '@nivo/swarmplot'
import Grid from '@mui/material/Grid';

export default function BubbleChart({raw}) {

    const data = raw;

    return (
        <Grid container sx={{ height: '100vh' }}>
            <ResponsiveSwarmPlot
                data={data}
                groups={[ 'group A' ]}
                identity="id"
                value="time"
                valueFormat=">.2f"
                valueScale={{ type: 'linear', min: 0, max: 24, reverse: false }}
                size={{ key: 'volume', values: [ 1, 20 ], sizes: [ 20, 100 ] }}
                layout="horizontal"
                forceStrength={4}
                simulationIterations={100}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.6
                        ],
                        [
                            'opacity',
                            0.5
                        ]
                    ]
                }}
                colors={{ scheme: 'dark2' }}
                margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
                axisTop={{
                    orient: 'top',
                    tickSize: 10,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Time',
                    legendPosition: 'middle',
                    legendOffset: -46
                }}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 10,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Time',
                    legendPosition: 'middle',
                    legendOffset: 46
                }}
            />
        </Grid>
    )
}
