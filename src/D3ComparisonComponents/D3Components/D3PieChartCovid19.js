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
               .on("mouseover", function(d) {
                  //Do something on mouseover of any bar
                  d3.select(this)
                  .style("font", "22px sans-serif")
                  .style("stroke", "#008080")
                  .style("fill","#008080")
                })
                .on("mouseout", function(d) {
                  d3.select(this)
                  .style("stroke", "#3CB371")
                  .style("fill","black")
                  .style("font", "20px sans-serif")
                })
               .text("Biological Sex is also a Risk-Factor  -- Covid-19 --");

            const width = 700   
            const height = 300

            var data = [70.3,29.7];


            const svg = d3.select(element)
            .append("svg")
                .attr("width",width)
                .attr("height",height)

            var svgg = d3.select("svg"),
                radius = Math.min(width, height) / 2,
                g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

             var color = d3.scaleOrdinal(['#6B8E23','#CD853F','#e41a1c']);

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
                    .attr("fill", "#6B8E23");
                })
                .on("mouseout", function(d) {
                  d3.select(this)
                    .style("stroke-width","10")
                    .attr("fill", "#CD853F");
                })
            .attr("d", arc);

            
            svg.append("g")
               .attr("transform", "translate(" + (width  - 430) + "," + 120 + ")")
               .append("text")
               .text("29.7%")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "20px")
               .attr("fill" , "white")
               .attr("stroke", "white")

            svg.append("g")
               .attr("transform", "translate(" + (width  - 600) + "," + 120 + ")")
               .append("text")
               .text("WOMEN")
               .attr("fill" , "#CD853F")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "20px")
               

            svg.append("g")
               .attr("transform", "translate(" + (width  - 300) + "," + 150 + ")")
               .append("text")
               .text("70.3%")
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
               .attr("fill" , "#6B8E23")

            svg.append("g")
               .attr("transform", "translate(" + (width  - 480) + "," + 230 + ")")
               .append("text")
               .text("% of COVID-19 deaths")
               .attr("class", "title")
               .attr("font-family" , "sans-serif")
               .attr("font-size" , "25px")
               .attr("fill" , "#FAFAD2")
               .attr("stroke", "white")

            d3.select(element)
               .append("div")
                  .style("border", "1px lightgray solid;")
                  .style("background-color", "#008B8B")
                  .style("font", "20px sans-serif")
                  .on("mouseover", function(d) {
                     //Do something on mouseover of any bar
                     d3.select(this)
                     .style("font", "22px sans-serif")
                     .style("stroke", "#008080")
                     .style("fill","#008080")
                   })
                   .on("mouseout", function(d) {
                     d3.select(this)
                     .style("stroke", "#3CB371")
                     .style("fill","black")
                     .style("font", "20px sans-serif")
                   })
                  .text(" The number of men was 2.4 times that of women in the deceased patients. While men and women had the same susceptibility, men were more prone to dying (χ2 test, P = 0.016)");

    }
}