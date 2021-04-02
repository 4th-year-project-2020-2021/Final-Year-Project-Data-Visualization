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
                .attr("fill", function(d, i) {
                    return color(i);
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

            d3.select(element)
               .append("div")
                  .style("border", "1px lightgray solid;")
                  .style("background-color", "#5F9EA0")
                  .style("font", "20px sans-serif")
                  .text("The death rate of MERS also showed a predisposition towards males.");

            d3.select(element)
                .append("div")
                    .style("border", "1px lightgray solid;")
                    .style("background-color", "#5F9EA0")
                    .style("font", "20px sans-serif")
                    .text("case fatality rate in males was significantly high (52%) as compared to women (48%).");


            d3.select(element)
               .append("div")
                  .style("border", "1px lightgray solid;")
                  .style("background-color", "#808080")
                  .style("font", "20px sans-serif")
                  .text("Based on the sequencing of its genome from early patient samples, this new virus shared 79% similarity to the SARS-CoV virus from 2003, and 50% similarity to the MERS-CoV virus from 2012.2 Therefore, the virus was placed within the Coronaviridae family and named SARS-CoV-2 or COVID-19, as it has become more commonly known.");
    
            d3.select(element)
               .append("div")
                  .style("border", "1px lightgray solid;")
                  .style("background-color", "#808080")
                  .style("font", "20px sans-serif")
                  .text("The Coronaviridae family includes seven coronaviruses that can infect humans: four (HKU1, NL63, OC43, and 229E) cause mild symptoms, and three cause severe respiratory illnesses that include SARS-CoV, MERS-CoV, and now COVID-19.5 All three of these viruses’ mechanism of entry involves spreading from person to person by contact with origination from bats contracting such coronaviruses.6 Prior pathogens SARS-CoV and MERS-CoV were transmitted from bats to civet cats and dromedary camels, respectively, while the animal of transmission for SARS-CoV-2 has been linked to a pangolin due to their genetic similarities ");
  
    
    
      }
}