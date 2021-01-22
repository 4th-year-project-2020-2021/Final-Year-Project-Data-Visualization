import * as d3 from 'd3';
import { svg } from 'd3';

const url ="https://merssummary-default-rtdb.firebaseio.com/Names.json";
const MARGIN ={ TOP:10, BOTTOM:60, LEFT:70, RIGHT:10};
const WIDTH = 850 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

export default class D3Comparison{
    constructor(element){
        //D3 code goes here--!
        const svg = d3.select(element)
          .append("svg")
            .attr("width",WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
            .attr("height",HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)


        d3.json(url).then(data=>{  
            //using max function, it will loop through the data and get the highest number of y value
            const max = d3.max(data, d=> d.Number)

            const min = d3.min(data, d=> d.Number) *0.95

            const y = d3.scaleLinear()
                .domain([min, max]) //highest y value
                .range([HEIGHT,0]) //minimum and maximum value 

                //console.log(y(100)); //it returns 132.27513227513228 
                //console.log(y(50)); //it returns 66.13756613756614

            const x = d3.scaleBand()
                .domain(data.map(d => d.Year))
                .range([0,WIDTH])  
                .padding(0.4)

            const xAxisCall = d3.axisBottom(x)
            svg.append("g")
                .attr("transform",`translate(0, ${ HEIGHT })`)
                .call(xAxisCall)

            const yAxisCall = d3.axisLeft(y)
            svg.append("g").call(yAxisCall)

            svg.append("text")
              .attr("x", WIDTH/2)
              .attr("y", HEIGHT+50)
              .attr("text-anchor","middle")
              .text("Year - (Mers)")
              .style("stroke", "white")
              .style("stroke-width", ".4px")
              .style("font", "20px sans-serif");

            svg.append("text")
              .attr("x",-(HEIGHT/2))
              .attr("y",-50)
              .attr("text-anchor","middle")
              .text("No. of confirmed cases")
              .attr("transform", "rotate(-90)")
              .style("stroke", "white")
              .style("stroke-width", ".4px")
              .style("font", "20px sans-serif");

            const rects = svg.selectAll("rect")
                .data(data)

            rects.enter().append("rect")
              .attr("x", d => x(d.Year))
              .attr("y", d => y(d.Number))
              .attr("width", x.bandwidth)
              .attr("height", d => HEIGHT-y(d.Number))
              .attr("fill",  d=>{
                if(d.Number > 300){
                    return "red";
                }
                return "green";
            })
        })
    }
}