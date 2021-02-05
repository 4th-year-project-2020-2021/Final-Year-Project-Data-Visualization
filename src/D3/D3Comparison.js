import * as d3 from 'd3';
import { svg } from 'd3';

const url ="https://comparison-b6dac-default-rtdb.firebaseio.com/Names.json";
const MARGIN ={ TOP:10, BOTTOM:60, LEFT:70, RIGHT:10};
const WIDTH = 1050 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;


const MARGIN2 ={ TOP:10, BOTTOM:60, LEFT:60, RIGHT:10};
const WIDTH2 = 360 - MARGIN2.LEFT - MARGIN2.RIGHT;
const HEIGHT2 = 380 - MARGIN2.TOP - MARGIN2.BOTTOM;

const url2 ="https://covid19symptom-default-rtdb.firebaseio.com/Names.json";  //covid-19 symptom
const url3 ="https://merssymptom-default-rtdb.firebaseio.com/Names.json";  //mers
const url4 ="https://sarssymptom-default-rtdb.firebaseio.com/Names.json";  //sars


export default class D3Comparison{
    constructor(element){
      const vis = this;

      // D3 code goes here--!
      // Appending SVG canvas and moving into the center of the screen according to the D3 margin convension.
      vis.svgg = d3.select(element)
        .append("svg")
          .attr("width",WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
          .attr("height",HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
        .append("g")
          .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

      d3.select(element)
        .append("div")
          .style("border", "1px lightgray solid;")
          .style("background-color", "#A52A2A")
          .style("font", "20px sans-serif")
          .text("This is preliminary COVID-19 data. While SARS and MERS' mortality rates are well understood, the definition of COVID-19 diagnoses is still shifting and it may be years until the actual number of cases is known.");

          
        const svg = d3.select(element)
          .append("svg")
            .attr("width",WIDTH2 + MARGIN2.LEFT + MARGIN2.RIGHT)
            .attr("height",HEIGHT2 + MARGIN2.TOP + MARGIN2.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

        const svg2 = d3.select(element)
          .append("svg")
            .attr("width",WIDTH2 + MARGIN2.LEFT + MARGIN2.RIGHT)
            .attr("height",HEIGHT2 + MARGIN2.TOP + MARGIN2.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

        const svg3 = d3.select(element)
          .append("svg")
            .attr("width",WIDTH2 + MARGIN2.LEFT + MARGIN2.RIGHT)
            .attr("height",HEIGHT2 + MARGIN2.TOP + MARGIN2.BOTTOM)
          .append("g")
            .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

        d3.select(element)
          .append("div")
            .style("border", "1px lightgray solid;")
            .style("background-color", "#2F4F4F")
            .style("font", "20px sans-serif")
            .text("COVID-19 seems not to be very different from SARS regarding its clinical features. However, it has a fatality rate of 5.6%, lower than that of SARS (9.63%) and much lower than that of MERS (34.45%). While the mortality rate among COVID‐19 patients is lower than SARS and MERS, COVID‐19 is proving to have a higher contagious potency, resulting in a higher number of deaths");
        
           vis.xLabel = vis.svgg.append("text")
            .attr("x", WIDTH/1.8)
            .attr("y", HEIGHT-410)
            .attr("text-anchor","middle")
            .style("stroke", "gold")
            .style("fill","gold")
            .style("stroke-width", ".4px")
            .style("font", "35px sans-serif");

          vis.xLabel2 = vis.svgg.append("text")
            .attr("x", WIDTH/1.8)
            .attr("y", HEIGHT-380)
            .attr("text-anchor","middle")
            .style("stroke", "white")
            .style("fill","white")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");

          vis.xLabel3 = vis.svgg.append("text")
            .attr("x", WIDTH/1.8)
            .attr("y", HEIGHT-360)
            .attr("text-anchor","middle")
            .style("stroke", "white")
            .style("fill","white")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");

          vis.xLabel4 = vis.svgg.append("text")
            .attr("x", WIDTH/1.8)
            .attr("y", HEIGHT-340)
            .attr("text-anchor","middle")
            .style("stroke", "white")
            .style("fill","white")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");

          vis.xLabel5 = vis.svgg.append("text")
            .attr("x", WIDTH/1.8)
            .attr("y", HEIGHT-320)
            .attr("text-anchor","middle")
            .style("stroke", "white")
            .style("fill","white")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");

          vis.xLabel6 = vis.svgg.append("text")
            .attr("x", WIDTH/1.8)
            .attr("y", HEIGHT-300)
            .attr("text-anchor","middle")
            .style("stroke", "white")
            .style("fill","white")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");

          vis.xLabel7 = vis.svgg.append("text")
            .attr("x", WIDTH/1.8)
            .attr("y", HEIGHT-280)
            .attr("text-anchor","middle")
            .style("stroke", "white")
            .style("fill","white")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");

          vis.svgg.append("text")
            .attr("x", WIDTH/2)
            .attr("y", HEIGHT+50)
            .attr("text-anchor","middle")
            .style("stroke", "white")
            .style("fill","white")
            .text("Symptoms")
            .style("stroke-width", ".2px")
            .style("font", "20px sans-serif");

          vis.svgg.append("text")
            .attr("x",-(HEIGHT/2))
            .attr("y",-50)
            .attr("text-anchor","middle")
            .text("Percentage (%) of patients with symptoms")
            .attr("transform", "rotate(-90)")
            .style("stroke", "white")
            .style("fill","white")
            .style("stroke-width", ".2px")
            .style("font", "20px sans-serif");

          vis.xAxisGroup = vis.svgg.append("g")
            .attr("transform",`translate(0, ${ HEIGHT })`)

          vis.yAxisGroup = vis.svgg.append("g")
          //--------------


        d3.json(url).then(comparison=>{
            //using max function, it will loop through the data and get the highest number of y value
            const max = d3.max(comparison, d=> d.Mortality)
           
            const min = d3.min(comparison, d=> d.Mortality) *0.55

            const y = d3.scaleLinear()
                .domain([min, max]) //highest y value
                .range([HEIGHT2,0]) //minimum and maximum value 

            const x = d3.scaleBand()
                .domain(comparison.map(d => d.Name))
                .range([0,WIDTH2])  
                .padding(0.2)

            const xAxisCall = d3.axisBottom(x)
            svg.append("g")
             .attr("transform",`translate(0, ${ HEIGHT2 })`)
             .call(xAxisCall)

            const yAxisCall = d3.axisLeft(y)
            svg.append("g").call(yAxisCall)


            svg.append("text")
              .attr("x",-(HEIGHT2/2))
              .attr("y",-40)
              .attr("text-anchor","middle")
              .text("Mortality Rate (%)")
              .attr("transform","rotate(-90)")
              .style("stroke", "white")
              .style("fill","white")
              .style("stroke-width", ".4px")
              .style("font", "20px sans-serif")
              .style("pointer-events", "none");

            const rects = svg.selectAll("circle")
              .data(comparison)

            rects.enter().append("circle")
              .attr("cx", d=> x(d.Name) + (x.bandwidth() / 2))
              .attr("cy", d => y(d.Mortality))
              //.attr("width",x.bandwidth)
              //.attr("height", d => HEIGHT2 - y(d.Mortality))
              .attr("r",35)
              .attr("fill", d=>{
                  if(d.Mortality > 20){
                      return "red";
                  }
                  return "green";
              })
              .on("mouseover", function() {
                //Do something on mouseover of any bar
                d3.select(this)
                  .attr("fill", "red");
              })
              .on("mouseout", function(d) {
                d3.select(this)
                  .attr("fill", "#00315b");
              })
              .append("title")
                .text(d=>`Mortality Rate : ${d.Mortality} % in ${d.Name}`);
              

            rects.enter().append("text")
              .attr("class", "value")
              .attr("x", d=> x(d.Name)+ (x.bandwidth() / 2))
              .attr("y", d => y(d.Mortality))
              .attr("dy", ".35em") //vertical align middle
              .attr("width",x.bandwidth)
              .attr("height", d => HEIGHT2 - y(d.Mortality))
              .attr("text-anchor", "middle")
              .text(d=>d.Mortality+ " %")
              .attr("font-family" , "sans-serif")
              .attr("font-size" , "18px")
              .attr("fill" , "white")
        })//end first

        d3.json(url).then(comparison2=>{
          //using max function, it will loop through the data and get the highest number of y value
          const max2 = d3.max(comparison2, d=> d.Deaths)
          const min2 = d3.min(comparison2, d=> d.Deaths) *0.55

          const y = d3.scaleLinear()
              .domain([min2, max2]) //highest y value
              .range([HEIGHT2,0]) //minimum and maximum value 

          const x = d3.scaleBand()
              .domain(comparison2.map(d => d.Name))
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
            .text("Comparisons between the viruses were made")
            .style("stroke", "white")
            .style("fill","white")
            .style("stroke-width", ".4px")
            .style("text-decoration", "underline") 
            .style("font", "15px sans-serif");

          svg2.append("text")
            .attr("x",-(HEIGHT2/2))
            .attr("y",-45)
            .attr("text-anchor","middle")
            .text("Number of Deaths")
            .attr("transform","rotate(-90)")
            .style("stroke", "white")
            .style("fill","white")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");

          const rects2 = svg2.selectAll("rect")
          .data(comparison2)

          rects2.enter().append("circle")
            .attr("cx", d=> x(d.Name)+ (x.bandwidth() / 2))
            .attr("cy", d => y(d.Deaths))
            .attr("r",35)
            //.attr("width",x.bandwidth)
            //.attr("height", d => HEIGHT2 - y(d.Deaths))
            .attr("fill", d=>{
                if(d.Deaths > 1000){
                    return "red";
                }
                return "green";
            })
            .on("mouseover", function() {
              //Do something on mouseover of any bar
              d3.select(this)
                .attr("fill", "red");
            })
            .on("mouseout", function(d) {
              d3.select(this)
                .attr("fill", "#00315b");
            })
            .append("title")
              .text(d=>`Number of Deaths : ${d.Deaths}  in ${d.Name}`);

            rects2.enter().append("text")
              .attr("class", "value")
              .attr("x", d=> x(d.Name)+ (x.bandwidth() / 2))
              .attr("y", d => y(d.Deaths))
              .attr("dy", ".35em") //vertical align middle
              .attr("width",x.bandwidth)
              .attr("height", d => HEIGHT2 - y(d.Deaths))
              .attr("text-anchor", "middle")
              .text(d=>"No. "+d.Deaths)
              .attr("font-family" , "sans-serif")
              .attr("font-size" , "18px")
              .attr("fill" , "white")
      })//end second

      d3.json(url).then(comparison3=>{
        //using max function, it will loop through the data and get the highest number of y value
        const max3 = d3.max(comparison3, d=> d.Cases)
        const min3 = d3.min(comparison3, d=> d.Cases) *0.55

        const y = d3.scaleLinear()
            .domain([min3, max3]) //highest y value
            .range([HEIGHT2,0]) //minimum and maximum value 

        const x = d3.scaleBand()
            .domain(comparison3.map(d => d.Name))
            .range([0,WIDTH2])  
            .padding(0.2)

        const xAxisCall3 = d3.axisBottom(x)
        svg3.append("g")
         .attr("transform",`translate(0, ${ HEIGHT2 })`)
         .call(xAxisCall3)

        const yAxisCall3 = d3.axisLeft(y)
        svg3.append("g").call(yAxisCall3)


        svg3.append("text")
          .attr("x",-(HEIGHT2/2))
          .attr("y",-45)
          .attr("text-anchor","middle")
          .text("Number of Cases")
          .attr("transform","rotate(-90)")
          .style("stroke", "white")
          .style("fill","white")
          .style("stroke-width", ".4px")
          .style("font", "20px sans-serif");
          

        const rects3 = svg3.selectAll("circle")
        .data(comparison3)

        rects3.enter().append("circle")
          .attr("cx", d=> x(d.Name)+ (x.bandwidth() / 2))
          .attr("cy", d => y(d.Cases))
          .attr("r",35)
          //.attr("width",x.bandwidth)
          //.attr("height", d => HEIGHT2 - y(d.Cases))
          .attr("fill", d=>{
              if(d.Cases > 10000){
                  return "red";
              }
              return "green";
          })
          .on("mouseover", function() {
            //Do something on mouseover of any bar
            d3.select(this)
              .attr("fill", "red");
          })
          .on("mouseout", function(d) {
            d3.select(this)
              .attr("fill", "#00315b");
          })
          .append("title")
            .text(d=>`Number of Cases : ${d.Cases}  in ${d.Name}`);
          

          rects3.enter().append("text")
              .attr("class", "value")
              .attr("x", d=> x(d.Name)+ (x.bandwidth() / 2))
              .attr("y", d => y(d.Cases))
              .attr("dy", ".35em") //vertical align middle
              .attr("width",x.bandwidth)
              .attr("height", d => HEIGHT2 - y(d.Cases))
              .attr("text-anchor", "middle")
              .text(d=>"No. "+d.Cases)
              .attr("font-family" , "sans-serif")
              .attr("font-size" , "18px")
              .attr("fill" , "white")
    })//end third
    
    Promise.all([
      d3.json("https://covid19symptom-default-rtdb.firebaseio.com/Names.json"),
      d3.json("https://merssymptom-default-rtdb.firebaseio.com/Names.json"),
      d3.json("https://sarssymptom-default-rtdb.firebaseio.com/Names.json")
    ]).then((datasets)=>{

      vis.Covid19Data=datasets[0]
      vis.MersData=datasets[1]
      vis.SarsData=datasets[2]

      console.log(vis.Covid19Data)
      console.log(vis.MersData)
      console.log(vis.SarsData)
      vis.update("covid19")
      
  })
}

// This update() method gets called you change your data.
update(virus){
const vis = this;

vis.data = (virus === "covid19") ? vis.Covid19Data : (virus === "mers") ? vis.MersData : vis.SarsData;
vis.xLabel.text(`${virus} symptoms`)  
vis.xLabel2.text(`Shortness of breath was less common in COVID‐19 patients (17%),`)  
vis.xLabel3.text(`in comparison to SARS (32%) and MERS (51%). `)  
vis.xLabel4.text(`Likewise, chills were less common in COVID‐19 patients (17%), `)  
vis.xLabel5.text(`in comparison to SARS (57.5%) and MERS (41%). `) 
vis.xLabel6.text(`Therefore, these clinical symptoms should help distinguish`)  
vis.xLabel7.text(`the various coronavirus infections from each other. `) 



//using max function, it will loop through the data and get the highest number of y value.
const max = d3.max(vis.data, d=> d.Number)
const min = d3.min(vis.data, d=> d.Number) *0.95

const y = d3.scaleLinear()
    .domain([min, max]) //highest y value.
    .range([HEIGHT,0]) //minimum and maximum value .
    

// Create the scale
const x = d3.scaleBand()
    .domain(vis.data.map(d => d.Name))
    .range([0,WIDTH])  
    .padding(0.4)

const xAxisCall = d3.axisBottom(x)
  vis.xAxisGroup.transition().duration(500).call(xAxisCall)

const yAxisCall = d3.axisLeft(y)
 vis.yAxisGroup.transition().duration(500).call(yAxisCall)

// DATA JOIN
const rects = vis.svgg.selectAll("rect")
      .data(vis.data)

// EXIT
rects.exit()
  .transition().duration(500)
    .attr("height", 0)
    .attr("y", HEIGHT)
    .remove()

// UPDATE
rects.transition().duration(500)
  .attr("x", d => x(d.Name))
  .attr("y", d => y(d.Number))
  .attr("width", x.bandwidth)
  .attr("height", d => HEIGHT-y(d.Number))


// ENTER
rects.enter().append("rect")
  .attr("x", d => x(d.Name))
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
  .attr("fill", "#008B8B")
  .attr("stroke", "#D3D3D3")
  .attr("stroke-width", 3)

rects.enter().append("text")
  .attr("class", "value")
  .attr("x", d=> x(d.Name)+ (x.bandwidth() / 2))
  .attr("y", d => y(d.Number))
  .attr("dx", -5)
  .attr("dy", ".35em") //vertical align middle
  .attr("text-anchor", "middle")
  .text(d=>d.Number+ " %")
  .attr("fill" , "red")
  .style("font", "22px sans-serif");
    
  

}
}