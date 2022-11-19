import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const url = 'https://udemy-react-d3.firebaseio.com/tallest_men.json';

const TallMenBarChart = () => {
    const tallRef = useRef();
    
    useEffect(() => {
        const svg = d3.select(tallRef.current)
            .append("svg")
            .attr("width", 800)
            .attr("height", 500);

        d3.json(url).then((data) => {
            const rects = svg.selectAll("rect")
                .data(data);

            rects.enter().append("rect")
                .attr("x", (d, i) => i*100)
                .attr("y", 0)
                .attr("width", 50)
                .attr("height", (d) => d.height)
                .attr("fill", "grey")
        });
    }, []);

    return <div ref={tallRef}></div>
};

export default TallMenBarChart;