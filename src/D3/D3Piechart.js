import * as d3 from 'd3';
import { svg } from 'd3';

const data = [25, 20, 10, 12, 15,15,12,10,20,25,25,25, 20, 10, 12, 15,15,12,10,20,25]

export default class D3Comparison{

    constructor(element){
        
        //added canvas
        const svg = d3.select(element)
            .append("svg")
                .attr("width",1200)
                .attr("height",200)

        const circles = svg.selectAll("circle")
            .data(data)

        circles.enter().append("circle")
            .attr("cx", (d, i) => (i*50)+50)
            .attr("cy", 150)
            .attr("r", d=>d)
            .attr("fill","#2F4F4F")

    }
}