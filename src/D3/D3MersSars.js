import * as d3 from 'd3';
import { svg } from 'd3';

const url ="https://merssummary-default-rtdb.firebaseio.com/Names.json";  // == Mers data.
const url2 = "https://sarssummary-default-rtdb.firebaseio.com/Sars.json";  // == Sars data.
const mersCountry = "https://reactproject1-3472c-default-rtdb.firebaseio.com/MersCountry.json";
const sarsCountry = "https://reactproject11-c3541-default-rtdb.firebaseio.com/SarsCountry.json";
const MARGIN ={ TOP:10, BOTTOM:60, LEFT:70, RIGHT:10};
const WIDTH = 850 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

const WIDTH2 = 1100 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT2 = 500 - MARGIN.TOP - MARGIN.BOTTOM;
const MARGIN2 ={ TOP:10, BOTTOM:60, LEFT:60, RIGHT:10};

const MWIDTH3 = 500 - MARGIN.LEFT - MARGIN.RIGHT;
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

        const svg2 = d3.select(element)
          .append("svg")
            .attr("width",WIDTH2 + MARGIN2.LEFT + MARGIN2.RIGHT)
            .attr("height",HEIGHT2 + MARGIN2.TOP + MARGIN2.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

        const tsvg2 = d3.select(element)
          .append("div")
          .style("border", "1px lightgray solid;")
          .style("background-color", "#708090")
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
          .style("background-color", "#708090")
          .style("font", "20px sans-serif")
          .text("The majority of SARS cases were from China, Canada and Singapore, among which, cases from China mainland presented the largest proportion, followed by that from Hong Kong and Taiwan.");

          
          vis.xLabel = vis.svg.append("text")
            .attr("x", WIDTH/2)
            .attr("y", HEIGHT-300)
            .attr("text-anchor","middle")
            .style("stroke", "gold")
            .style("fill","gold")
            .style("stroke-width", ".4px")
            .style("font", "35px sans-serif");

          vis.svg.append("text")
            .attr("x", WIDTH/2)
            .attr("y", HEIGHT+50)
            .attr("text-anchor","middle")
            .style("stroke", "white")
            .text("Year of onset")
            .style("fill","white")
            .style("stroke-width", ".2px")
            .style("font", "20px sans-serif");

          vis.svg.append("text")
            .attr("x",-(HEIGHT/2))
            .attr("y",-50)
            .attr("text-anchor","middle")
            .text("Number of reported cases")
            .attr("transform", "rotate(-90)")
            .style("stroke", "white")
            .style("fill","white")
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

            const yAxisCall2 = d3.axisLeft(y)
            svg2.append("g").call(yAxisCall2)

            svg2.append("text")
              .attr("x", WIDTH2/2)
              .attr("y", HEIGHT2 + 50)
              .attr("text-anchor","middle")
              .text("Mers - Country")
              .style("stroke", "white")
              .style("fill","white")
              .style("stroke-width", ".4px")
              .style("text-decoration", "underline") 
              .style("font", "15px sans-serif");

            svg2.append("text")
              .attr("x", WIDTH2/2)
              .attr("y", HEIGHT2 - 300)
              .attr("text-anchor","middle")
              .text("Mers")
              .style("stroke", "gold")
              .style("fill","gold")
              .style("stroke-width", ".4px")
              .style("font", "15px sans-serif");

            svg2.append("text")
              .attr("x",-(HEIGHT2/2))
              .attr("y",-40)
              .attr("text-anchor","middle")
              .text("No. of Confirmed Cases")
              .attr("transform","rotate(-90)")
              .style("stroke", "white")
              .style("fill","white")
              .style("stroke-width", ".4px")
              .style("font", "15px sans-serif");

            const rects2 = svg2.selectAll("rect")
            .data(comparison2)

            rects2.enter().append("rect")
              .attr("x", d=> x(d.Country))
              .attr("y", d => y(d.Confirmed))
              .attr("width",x.bandwidth)
              .attr("height", d => HEIGHT2 - y(d.Confirmed))
              .attr("fill", "#c0c0c0")
              .on("mouseover", function() {
                //Do something on mouseover of any bar
                d3.select(this)
                  .attr("fill", "rgb(95, 109, 148)");
              })
              .on("mouseout", function(d) {
                d3.select(this)
                  .attr("fill", "#00315b");
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
            .text(d=>d.Confirmed)
            .attr("font-family" , "sans-serif")
            .attr("font-size" , "14px")
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
  
          const yAxisCall3 = d3.axisLeft(y)
          svg3.append("g").call(yAxisCall3)
  
          svg3.append("text")
            .attr("x", WIDTH2/2)
            .attr("y", HEIGHT2 + 50)
            .attr("text-anchor","middle")
            .text("Sars - Country")
            .style("stroke", "white")
            .style("fill","white")
            .style("stroke-width", ".4px")
            .style("text-decoration", "underline") 
            .style("font", "15px sans-serif");

          svg3.append("text")
            .attr("x", WIDTH2/2)
            .attr("y", HEIGHT2 - 300)
            .attr("text-anchor","middle")
            .text("Sars")
            .style("stroke", "gold")
            .style("fill","gold")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");
            
  
          svg3.append("text")
            .attr("x",-(HEIGHT2/2))
            .attr("y",-40)
            .attr("text-anchor","middle")
            .text("No. of Confirmed Cases")
            .attr("transform","rotate(-90)")
            .style("stroke", "white")
            .style("fill","white")
            .style("stroke-width", ".4px")
            .style("font", "15px sans-serif");
            
  
          const rects3 = svg3.selectAll("rect")
          .data(comparison3)
  
          rects3.enter().append("rect")
            .attr("x", d=> x(d.Country))
            .attr("y", d => y(d.Confirmed))
            .attr("width",x.bandwidth)
            .attr("height", d => HEIGHT2 - y(d.Confirmed))
            .attr("fill", "#c0c0c0")
            .on("mouseover", function() {
              //Do something on mouseover of any bar
              d3.select(this)
                .attr("fill", "rgb(95, 109, 148)");
            })
            .on("mouseout", function(d) {
              d3.select(this)
                .attr("fill", "#00315b");
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
            .text(d=>d.Confirmed)
            .attr("font-family" , "sans-serif")
            .attr("font-size" , "14px")
            .attr("fill" , "white")
      })//end third
  
          Promise.all([
            d3.json("https://merssummary-default-rtdb.firebaseio.com/Names.json"),
            d3.json("https://sarssummary-default-rtdb.firebaseio.com/Sars.json")
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
      vis.xLabel.text(` ${virus}`)  // TEXT TYPE ERROR

  
      //using max function, it will loop through the data and get the highest number of y value.
      const max = d3.max(vis.data, d=> d.Number)
      const min = d3.min(vis.data, d=> d.Number) *0.55

      const y = d3.scaleLinear()
          .domain([min, max]) //highest y value.
          .range([HEIGHT,0]) //minimum and maximum value .

      const x = d3.scaleBand()
          .domain(vis.data.map(d => d.Year))
          .range([0,WIDTH])  
          .padding(0.4)

      const xAxisCall = d3.axisBottom(x)
        vis.xAxisGroup.transition().duration(500).call(xAxisCall)

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
        .attr("fill", "#69b3a2")
        .attr("stroke", "#FFB9EC")
        .attr("stroke-width", 1)

      rects.enter().append("text")
        .attr("class", "value")
        .attr("x", d=> x(d.Year))
        .attr("y", d => y(d.Number))
        .attr("dx", -5)
        .attr("dy", ".35em") //vertical align middle
        .attr("text-anchor", "end")
        .text(d=>d.Number)
        .attr("fill" , "red")

    }
}