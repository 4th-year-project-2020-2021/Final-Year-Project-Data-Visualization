import * as d3 from 'd3';
import { svg } from 'd3';

const url ="https://comparison-b6dac-default-rtdb.firebaseio.com/Names.json";

export default class D3Chart{
    constructor(element){
        const svg = d3.select(element)
          .append("svg")
            .attr("width",500)
            .attr("height",500)

        d3.json(url).then(comparison=>{
           
        const rects = svg.selectAll("rect")
        .data(comparison)

        rects.enter()
            .append("rect")
              .attr("x", (d, i)=>i*100)
              .attr("y", 50)
              .attr("width",50)
              .attr("height", d=>d.Mortality * 10)
              .attr("fill", d=>{
                  if(d.Age > 40){
                      return "red";
                  }
                  return "green";
              })
        })
    }
}