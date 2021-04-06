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
               .text("Biological Sex is also a Risk-Factor  --> Mers");

            const width = 700   
            const height = 300

            var data = [52,48];


            const svg = d3.select(element)
            .append("svg")
                .attr("width",width)
                .attr("height",height)

            var svgg = d3.select("svg"),
                radius = Math.min(width, height) / 2,
                g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

             var color = d3.scaleOrdinal(['#8FBC8F','#E9967A','#e41a1c']);

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
               .attr("stroke", "white")
               .style("stroke-width", "10px")
               .style("opacity", 7)
                .attr("fill", function(d, i) {
                    return color(i);
            })
            .on("mouseover", function(d) {
               //Do something on mouseover of any bar
               d3.select(this)
                 .style("stroke","lightblue")
                 .style("opacity","1")
                 .style("stroke-width","30")
                 .attr("fill", "#8FBC8F");
             })
             .on("mouseout", function(d) {
               d3.select(this)
               .style("stroke-width","10")
                 .attr("fill", "#E9967A");
             })
            .attr("d", arc);

            
            svg.append("g")
               .attr("transform", "translate(" + (width  - 430) + "," + 120 + ")")
               .append("text")
               .text("48%")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "20px")
               .attr("fill" , "white")
               .attr("stroke", "white")

            svg.append("g")
               .attr("transform", "translate(" + (width  - 600) + "," + 120 + ")")
               .append("text")
               .text("WOMEN")
               .attr("fill" , "#E9967A")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "20px")
               

            svg.append("g")
               .attr("transform", "translate(" + (width  - 300) + "," + 150 + ")")
               .append("text")
               .text("52%")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "20px")
               .attr("fill" , "white")
               .attr("stroke", "white")

            svg.append("g")
               .attr("transform", "translate(" + (width  - 180) + "," + 150 + ")")
               .append("text")
               .text("MEN")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "20px")
               .attr("fill" , "#8FBC8F")

            svg.append("g")
               .attr("transform", "translate(" + (width  - 450) + "," + 230 + ")")
               .append("text")
               .text("% of Mers deaths")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "25px")
               .attr("fill" , "white")
               .attr("stroke", "white")

            d3.select(element)
               .append("div")
                  .style("border", "1px lightgray solid;")
                  .style("background-color", "#5F9EA0")
                  .style("font", "20px sans-serif")
                  .text("The death rate of MERS also showed a predisposition towards males.");

            d3.select(element)
                .append("div")
                    .style("border", "1px lightgray solid;")
                    .style("background-color", "lightblue")
                    .style("font", "20px sans-serif")
                    .text("case fatality rate in males was significantly high (52%) as compared to women (48%).");

    
      }
}