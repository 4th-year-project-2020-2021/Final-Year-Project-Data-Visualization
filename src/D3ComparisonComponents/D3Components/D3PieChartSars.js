import * as d3 from 'd3';
import { svg } from 'd3';

const pie = d3.pie();
const data ="https://comparison-b6dac-default-rtdb.firebaseio.com/Names.json";
export default class D3Comparison{

    constructor(element){

         d3.select(element)
            .append("div")
               .style("border", "1px lightgray solid;")
               .style("background-color", "#87CEEB")
               .style("font", "20px sans-serif")
               .text("Biological Sex is also a Risk-Factor  --> Sars");

            const width = 700   
            const height = 300

            var data = [60.3,39.7];


            const svg = d3.select(element)
            .append("svg")
                .attr("width",width)
                .attr("height",height)

            var svgg = d3.select("svg"),
                radius = Math.min(width, height) / 2,
                g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

             var color = d3.scaleOrdinal(['#20B2AA','#BC8F8F','#e41a1c']);

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
               .text("39.7%")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "20px")
               .attr("fill" , "white")

            svg.append("g")
               .attr("transform", "translate(" + (width  - 600) + "," + 120 + ")")
               .append("text")
               .text("WOMEN")
               .attr("fill" , "#BC8F8F")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "20px")
               

            svg.append("g")
               .attr("transform", "translate(" + (width  - 300) + "," + 150 + ")")
               .append("text")
               .text("60.3%")
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
               .attr("fill" , "#20B2AA")

            svg.append("g")
               .attr("transform", "translate(" + (width  - 450) + "," + 230 + ")")
               .append("text")
               .text("% of Sars deaths")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "25px")
               .attr("fill" , "white")

            d3.select(element)
               .append("div")
                  .style("border", "1px lightgray solid;")
                  .style("background-color", "#5F9EA0")
                  .style("font", "20px sans-serif")
                  .text("The proportion of men was higher in the deceased group (53.2%) than in the group who survived (42.3%) ");

            d3.select(element)
               .append("div")
                  .style("border", "1px lightgray solid;")
                  .style("background-color", "#5F9EA0")
                  .style("font", "20px sans-serif")
                  .text("Survival analysis showed that men had a significantly higher mortality rate than women (31.2 vs. 22.6%) in this hospital-based cohort.");
   

    }
}