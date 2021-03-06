import * as d3 from 'd3';
import { svg } from 'd3';

const pie = d3.pie();
const data ="https://comparison-b6dac-default-rtdb.firebaseio.com/Names.json";
export default class D3Comparison{

    constructor(element){

            const width = 700   
            const height = 300

            var data = [63,37];


            const svg = d3.select(element)
            .append("svg")
                .attr("width",width)
                .attr("height",height)

            var svgg = d3.select("svg"),
                radius = Math.min(width, height) / 2,
                g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

             var color = d3.scaleOrdinal(['#ff7f00','#984ea3','#e41a1c']);

            // Generate the pie
            var pie = d3.pie()

            // Generate the arcs
            var arc = d3.arc()
                .innerRadius(0)
                .outerRadius(radius);

            //Generate groups
            var arcs = g.selectAll("arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc")

            //Draw arc paths
            arcs.append("path")
                .attr("fill", function(d, i) {
                    return color(i);
            })
            .attr("d", arc);

            
            svg.append("g")
               .attr("transform", "translate(" + (width  - 430) + "," + 120 + ")")
               .append("text")
               .text("37%")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "20px")
               .attr("fill" , "white")

            svg.append("g")
               .attr("transform", "translate(" + (width  - 600) + "," + 120 + ")")
               .append("text")
               .text("WOMEN")
               .attr("fill" , "#FF0000")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "20px")
               

            svg.append("g")
               .attr("transform", "translate(" + (width  - 300) + "," + 150 + ")")
               .append("text")
               .text("63%")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "20px")
               .attr("fill" , "white")

            svg.append("g")
               .attr("transform", "translate(" + (width  - 180) + "," + 150 + ")")
               .append("text")
               .text("MEN")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "20px")
               .attr("fill" , "blue")

            svg.append("g")
               .attr("transform", "translate(" + (width  - 480) + "," + 230 + ")")
               .append("text")
               .text("% of COVID-19 deaths")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "25px")
               .attr("fill" , "#FAFAD2")

            d3.select(element)
               .append("div")
                 .style("border", "1px lightgray solid;")
                 .style("background-color", "#87CEEB")
                 .style("font", "20px sans-serif")
                 .text("Biological Sex is also a Risk-Factor");

    }
}