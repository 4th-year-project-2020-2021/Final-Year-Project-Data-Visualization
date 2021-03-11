import * as d3 from 'd3';
import { svg } from 'd3';

const mersCountry = "https://merscountries.firebaseio.com/MersCountry.json";
const sarsCountry = "https://sarscountries.firebaseio.com/SarsCountry.json";
const sarsOutbreak ="https://sarsoutbreak.firebaseio.com/SarsOutbreak.json";

const MARGIN ={ TOP:10, BOTTOM:60, LEFT:70, RIGHT:10};
const WIDTH = 1100 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 620 - MARGIN.TOP - MARGIN.BOTTOM;

const WIDTH2 = 1100 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT2 = 500 - MARGIN.TOP - MARGIN.BOTTOM;
const MARGIN2 ={ TOP:10, BOTTOM:60, LEFT:60, RIGHT:10};

const WIDTH3 = 560 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT3 = 400 - MARGIN.TOP - MARGIN.BOTTOM;

export default class D3Comparison{
    // This constructor function gets called only once when you first load up this visualization.
    constructor(element){
        const vis = this;

        vis.svg = d3.select(element)  // Select element on the page with D3 select
          .append("svg")  // Add elements onto a selection with the D3 append method
            .attr("width",WIDTH + MARGIN.LEFT + MARGIN.RIGHT)  // Attr method to set attributes of these elements
            .attr("height",HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

        d3.select(element)
          .append("div")
            .style("border", "1px gray solid;")
            .style("background-color", "#4682B4")
            .style("font", "20px sans-serif")
            .text("Since April 2012 and as of 12 January 2021, 2 581 cases of MERS-CoV, including 935 deaths,have been reported by health authorities worldwide.");
          
        d3.select(element)
          .append("div")
            .style("border", "1px lightgray solid;")
            .style("background-color", "#87CEEB")
            .style("font", "20px sans-serif")
            .text("SARS was first reported in Asia in February 2003. The illness spread to 29 countries, where 8,437 people got SARS and 774 of them died. The last known case of SARS was in 2004.");
          
        d3.select(element)
          .append("div")
            .style("border", "1px lightgray solid;")
            .style("background-color", "#87CEEB")
            .style("font", "20px sans-serif")
            .text("(It means the virus killed roughly one in 10 people who were infected.)")

        const svg2 = d3.select(element)
          .append("svg")
            .attr("width",WIDTH2 + MARGIN2.LEFT + MARGIN2.RIGHT)
            .attr("height",HEIGHT2 + MARGIN2.TOP + MARGIN2.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

        const tsvg2 = d3.select(element)
          .append("div")
          .style("border", "1px lightgray solid;")
          .style("background-color", "#87CEEB")
          .style("font", "20px sans-serif")
          .text("Middle East had the highest number cases (88.4%), followed by Asia (10.7%), Europe (0.8%) and USA with only 2 cases officially reported (0.1%).");

        const svg3 = d3.select(element)
          .append("svg")
            .attr("width",WIDTH2 + MARGIN2.LEFT + MARGIN2.RIGHT)
            .attr("height",HEIGHT2 + MARGIN2.TOP + MARGIN2.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

        const tsvg3 = d3.select(element)
          .append("div")
          .style("border", "1px lightgray solid;")
          .style("background-color", "#87CEEB")
          .style("font", "20px sans-serif")
          .text("The majority of SARS cases were from China, Canada and Singapore, among which, cases from China mainland presented the largest proportion, followed by that from Hong Kong and Taiwan.");

        d3.select(element)
          .append("div")
            .style("border", "1px lightgray solid;")
            .style("background-color", "orange")
            .style("font", "20px sans-serif")
            .text("features are compared in 5 main areas. (China, Hong Kong, Taiwan, Singapore, Canada)")

          
        const svg4 = d3.select(element)
          .append("svg")
            .attr("width",WIDTH3 + MARGIN2.LEFT + MARGIN2.RIGHT)
            .attr("height",HEIGHT3 + MARGIN2.TOP + MARGIN2.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

        const svg5 = d3.select(element)
          .append("svg")
            .attr("width",WIDTH3 + MARGIN2.LEFT + MARGIN2.RIGHT)
            .attr("height",HEIGHT3 + MARGIN2.TOP + MARGIN2.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

        d3.select(element)
          .append("div")
            .style("border", "1px lightgray solid;")
            .style("background-color", "#87CEEB")
            .style("font", "20px sans-serif")
            .text("China has the most infected cases and deaths, yet the lowest mortality rate.")

              
        const svg6 = d3.select(element)
          .append("svg")
            .attr("width",WIDTH3 + MARGIN2.LEFT + MARGIN2.RIGHT)
            .attr("height",HEIGHT3 + MARGIN2.TOP + MARGIN2.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

        const svg7 = d3.select(element)
          .append("svg")
            .attr("width",WIDTH3 + MARGIN2.LEFT + MARGIN2.RIGHT)
            .attr("height",HEIGHT3 + MARGIN2.TOP + MARGIN2.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

              
          vis.xLabel = vis.svg.append("text")
            .attr("x", WIDTH/1.7)
            .attr("y", HEIGHT-300)
            .attr("text-anchor","middle")
            .style("stroke", "gold")
            .style("fill","gold")
            .style("stroke-width", ".4px")
            .style("font", "35px sans-serif");

          vis.svg.append("text")
            .attr("x",-(HEIGHT/2))
            .attr("y",-50)
            .attr("text-anchor","middle")
            .text("Number of reported cases")
            .attr("transform", "rotate(-90)")
            .style("stroke", "black")
            .style("fill","black")
            .style("stroke-width", ".2px")
            .style("font", "20px sans-serif");

          vis.xAxisGroup = vis.svg.append("g")
            .attr("transform",`translate(0, ${ HEIGHT })`)

          vis.yAxisGroup = vis.svg.append("g")



          // Mers - Country
          d3.json(mersCountry).then(comparison2=>{
            //using max function, it will loop through the data and get the highest number of y value
            const max2 = d3.max(comparison2, d=> d.Confirmed)
            const min2 = d3.min(comparison2, d=> d.Confirmed) *0.55

            const y = d3.scaleLinear()
                .domain([min2, max2]) //highest y value
                .range([HEIGHT2,0]) //minimum and maximum value 

            const x = d3.scaleBand()
                .domain(comparison2.map(d => d.Country))
                .range([0,WIDTH2])  
                .padding(0.2)

            const xAxisCall2 = d3.axisBottom(x)
            svg2.append("g")
             .attr("transform",`translate(0, ${ HEIGHT2 })`)
             .call(xAxisCall2)
             .selectAll("text")
             .attr("y", 0)
             .attr("x", 9)
             .attr("dy", ".35em")
             .attr("transform", "rotate(50)")
             .style("fill","gold")
             .style("font", "15px sans-serif")
             .style("text-anchor", "start");


            const yAxisCall2 = d3.axisLeft(y)
            svg2.append("g").call(yAxisCall2)

            svg2.append("text")
              .attr("x", WIDTH2/2)
              .attr("y", HEIGHT2 + 50)
              .attr("text-anchor","middle")
              .text("Mers - Country")
              .style("stroke", "black")
              .style("fill","black")
              .style("stroke-width", ".4px")
              .style("text-decoration", "underline") 
              .style("font", "15px sans-serif");

            svg2.append("text")
              .attr("x", WIDTH2/2)
              .attr("y", HEIGHT2 - 320)
              .attr("text-anchor","middle")
              .text("Mers")
              .style("stroke", "gold")
              .style("fill","gold")
              .style("stroke-width", ".4px")
              .style("font", "35px sans-serif");

            svg2.append("text")
              .attr("x", WIDTH2/2)
              .attr("y", HEIGHT2 - 270)
              .attr("text-anchor","middle")
              .text("First identified in Saudi Arabia in 2012.")
              .style("stroke", "black")
              .style("fill","black")
              .style("stroke-width", ".4px")
              .style("font", "17px sans-serif");

            svg2.append("text")
              .attr("x", WIDTH2/2)
              .attr("y", HEIGHT2 - 250)
              .attr("text-anchor","middle")
              .text("Since 2012, MERS has been reported in 27 countries")
              .style("stroke", "black")
              .style("fill","black")
              .style("stroke-width", ".4px")
              .style("font", "17px sans-serif");

            svg2.append("text")
              .attr("x",-(HEIGHT2/2))
              .attr("y",-40)
              .attr("text-anchor","middle")
              .text("No. of Confirmed Cases")
              .attr("transform","rotate(-90)")
              .style("stroke", "black")
              .style("fill","black")
              .style("stroke-width", ".4px")
              .style("font", "15px sans-serif");

            // Add the line
            svg2.append("path")
            .datum(comparison2)
            .attr("fill", "grey")
            .attr("stroke", "blue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
              .x(function(d) { return x(d.Country) })
              .y(function(d) { return y(d.Confirmed) })
            )
            // Add the points

            const rects2 = svg2.selectAll("circle")
            .data(comparison2)

            rects2.enter().append("circle")
              .attr("cx", d=> x(d.Country))
              .attr("cy", d => y(d.Confirmed))
              .attr("r",20)
              //.attr("width",x.bandwidth)
              //.attr("height", d => HEIGHT2 - y(d.Confirmed))
              //.attr("fill", "red")
              .attr("fill", d=>{
                if(d.Confirmed > 2000){
                    return "red";
                }
                return "green";
              })
              .on("mouseover", function() {
                //Do something on mouseover of any bar
                d3.select(this)
                  .attr("fill", "rgb(95, 109, 148)");
              })
              .on("mouseout", function(d) {
                d3.select(this)
                  .attr("fill", "red");
              })
              .append("title")
                .text(d=>`Number of Confirmed Cases : ${d.Confirmed}  in ${d.Country}`);

                
          rects2.enter().append("text")
            .attr("class", "value")
            .attr("x", d=> x(d.Country))
            .attr("y", d => y(d.Confirmed))
            .attr("dy", ".35em") //vertical align middle
            .attr("width",x.bandwidth)
            .attr("height", d => HEIGHT - y(d.Confirmed))
            .attr("text-anchor", "middle")
            .text(d=>"No. "+ d.Confirmed)
            .attr("font-family" , "sans-serif")
            .attr("font-size" , "10px")
            .attr("fill" , "white")
        })// End Mers - Country

        // Start Sars - Country
        d3.json(sarsCountry).then(comparison3=>{
          //using max function, it will loop through the data and get the highest number of y value
          const max3 = d3.max(comparison3, d=> d.Confirmed)
          const min3 = d3.min(comparison3, d=> d.Confirmed) *0.55
  
          const y = d3.scaleLinear()
              .domain([min3, max3]) //highest y value
              .range([HEIGHT2,0]) //minimum and maximum value 
  
          const x = d3.scaleBand()
              .domain(comparison3.map(d => d.Country))
              .range([0,WIDTH2])  
              .padding(0.2)
  
          const xAxisCall3 = d3.axisBottom(x)
          svg3.append("g")
           .attr("transform",`translate(0, ${ HEIGHT2 })`)
           .call(xAxisCall3)
           .selectAll("text")
             .attr("y", 0)
             .attr("x", 9)
             .attr("dy", ".35em")
             .attr("transform", "rotate(50)")
             .style("fill","gold")
             .style("font", "15px sans-serif")
             .style("text-anchor", "start");
  
          const yAxisCall3 = d3.axisLeft(y)
          svg3.append("g").call(yAxisCall3)
  
          svg3.append("text")
            .attr("x", WIDTH2/2)
            .attr("y", HEIGHT2 + 50)
            .attr("text-anchor","middle")
            .text("Sars - Country")
            .style("stroke", "black")
            .style("fill","black")
            .style("stroke-width", ".4px")
            .style("text-decoration", "underline") 
            .style("font", "15px sans-serif");

          svg3.append("text")
            .attr("x", WIDTH2/2)
            .attr("y", HEIGHT2 - 340)
            .attr("text-anchor","middle")
            .text("Sars")
            .style("stroke", "gold")
            .style("fill","gold")
            .style("stroke-width", ".4px")
            .style("font", "35px sans-serif");
            
          svg3.append("text")
            .attr("x", WIDTH2/2)
            .attr("y", HEIGHT2 - 290)
            .attr("text-anchor","middle")
            .text("8,098 cases, resulting in 774 deaths reported in")
            .style("stroke", "black")
            .style("fill","black")
            .style("stroke-width", ".4px")
            .style("font", "17px sans-serif");

          svg3.append("text")
            .attr("x", WIDTH2/2)
            .attr("y", HEIGHT2 - 270)
            .attr("text-anchor","middle")
            .text("17 countries (9.6% fatality rate), with the majority of cases in mainland China and Hong Kong.")
            .style("stroke", "black")
            .style("fill","black")
            .style("stroke-width", ".4px")
            .style("font", "17px sans-serif");

          svg3.append("text")
            .attr("x", WIDTH2/2)
            .attr("y", HEIGHT2 - 250)
            .attr("text-anchor","middle")
            .text("No cases of SARS have been reported worldwide since 2004.")
            .style("stroke", "black")
            .style("fill","black")
            .style("stroke-width", ".4px")
            .style("font", "17px sans-serif");

          svg3.append("text")
            .attr("x",-(HEIGHT2/2))
            .attr("y",-40)
            .attr("text-anchor","middle")
            .text("No. of Confirmed Cases")
            .attr("transform","rotate(-90)")
            .style("stroke", "black")
            .style("fill","black")
            .style("stroke-width", ".4px")
            .style("font", "15px sans-serif");
            
          // Add the line
          svg3.append("path")
          .datum(comparison3)
          .attr("fill", "grey")
          .attr("stroke", "black")
          .attr("stroke-width", 1.5)
          .attr("d", d3.line()
            .x(function(d) { return x(d.Country) })
            .y(function(d) { return y(d.Confirmed) })
          )
          // Add the points


          const rects3 = svg3.selectAll("circle")
          .data(comparison3)
  
          rects3.enter().append("circle")
            .attr("cx", d=> x(d.Country))
            .attr("cy", d => y(d.Confirmed))
            .attr("r",20)
            //.attr("width",x.bandwidth)
            //.attr("height", d => HEIGHT2 - y(d.Confirmed))
            //.attr("fill", "red")
            .attr("fill", d=>{
              if(d.Confirmed > 5000){
                  return "red";
              }
              return "green";
            })
            .on("mouseover", function() {
              //Do something on mouseover of any bar
              d3.select(this)
                .attr("fill", "rgb(95, 109, 148)");
            })
            .on("mouseout", function(d) {
              d3.select(this)
                .attr("fill", "red");
            })
            .append("title")
              .text(d=>`Number of Confirmed Cases : ${d.Confirmed}  in ${d.Country}`);

            rects3.enter().append("text")
            .attr("class", "value")
            .attr("x", d=> x(d.Country))
            .attr("y", d => y(d.Confirmed))
            .attr("dy", ".35em") //vertical align middle
            .attr("width",x.bandwidth)
            .attr("height", d => HEIGHT - y(d.Confirmed))
            .attr("text-anchor", "middle")
            .text(d=>"No. "+ d.Confirmed)
            .attr("font-family" , "sans-serif")
            .attr("font-size" , "10px")
            .attr("fill" , "white")
      })//end third

      // Sars - outbreak1
      d3.json(sarsOutbreak).then(outbreak1=>{
        //using max function, it will loop through the data and get the highest number of y value
        const max2 = d3.max(outbreak1, d=> d.Cases)
        const min2 = d3.min(outbreak1, d=> d.Cases) *0.55

        const y = d3.scaleLinear()
            .domain([min2, max2]) //highest y value
            .range([HEIGHT3,0]) //minimum and maximum value 

        const x = d3.scaleBand()
            .domain(outbreak1.map(d => d.Country))
            .range([0,WIDTH3])  
            .padding(0.2)

        const xAxisCall2 = d3.axisBottom(x)
        svg4.append("g")
         .attr("transform",`translate(0, ${ HEIGHT3 })`)
         .call(xAxisCall2)
         .selectAll("text")
         .attr("y", 0)
         .attr("x", 9)
         .attr("dy", ".35em")
         .attr("transform", "rotate(30)")
         .style("fill","black")
         .style("font", "15px sans-serif")
         .style("text-anchor", "start");


        const yAxisCall2 = d3.axisLeft(y)
        svg4.append("g").call(yAxisCall2)

        svg4.append("text")
          .attr("x", WIDTH3/2)
          .attr("y", HEIGHT3 - 150)
          .attr("text-anchor","middle")
          .text("Sars no. of total infected cases from main countries")
          .style("stroke", "black")
          .style("fill","black")
          .style("stroke-width", ".4px")
          .style("font", "15px sans-serif");

        svg4.append("text")
          .attr("x",-(HEIGHT3/2))
          .attr("y",-40)
          .attr("text-anchor","middle")
          .text("No. of Total Infected")
          .attr("transform","rotate(-90)")
          .style("stroke", "black")
          .style("fill","black")
          .style("stroke-width", ".4px")
          .style("font", "15px sans-serif");

        // Add the line
        svg4.append("path")
        .datum(outbreak1)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d) { return x(d.Country) + (x.bandwidth() / 2) })
          .y(function(d) { return y(d.Cases) })
        )
        // Add the points

        const rects2 = svg4.selectAll("circle")
        .data(outbreak1)

        rects2.enter().append("circle")
          .attr("cx", d=> x(d.Country)+ (x.bandwidth() / 2))
          .attr("cy", d => y(d.Cases))
          .attr("r",5)
          //.attr("width",x.bandwidth)
          //.attr("height", d => HEIGHT2 - y(d.Confirmed))
          //.attr("fill", "red")
          .attr("fill","red")
          .on("mouseover", function() {
            //Do something on mouseover of any bar
            d3.select(this)
              .attr("fill", "rgb(95, 109, 148)");
          })
          .on("mouseout", function(d) {
            d3.select(this)
              .attr("fill", "red");
          })
          .append("title")
            .text(d=>`Number of Confirmed Cases : ${d.Cases}  in ${d.Country}`);

            
      rects2.enter().append("text")
        .attr("class", "value")
        .attr("x", d=> x(d.Country)+ (x.bandwidth() / 2))
        .attr("y", d => y(d.Cases))
        .attr("dy", ".35em") //vertical align middle
        .attr("width",x.bandwidth)
        .attr("height", d => HEIGHT - y(d.Cases))
        .attr("text-anchor", "middle")
        .text(d=>"No. "+ d.Cases)
        .attr("font-family" , "sans-serif")
        .attr("font-size" , "10px")
        .attr("fill" , "black")
    })// End Sars outbreak 1

  
    // Sars - outbreak2
    d3.json(sarsOutbreak).then(outbreak2=>{
      //using max function, it will loop through the data and get the highest number of y value
      const max2 = d3.max(outbreak2, d=> d.Deaths)
      const min2 = d3.min(outbreak2, d=> d.Deaths) *0.55

      const y = d3.scaleLinear()
          .domain([min2, max2]) //highest y value
          .range([HEIGHT3,0]) //minimum and maximum value 

      const x = d3.scaleBand()
          .domain(outbreak2.map(d => d.Country))
          .range([0,WIDTH3])  
          .padding(0.2)

      const xAxisCall2 = d3.axisBottom(x)
      svg5.append("g")
       .attr("transform",`translate(0, ${ HEIGHT3 })`)
       .call(xAxisCall2)
       .selectAll("text")
       .attr("y", 0)
       .attr("x", 9)
       .attr("dy", ".35em")
       .attr("transform", "rotate(30)")
       .style("fill","white")
       .style("font", "15px sans-serif")
       .style("text-anchor", "start");


      const yAxisCall2 = d3.axisLeft(y)
      svg5.append("g").call(yAxisCall2)

      svg5.append("text")
        .attr("x", WIDTH3/2)
        .attr("y", HEIGHT3 - 240)
        .attr("text-anchor","middle")
        .text("Sars no. of total Deaths cases from main countries")
        .style("stroke", "red")
        .style("fill","red")
        .style("stroke-width", ".4px")
        .style("font", "15px sans-serif");

      svg5.append("text")
        .attr("x", WIDTH3/2)
        .attr("y", HEIGHT3 - 200)
        .attr("text-anchor","middle")
        .text("China has the most infected cases and deaths")
        .style("stroke", "white")
        .style("fill","white")
        .style("stroke-width", ".4px")
        .style("font", "15px sans-serif");

      svg5.append("text")
        .attr("x",-(HEIGHT3/2))
        .attr("y",-40)
        .attr("text-anchor","middle")
        .text("No. of Total Deaths")
        .attr("transform","rotate(-90)")
        .style("stroke", "black")
        .style("fill","black")
        .style("stroke-width", ".4px")
        .style("font", "15px sans-serif");

      // Add the line
      svg5.append("path")
      .datum(outbreak2)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.Country) + (x.bandwidth() / 2) })
        .y(function(d) { return y(d.Deaths) })
      )
      // Add the points

      const rects2 = svg5.selectAll("circle")
      .data(outbreak2)

      rects2.enter().append("circle")
        .attr("cx", d=> x(d.Country)+ (x.bandwidth() / 2))
        .attr("cy", d => y(d.Deaths))
        .attr("r",5)
        //.attr("width",x.bandwidth)
        //.attr("height", d => HEIGHT2 - y(d.Confirmed))
        //.attr("fill", "red")
        .attr("fill","red")
        .on("mouseover", function() {
          //Do something on mouseover of any bar
          d3.select(this)
            .attr("fill", "rgb(95, 109, 148)");
        })
        .on("mouseout", function(d) {
          d3.select(this)
            .attr("fill", "red");
        })
        .append("title")
          .text(d=>`Number of Confirmed Cases : ${d.Deaths}  in ${d.Country}`);

          
    rects2.enter().append("text")
      .attr("class", "value")
      .attr("x", d=> x(d.Country)+ (x.bandwidth() / 2))
      .attr("y", d => y(d.Deaths))
      .attr("dy", ".35em") //vertical align middle
      .attr("width",x.bandwidth)
      .attr("height", d => HEIGHT - y(d.Deaths))
      .attr("text-anchor", "middle")
      .text(d=>"No. "+ d.Deaths)
      .attr("font-family" , "sans-serif")
      .attr("font-size" , "10px")
      .attr("fill" , "black")
  })// End Sars outbreak 2

  // Sars - outbreak3
  d3.json(sarsOutbreak).then(outbreak3=>{
    //using max function, it will loop through the data and get the highest number of y value
    const max2 = d3.max(outbreak3, d=> d.Recovered)
    const min2 = d3.min(outbreak3, d=> d.Recovered) *0.55

    const y = d3.scaleLinear()
        .domain([min2, max2]) //highest y value
        .range([HEIGHT3,0]) //minimum and maximum value 

    const x = d3.scaleBand()
        .domain(outbreak3.map(d => d.Country))
        .range([0,WIDTH3])  
        .padding(0.2)

    const xAxisCall2 = d3.axisBottom(x)
    svg6.append("g")
     .attr("transform",`translate(0, ${ HEIGHT3 })`)
     .call(xAxisCall2)
     .selectAll("text")
     .attr("y", 0)
     .attr("x", 9)
     .attr("dy", ".35em")
     .attr("transform", "rotate(30)")
     .style("fill","black")
     .style("font", "15px sans-serif")
     .style("text-anchor", "start");


    const yAxisCall2 = d3.axisLeft(y)
    svg6.append("g").call(yAxisCall2)

    svg6.append("text")
      .attr("x", WIDTH3/2)
      .attr("y", HEIGHT3 - 240)
      .attr("text-anchor","middle")
      .text("Sars no. of total Recovered cases from confirmed cases")
      .style("stroke", "green")
      .style("fill","green")
      .style("stroke-width", ".4px")
      .style("font", "15px sans-serif");

    svg6.append("text")
      .attr("x", WIDTH3/2)
      .attr("y", HEIGHT3 - 200)
      .attr("text-anchor","middle")
      .text("Hong Kong and Singapore present good cured rates,")
      .style("stroke", "black")
      .style("fill","black")
      .style("stroke-width", ".4px")
      .style("font", "15px sans-serif");

    svg6.append("text")
      .attr("x", WIDTH3/2)
      .attr("y", HEIGHT3 - 180)
      .attr("text-anchor","middle")
      .text("which are more than 82%, with China’s at 92.9%. ")
      .style("stroke", "black")
      .style("fill","black")
      .style("stroke-width", ".4px")
      .style("font", "15px sans-serif");

    svg6.append("text")
      .attr("x",-(HEIGHT3/2))
      .attr("y",-40)
      .attr("text-anchor","middle")
      .text("No. of Total Recovered Cases")
      .attr("transform","rotate(-90)")
      .style("stroke", "black")
      .style("fill","black")
      .style("stroke-width", ".4px")
      .style("font", "15px sans-serif");

    // Add the line
    svg6.append("path")
    .datum(outbreak3)
    .attr("fill", "none")
    .attr("stroke", "green")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x(function(d) { return x(d.Country) + (x.bandwidth() / 2) })
      .y(function(d) { return y(d.Recovered) })
    )
    // Add the points

    const rects2 = svg6.selectAll("circle")
    .data(outbreak3)

    rects2.enter().append("circle")
      .attr("cx", d=> x(d.Country)+ (x.bandwidth() / 2))
      .attr("cy", d => y(d.Recovered))
      .attr("r",5)
      //.attr("width",x.bandwidth)
      //.attr("height", d => HEIGHT2 - y(d.Confirmed))
      //.attr("fill", "red")
      .attr("fill","red")
      .on("mouseover", function() {
        //Do something on mouseover of any bar
        d3.select(this)
          .attr("fill", "rgb(95, 109, 148)");
      })
      .on("mouseout", function(d) {
        d3.select(this)
          .attr("fill", "red");
      })
      .append("title")
        .text(d=>`Number of Confirmed Cases : ${d.Recovered}  in ${d.Country}`);

        
  rects2.enter().append("text")
    .attr("class", "value")
    .attr("x", d=> x(d.Country)+ (x.bandwidth() / 2))
    .attr("y", d => y(d.Recovered))
    .attr("dy", ".35em") //vertical align middle
    .attr("width",x.bandwidth)
    .attr("height", d => HEIGHT - y(d.Recovered))
    .attr("text-anchor", "middle")
    .text(d=>"No. "+ d.Recovered)
    .attr("font-family" , "sans-serif")
    .attr("font-size" , "10px")
    .attr("fill" , "white")
})// End Sars outbreak 3


// Sars - outbreak4
d3.json(sarsOutbreak).then(outbreak4=>{
  //using max function, it will loop through the data and get the highest number of y value
  const max2 = d3.max(outbreak4, d=> d.MortalityRate)
  const min2 = d3.min(outbreak4, d=> d.MortalityRate) *0.55

  const y = d3.scaleLinear()
      .domain([min2, max2]) //highest y value
      .range([HEIGHT3,0]) //minimum and maximum value 

  const x = d3.scaleBand()
      .domain(outbreak4.map(d => d.Country))
      .range([0,WIDTH3])  
      .padding(0.2)

  const xAxisCall2 = d3.axisBottom(x)
  svg7.append("g")
   .attr("transform",`translate(0, ${ HEIGHT3 })`)
   .call(xAxisCall2)
   .selectAll("text")
   .attr("y", 0)
   .attr("x", 9)
   .attr("dy", ".35em")
   .attr("transform", "rotate(30)")
   .style("fill","black")
   .style("font", "15px sans-serif")
   .style("text-anchor", "start");


  const yAxisCall2 = d3.axisLeft(y)
  svg7.append("g").call(yAxisCall2)

  svg7.append("text")
    .attr("x", WIDTH3/2)
    .attr("y", HEIGHT3 - 200)
    .attr("text-anchor","middle")
    .text("Sars-Mortality Rate (%) from main countries")
    .style("stroke", "blue")
    .style("fill","blue")
    .style("stroke-width", ".4px")
    .style("font", "15px sans-serif");
  
  svg7.append("text")
    .attr("x", WIDTH3/2)
    .attr("y", HEIGHT3 - 140)
    .attr("text-anchor","middle")
    .text("Mortality rates tend to be between 10% to 17% till 11 July; ")
    .style("stroke", "black")
    .style("fill","black")
    .style("stroke-width", ".4px")
    .style("font", "15px sans-serif");

  
  svg7.append("text")
    .attr("x", WIDTH3/2)
    .attr("y", HEIGHT3 - 120)
    .attr("text-anchor","middle")
    .text("the worst is around 17% in Hong Kong and Canada, ")
    .style("stroke", "black")
    .style("fill","black")
    .style("stroke-width", ".4px")
    .style("font", "15px sans-serif");

  svg7.append("text")
    .attr("x", WIDTH3/2)
    .attr("y", HEIGHT3 - 100)
    .attr("text-anchor","middle")
    .text("yet China’s is only 6.6%. ")
    .style("stroke", "black")
    .style("fill","black")
    .style("stroke-width", ".4px")
    .style("font", "15px sans-serif");

  svg7.append("text")
    .attr("x",-(HEIGHT3/2))
    .attr("y",-40)
    .attr("text-anchor","middle")
    .text("Mortality Rate (%)")
    .attr("transform","rotate(-90)")
    .style("stroke", "black")
    .style("fill","black")
    .style("stroke-width", ".4px")
    .style("font", "15px sans-serif");

  // Add the line
  svg7.append("path")
  .datum(outbreak4)
  .attr("fill", "none")
  .attr("stroke", "blue")
  .attr("stroke-width", 1.5)
  .attr("d", d3.line()
    .x(function(d) { return x(d.Country) + (x.bandwidth() / 2) })
    .y(function(d) { return y(d.MortalityRate) })
  )
  // Add the points

  const rects2 = svg7.selectAll("circle")
  .data(outbreak4)

  rects2.enter().append("circle")
    .attr("cx", d=> x(d.Country)+ (x.bandwidth() / 2))
    .attr("cy", d => y(d.MortalityRate))
    .attr("r",5)
    //.attr("width",x.bandwidth)
    //.attr("height", d => HEIGHT2 - y(d.Confirmed))
    //.attr("fill", "red")
    .attr("fill","red")
    .on("mouseover", function() {
      //Do something on mouseover of any bar
      d3.select(this)
        .attr("fill", "rgb(95, 109, 148)");
    })
    .on("mouseout", function(d) {
      d3.select(this)
        .attr("fill", "red");
    })
    .append("title")
      .text(d=>`Number of Confirmed Cases : ${d.MortalityRate}  in ${d.Country}`);

      
rects2.enter().append("text")
  .attr("class", "value")
  .attr("x", d=> x(d.Country)+ (x.bandwidth() / 2))
  .attr("y", d => y(d.MortalityRate))
  .attr("dy", ".35em") //vertical align middle
  .attr("width",x.bandwidth)
  .attr("height", d => HEIGHT - y(d.MortalityRate))
  .attr("text-anchor", "middle")
  .text(d=>d.MortalityRate + " %")
  .attr("font-family" , "sans-serif")
  .attr("font-size" , "10px")
  .attr("fill" , "black")
})// End Sars outbreak 4



          Promise.all([
            d3.json("https://merssummary-d0933.firebaseio.com/MersSummary.json"),
            d3.json("https://sarssummary-84e13.firebaseio.com/SarsSummary.json")
          ]).then((datasets)=>{

            vis.MersData=datasets[0]
            vis.SarsData=datasets[1]
            console.log(vis.MersData)
            console.log(vis.SarsData)
            vis.update("mers")
            
        })
    }

    // This update() method gets called you change your data.
    update(virus){
      const vis = this;

      vis.data = (virus === "mers") ? vis.MersData : vis.SarsData;
      vis.xLabel.text(` ${virus}`)  
      
      //using max function, it will loop through the data and get the highest number of y value.
      const max = d3.max(vis.data, d=> d.Number)
      const min = d3.min(vis.data, d=> d.Number) *0.55

      const y = d3.scaleLinear()
          .domain([min, max]) //highest y value.
          .range([HEIGHT,0]) //minimum and maximum value .

      const x = d3.scaleBand()
          .domain(vis.data.map(d => d.Year))
          .range([0,WIDTH])  
          .padding(0.2)

      const xAxisCall = d3.axisBottom(x)
        vis.xAxisGroup.transition().duration(500).call(xAxisCall)
        .selectAll("text")
             .attr("y", 0)
             .attr("x", 9)
             .attr("dy", ".35em")
             .attr("transform", "rotate(70)")
             .style("fill","black")
             .style("font", "10px sans-serif")
             .style("text-anchor", "start");

      const yAxisCall = d3.axisLeft(y)
       vis.yAxisGroup.transition().duration(500).call(yAxisCall)

      // DATA JOIN
      const rects = vis.svg.selectAll("rect")
            .data(vis.data)

      // EXIT
      rects.exit()
        .transition().duration(500)
          .attr("height", 0)
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
        //.attr("fill", "#69b3a2")
        .attr("y",HEIGHT)
        .transition().duration(500)
        .attr("height", d => HEIGHT-y(d.Number))
        .attr("y", d => y(d.Number))
        .style("padding", "3px")
        .style("margin", "1px")
        .style("width", d => `${d * 10}px`)
        .text(d => d)
        //.attr("fill", "#008080")
        .attr("fill", d=>{
          if(d.Number > 300){
              return "red";
          }
          return "#008080";
        })
        .attr("stroke", "#FFB9EC")
        .attr("stroke-width", 1.5)

      rects.enter().append("text")
        .attr("class", "value")
        .attr("x", d=> x(d.Year) + (x.bandwidth() / 2))
        .attr("y", d => y(d.Number))
        .attr("dx", -5)
        .attr("dy", ".35em") //vertical align middle
        .attr("text-anchor", "end")
        .text(d=>"No. "+d.Number)
        .attr("fill" , "red")
        .style("font", "15px sans-serif");
    }
}