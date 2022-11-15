import React, { useState, useEffect  } from 'react';
import { csv, arc, pie } from 'd3';
//import * as d3 from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';

const width = 960;
const height = 500;
const centerX = width/2;
const centerY = height/2;

const pieArc = arc().innerRadius(0).outerRadius(width);

const CsvToPie = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        csv(csvUrl).then(setData);
    }, []);

    if(!data) {
        return <pre>Loading...</pre>;
    }

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${centerX}, ${centerY})`}>
                {pie().value(1)(data).map((d, i) => {
                    return <path key={i} fill={d.data['RGB hex value']} d={pieArc(d)} />
                })}
                {/* Below is Pie using arc */}
                {/* {data.map((d, i) => {
                    return <path key={i} fill={d['RGB hex value']} d={pieArc({
                        startAngle: i / data.length*2*Math.PI,
                        endAngle: (i+1) / data.length*2*Math.PI
                    })} />
                })} */}
            </g>
        </svg>
    )
}

export default CsvToPie;