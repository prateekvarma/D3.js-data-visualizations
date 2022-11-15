import React, { useState, useEffect  } from 'react';
import { csv } from 'd3';
import * as d3 from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';

const CsvData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        csv(csvUrl).then(setData);
    }, []);

    const message = (data) => {
        let message = '';
        message = message + Math.round(d3.csvFormat(data).length / 1024) + ' kb\n';
        message = message + data.length + ' rows\n';
        message = message + data.columns.length + ' columns';
        return message;
    }

    return <pre>{data ? message(data) : 'Loading...'}</pre>;
}

export default CsvData;