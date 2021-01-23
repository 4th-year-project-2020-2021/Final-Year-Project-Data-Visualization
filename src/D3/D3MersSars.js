import * as d3 from 'd3';
import { svg } from 'd3';

const url ="https://merssummary-default-rtdb.firebaseio.com/Names.json";  // == Mers data.
const url2 = "https://sarssummary-default-rtdb.firebaseio.com/Sars.json";  // == Sars data.
const MARGIN ={ TOP:10, BOTTOM:60, LEFT:70, RIGHT:10};
const WIDTH = 850 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

export default class D3Comparison{
    // This constructor function gets called only once when you first load up this visualization.
    constructor(element){
        const vis = this;

        // D3 code goes here--!
        // Appending SVG canvas and moving into the center of the screen according to the D3 margin convension.
        vis.svg = d3.select(element)
          .append("svg")
            .attr("width",WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
            .attr("height",HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

          vis.svg.append("text")
            .attr("x", WIDTH/2)
            .attr("y", HEIGHT+50)
            .attr("text-anchor","middle")
            .text("Year - (Mers)")
            .style("stroke", "white")
            .style("fill","white")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");

          vis.svg.append("text")
            .attr("x",-(HEIGHT/2))
            .attr("y",-50)
            .attr("text-anchor","middle")
            .text("No. of confirmed cases")
            .attr("transform", "rotate(-90)")
            .style("stroke", "white")
            .style("fill","white")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");

          vis.xAxisGroup = vis.svg.append("g")
            .attr("transform",`translate(0, ${ HEIGHT })`)

          vis.yAxisGroup = vis.svg.append("g")

          Promise.all([
            d3.json("https://merssummary-default-rtdb.firebaseio.com/Names.json"),
            d3.json("https://sarssummary-default-rtdb.firebaseio.com/Sars.json")
          ]).then((datasets)=>{
            //console.log(datasets); // It will get you two arrays of Mers and Sars datasets
            const [mers, sars] = datasets
            let flag = true

            vis.data = mers
            vis.update()

            d3.interval(()=>{
              vis.data = flag ? mers : sars
              vis.update();
              flag =! flag
            },1000)
          })
    }// End of constuructor function.

    // This update() method gets called you change your data.
    update(){
      const vis = this;
  
      //using max function, it will loop through the data and get the highest number of y value.
      const max = d3.max(vis.data, d=> d.Number)

      const min = d3.min(vis.data, d=> d.Number) *0.95

      const y = d3.scaleLinear()
          .domain([min, max]) //highest y value.
          .range([HEIGHT,0]) //minimum and maximum value .

      const x = d3.scaleBand()
          .domain(vis.data.map(d => d.Year))
          .range([0,WIDTH])  
          .padding(0.4)

      const xAxisCall = d3.axisBottom(x)
        vis.xAxisGroup.transition().duration(500).call(xAxisCall)

      const yAxisCall = d3.axisLeft(y)
       vis.yAxisGroup.transition().duration(500).call(yAxisCall)

      // DATA JOIN
      const rects = vis.svg.selectAll("rect")
            .data(vis.data)

      // EXIT
      rects.exit()
        .transition().duration(500)
          .attr("Number", 0)
          .attr("y", HEIGHT)
          .remove()

      // UPDATE
      rects.transition().duration(500)
        .attr("x", d => x(d.Year))
        .attr("y", d => y(d.Number))
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT-y(d.Number))


      // ENTER
      rects.enter().append("rect")
        .attr("x", d => x(d.Year))
        .attr("width", x.bandwidth)
        .attr("fill", "green")
        .attr("y",HEIGHT)
        .transition().duration(500)
        .attr("height", d => HEIGHT-y(d.Number))
        .attr("y", d => y(d.Number))
    }
}