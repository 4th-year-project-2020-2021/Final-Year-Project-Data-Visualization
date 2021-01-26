import * as d3 from 'd3';
import { svg } from 'd3';

const url ="https://comparison-b6dac-default-rtdb.firebaseio.com/Names.json";
const MARGIN ={ TOP:10, BOTTOM:60, LEFT:70, RIGHT:10};
const WIDTH = 500 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

export default class D3Comparison{
    constructor(element){

        const ttsvg = d3.select(element)
          .append("div")
          .style("border", "1px lightgray solid;")
          .style("background-color", "#A52A2A")
          .style("font", "20px sans-serif")
          .text("This is preliminary COVID-19 data. While SARS and MERS' mortality rates are well understood, the definition of COVID-19 diagnoses is still shifting and it may be years until the actual number of cases is known.");

        const svg = d3.select(element)
          .append("svg")
            .attr("width",WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
            .attr("height",HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

     
        const tsvg = d3.select(element)
          .append("div")
          .style("border", "1px lightgray solid;")
          .style("background-color", "#708090")
          .style("font", "20px sans-serif")
          .text("COVID-19 seems not to be very different from SARS regarding its clinical features. However, it has a fatality rate of 2.3%, lower than that of SARS (9.5%) and much lower than that of MERS (34.4%).");
      
        const svg2 = d3.select(element)
          .append("svg")
            .attr("width",WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
            .attr("height",HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

        const tsvg2 = d3.select(element)
          .append("div")
          .style("border", "1px lightgray solid;")
          .style("background-color", "#708090")
          .style("font", "20px sans-serif")
          .text("However, despite the lower case fatality rate, covid-19 has so far resulted in more deaths than SARS and MERS combined.");

        const svg3 = d3.select(element)
          .append("svg")
            .attr("width",WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
            .attr("height",HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

        d3.json(url).then(comparison=>{
            //using max function, it will loop through the data and get the highest number of y value
            const max = d3.max(comparison, d=> d.Mortality)
           
            const min = d3.min(comparison, d=> d.Mortality) *0.55

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
              .style("stroke", "white")
              .style("fill","white")
              .style("stroke-width", ".4px")
              .style("text-decoration", "underline") 
              .style("font", "20px sans-serif");

            svg.append("text")
              .attr("x",-(HEIGHT/2))
              .attr("y",-40)
              .attr("text-anchor","middle")
              .text("Mortality Rate (%)")
              .attr("transform","rotate(-90)")
              .style("stroke", "white")
              .style("fill","white")
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
        })//end first

        d3.json(url).then(comparison2=>{
          //using max function, it will loop through the data and get the highest number of y value
          const max2 = d3.max(comparison2, d=> d.Deaths)
          const min2 = d3.min(comparison2, d=> d.Deaths) *0.55

          const y = d3.scaleLinear()
              .domain([min2, max2]) //highest y value
              .range([HEIGHT,0]) //minimum and maximum value 

          const x = d3.scaleBand()
              .domain(comparison2.map(d => d.Name))
              .range([0,WIDTH])  
              .padding(0.2)

          const xAxisCall2 = d3.axisBottom(x)
          svg2.append("g")
           .attr("transform",`translate(0, ${ HEIGHT })`)
           .call(xAxisCall2)

          const yAxisCall2 = d3.axisLeft(y)
          svg2.append("g").call(yAxisCall2)

          svg2.append("text")
            .attr("x", WIDTH/2)
            .attr("y", HEIGHT + 50)
            .attr("text-anchor","middle")
            .text("A comparison of COVID-19, MERS and SARS")
            .style("stroke", "white")
            .style("fill","white")
            .style("stroke-width", ".4px")
            .style("text-decoration", "underline") 
            .style("font", "20px sans-serif");

          svg2.append("text")
            .attr("x",-(HEIGHT/2))
            .attr("y",-40)
            .attr("text-anchor","middle")
            .text("No. of Deaths")
            .attr("transform","rotate(-90)")
            .style("stroke", "white")
            .style("fill","white")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");

          const rects2 = svg2.selectAll("rect")
          .data(comparison2)

          rects2.enter().append("rect")
            .attr("x", d=> x(d.Name))
            .attr("y", d => y(d.Deaths))
            .attr("width",x.bandwidth)
            .attr("height", d => HEIGHT - y(d.Deaths))
            .attr("fill", d=>{
                if(d.Deaths > 1000){
                    return "red";
                }
                return "green";
            })
      })//end second

      d3.json(url).then(comparison3=>{
        //using max function, it will loop through the data and get the highest number of y value
        const max3 = d3.max(comparison3, d=> d.Cases)
        const min3 = d3.min(comparison3, d=> d.Cases) *0.55

        const y = d3.scaleLinear()
            .domain([min3, max3]) //highest y value
            .range([HEIGHT,0]) //minimum and maximum value 

        const x = d3.scaleBand()
            .domain(comparison3.map(d => d.Name))
            .range([0,WIDTH])  
            .padding(0.2)

        const xAxisCall3 = d3.axisBottom(x)
        svg3.append("g")
         .attr("transform",`translate(0, ${ HEIGHT })`)
         .call(xAxisCall3)

        const yAxisCall3 = d3.axisLeft(y)
        svg3.append("g").call(yAxisCall3)

        svg3.append("text")
          .attr("x", WIDTH/2)
          .attr("y", HEIGHT + 50)
          .attr("text-anchor","middle")
          .text("A comparison of COVID-19, MERS and SARS")
          .style("stroke", "white")
          .style("fill","white")
          .style("stroke-width", ".4px")
          .style("text-decoration", "underline") 
          .style("font", "20px sans-serif");
          

        svg3.append("text")
          .attr("x",-(HEIGHT/2))
          .attr("y",-40)
          .attr("text-anchor","middle")
          .text("No. of Cases")
          .attr("transform","rotate(-90)")
          .style("stroke", "white")
          .style("fill","white")
          .style("stroke-width", ".4px")
          .style("font", "20px sans-serif");
          

        const rects3 = svg3.selectAll("rect")
        .data(comparison3)

        rects3.enter().append("rect")
          .attr("x", d=> x(d.Name))
          .attr("y", d => y(d.Cases))
          .attr("width",x.bandwidth)
          .attr("height", d => HEIGHT - y(d.Cases))
          .attr("fill", d=>{
              if(d.Cases > 10000){
                  return "red";
              }
              return "green";
          })
    })//end third

    }
}