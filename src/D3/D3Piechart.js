import * as d3 from 'd3';
import { svg } from 'd3';

const data = [10,20];

export default class D3Comparison{

    constructor(element){
        const svg = d3.selectAll(element).append("svg")
            .attr("width", 500)
            .attr("height",400)

        const circles = svg.selectAll("circle")
            .data(data)

        circles.enter().append("circle")
            .attr("cx",100)
            .attr("cy",100)
            .attr("r",50)
            .attr("fill","lightblue")

    }
}