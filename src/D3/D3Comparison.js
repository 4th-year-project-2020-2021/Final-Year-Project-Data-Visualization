import * as d3 from 'd3';
import { svg } from 'd3';

const url ="https://comparison-b6dac-default-rtdb.firebaseio.com/Names.json";
const MARGIN ={ TOP:10, BOTTOM:60, LEFT:70, RIGHT:10};
const WIDTH = 500 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

export default class D3Comparison{
    constructor(element){
        const svg = d3.select(element)
          .append("svg")
            .attr("width",WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
            .attr("height",HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

        d3.json(url).then(comparison=>{
            //using max function, it will loop through the data and get the highest number of y value
            const max = d3.max(comparison, d=> d.Mortality)
           
            const min = d3.min(comparison, d=> d.Mortality) *0.95

            const y = d3.scaleLinear()
                .domain([min, max]) //highest y value
                .range([HEIGHT,0]) //minimum and maximum value 

            const x = d3.scaleBand()
                .domain(comparison.map(d => d.Name))
                .range([0,WIDTH])  
                .padding(0.2)

            const xAxisCall = d3.axisBottom(x)
            svg.append("g")
             .attr("transform",`translate(0, ${ HEIGHT })`)
             .call(xAxisCall)

            const yAxisCall = d3.axisLeft(y)
            svg.append("g").call(yAxisCall)

            svg.append("text")
              .attr("x", WIDTH/2)
              .attr("y", HEIGHT + 50)
              .attr("text-anchor","middle")
              .text("A comparison of COVID-19, MERS and SARS")
              .style("stroke", "lightsteelblue")
              .style("stroke-width", ".4px")
              .style("font", "20px sans-serif");

            svg.append("text")
              .attr("x",-(HEIGHT/2))
              .attr("y",-40)
              .attr("text-anchor","middle")
              .text("Mortality Rate (%)")
              .attr("transform","rotate(-90)")
              .style("stroke", "lightsteelblue")
              .style("stroke-width", ".4px")
              .style("font", "20px sans-serif");

            const rects = svg.selectAll("rect")
            .data(comparison)

            rects.enter().append("rect")
              .attr("x", d=> x(d.Name))
              .attr("y", d => y(d.Mortality))
              .attr("width",x.bandwidth)
              .attr("height", d => HEIGHT - y(d.Mortality))
              .attr("fill", d=>{
                  if(d.Mortality > 20){
                      return "red";
                  }
                  return "green";
              })
        })
    }
}