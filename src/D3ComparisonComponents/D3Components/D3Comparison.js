import * as d3 from 'd3';
import { svg } from 'd3';

const url ="https://differentviruses-d1ee0.firebaseio.com/Comparison.json";
const MARGIN ={ TOP:10, BOTTOM:60, LEFT:70, RIGHT:10};
const WIDTH = 1050 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;


const MARGIN2 ={ TOP:10, BOTTOM:60, LEFT:60, RIGHT:10};
const WIDTH2 = 350 - MARGIN2.LEFT - MARGIN2.RIGHT;
const HEIGHT2 = 380 - MARGIN2.TOP - MARGIN2.BOTTOM;

const WIDTH3 = 500 - MARGIN2.LEFT - MARGIN2.RIGHT;
const WIDTH4 = 550 - MARGIN2.LEFT - MARGIN2.RIGHT;
const HEIGHT3 = 450 - MARGIN2.TOP - MARGIN2.BOTTOM;

const url5 ="https://symptomsseriousness.firebaseio.com/CovidSymptomSeriousness.json";  //covid19 symptoms
const url6 ="https://differentviruses.firebaseio.com/DiffViruses.json";  //different viruses comparison
const urlagerisk ="https://covid19agerisk.firebaseio.com/Covid19AgeRisk.json" //covid-19, different age range risk
const diffRaces = "https://diffraces.firebaseio.com/DiffRaces.json";

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
          .style("border", "1px gray solid;")
          .style("background-color", "#008080")
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
            .style("background-color", "#87CEEB")
            .style("font", "20px sans-serif")
            .text("COVID-19 seems not to be very different from SARS regarding its clinical features. However, it has a fatality rate of 5.6%, lower than that of SARS (9.63%) and much lower than that of MERS (34.45%). While the mortality rate among COVID‐19 patients is lower than SARS and MERS, COVID‐19 is proving to have a higher contagious potency, resulting in a higher number of deaths");
          
        d3.select(element)
          .append("div")
            .style("border", "1px lightgray solid;")
            .style("background-color", "#9ACD32")
            .style("font", "20px sans-serif")
            .text("Seriousness of Covid-19 symptoms");

              
        const svgsymptom = d3.select(element)  //covid19 symptoms
            .append("svg")
              .attr("width",WIDTH3 + MARGIN2.LEFT + MARGIN2.RIGHT)
              .attr("height",HEIGHT3 + MARGIN2.TOP + MARGIN2.BOTTOM)
            .append("g")
              .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

        const svgcovid19flu = d3.select(element)  //covid19 symptoms
            .append("svg")
              .attr("width",WIDTH3 + MARGIN2.LEFT + MARGIN2.RIGHT)
              .attr("height",HEIGHT3 + MARGIN2.TOP + MARGIN2.BOTTOM)
            .append("g")
              .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

        d3.select(element)
          .append("div")
            .style("border", "1px lightgray solid;")
            .style("background-color", "#20B2AA")
            .style("font", "20px sans-serif")
            .text("How Contagious & Deadly is it?");

        d3.select(element)
          .append("div")
            .style("border", "1px lightgray solid;")
            .style("background-color", "#20B2AA")
            .style("font", "20px sans-serif")
            .text("We don't fully know yet but it's in this range");

        d3.select(element)
          .append("div")
            .style("border", "1px lightgray solid;")
            .style("background-color", "#87CEEB")
            .style("font", "20px sans-serif")
            .text("% who die (CASE FAFALITY RATE)");

        
        const svght = d3.select(element)
            .append("svg")
              .attr("width",WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
              .attr("height",HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
            .append("g")
              .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

        d3.select(element)
            .append("div")
              .style("border", "1px lightgray solid;")
              .style("background-color", "#6B8E23")
              .style("font", "22px sans-serif")
              .text("Who is most at risk for COVID-19?");

        d3.select(element)
            .append("div")
              .style("border", "1px lightgray solid;")
              .style("background-color", "#6B8E23")
              .style("font", "22px sans-serif")
              .text("Those Aged 60+ are Most At Risk");

        d3.select(element)
            .append("div")
              .style("border", "1px lightgray solid;")
              .style("background-color", "#808000")
              .style("font", "23px sans-serif")
              .text("%of deceased");

        const svgrisk = d3.select(element)
            .append("svg")
              .attr("width",WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
              .attr("height",HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
            .append("g")
              .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

        
        d3.select(element)
            .append("div")
              .style("border", "1px lightgray solid;")
              .style("background-color", "green")
              .style("font", "23px sans-serif")
              .text("With both the SARS-CoV and MERS-CoV outbreaks, most cases occurred in the region in which it began, i.e., Asia and the Middle East, respectively. Both of these viruses spread globally, but the total caseload for each virus were under 10,000.10 Yet the global spread of COVID-19 infection is much larger, with over 3 million cases worldwide thus far. The COVID-19 virus has not affected all ethnicities and races in the same proportion. ");      

        d3.select(element)
            .append("div")
              .style("border", "1px lightgray solid;")
              .style("background-color", "#808000")
              .style("font", "23px sans-serif")
              .text("Age-adjusted Case Rate Per 100,000");

        const svgraces = d3.select(element)  //covid19 symptoms
            .append("svg")
              .attr("width",WIDTH4 + MARGIN2.LEFT + MARGIN2.RIGHT)
              .attr("height",HEIGHT3 + MARGIN2.TOP + MARGIN2.BOTTOM)
            .append("g")
              .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

        const svgraces2 = d3.select(element)  //covid19 symptoms
            .append("svg")
              .attr("width",WIDTH4 + MARGIN2.LEFT + MARGIN2.RIGHT)
              .attr("height",HEIGHT3 + MARGIN2.TOP + MARGIN2.BOTTOM)
            .append("g")
              .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

        d3.select(element)
          .append("div")
            .style("border", "1px lightgray solid;")
            .style("background-color", "#808000")
            .style("font", "23px sans-serif")
            .text("In New York City, African-Americans and other minority communities have been disproportionately affected by COVID-19. As of April 16, 2020, according to the New York City Health Department, for every 100,000 cases there have been the following rates of non-hospitalized patients: 333.5 African-American, 271.6 Hispanic, 190.4 White, and 95.1 Asian. In addition, 92.3 African-Americans and 74.3 Hispanics died per 100,000 as compared to 45.2 Whites and 34.5 Asians who died (Figure 4). Of those who were known to have died, 33.2% were African-Americans, 28.2% were Hispanics, and 30% were Whites");


          vis.xLabel = vis.svgg.append("text")
            .attr("x", WIDTH/1.8)
            .attr("y", HEIGHT-410)
            .attr("text-anchor","middle")
            .style("stroke", "#3CB371")
            .style("fill","#3CB371")
            .style("stroke-width", ".4px")
            .style("font", "35px sans-serif");

          vis.xLabel2 = vis.svgg.append("text")
            .attr("x", WIDTH/1.8)
            .attr("y", HEIGHT-380)
            .attr("text-anchor","middle")
            .style("stroke", "#191970")
            .style("fill","#191970")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");

          vis.xLabel3 = vis.svgg.append("text")
            .attr("x", WIDTH/1.8)
            .attr("y", HEIGHT-360)
            .attr("text-anchor","middle")
            .style("stroke", "#191970")
            .style("fill","#191970")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");

          vis.xLabel4 = vis.svgg.append("text")
            .attr("x", WIDTH/1.8)
            .attr("y", HEIGHT-340)
            .attr("text-anchor","middle")
            .style("stroke", "#191970")
            .style("fill","#191970")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");

          vis.xLabel5 = vis.svgg.append("text")
            .attr("x", WIDTH/1.8)
            .attr("y", HEIGHT-320)
            .attr("text-anchor","middle")
            .style("stroke", "#191970")
            .style("fill","#191970")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");

          vis.xLabel6 = vis.svgg.append("text")
            .attr("x", WIDTH/1.8)
            .attr("y", HEIGHT-300)
            .attr("text-anchor","middle")
            .style("stroke", "#191970")
            .style("fill","#191970")
            .style("stroke-width", ".4px")
            .style("font", "20px sans-serif");

          vis.xLabel7 = vis.svgg.append("text")
            .attr("x", WIDTH/1.8)
            .attr("y", HEIGHT-280)
            .attr("text-anchor","middle")
            .style("stroke", "#191970")
            .style("fill","#191970")
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
            .style("stroke", "black")
            .style("fill","black")
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
              .style("stroke", "black")
              .style("fill","black")
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
              .attr("fill" , "black")
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
            .style("stroke", "black")
            .style("fill","black")
            .style("stroke-width", ".4px")
            .style("text-decoration", "underline") 
            .style("font", "15px sans-serif");

          svg2.append("text")
            .attr("x",-(HEIGHT2/2))
            .attr("y",-45)
            .attr("text-anchor","middle")
            .text("Number of Deaths")
            .attr("transform","rotate(-90)")
            .style("stroke", "black")
            .style("fill","black")
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
              .attr("fill" , "black")
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
          .style("stroke", "black")
          .style("fill","black")
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
              .attr("fill" , "black")
    })//end third
    
    d3.json(url5).then(symptoms=>{
      //using max function, it will loop through the data and get the highest number of y value
      const max = d3.max(symptoms, d=> d.HowSerious)
     
      const min = d3.min(symptoms, d=> d.HowSerious) *0.55

      const y = d3.scaleLinear()
          .domain([min, max]) //highest y value
          .range([HEIGHT3,0]) //minimum and maximum value 

      const x = d3.scaleBand()
          .domain(symptoms.map(d => d.Seriousness))
          .range([0,WIDTH3])  
          .padding(0.2)

      const xAxisCall = d3.axisBottom(x)
      svgsymptom.append("g")
       .attr("transform",`translate(0, ${ HEIGHT3 })`)
       .call(xAxisCall)
       .style("fill","gold")
       .style("font", "17px sans-serif")
       .style("text-anchor", "middle");

      svgsymptom.append("text")
       .attr("x", WIDTH/3.2)
       .attr("y", HEIGHT - 290)
       .attr("text-anchor","middle")
       .text("The Majority of infections are Mild")
       .style("stroke", "green")
       .style("fill","green")
       .style("stroke-width", ".4px")
       .style("font", "17px sans-serif");

      const rects = svgsymptom.selectAll("rect")
        .data(symptoms)

      rects.enter().append("rect")
        .attr("x", d=> x(d.Seriousness))
        .attr("y", d => y(d.HowSerious))
        .attr("width",x.bandwidth)
        .attr("height", d => HEIGHT3 - y(d.HowSerious))
        .attr("fill", d=>{
            if(d.HowSerious > 80){
                return "#4169E1";
            }
            return "#FF4500";
        })
        .append("title")
          .text(d=>`Mortality Rate : ${d.HowSerious} % in ${d.Seriousness}`);
        

      rects.enter().append("text")
        .attr("class", "value")
        .attr("x", d=> x(d.Seriousness)+ (x.bandwidth() / 2))
        .attr("y", d => y(d.HowSerious))
        .attr("dy", ".35em") //vertical align middle
        .attr("width",x.bandwidth)
        .attr("height", d => HEIGHT3 - y(d.HowSerious))
        .attr("text-anchor", "middle")
        .text(d=>d.HowSerious+ " %")
        .attr("font-family" , "sans-serif")
        .attr("font-size" , "22px")
        .attr("fill" , "#000080")
      
      svgsymptom.append("text")
        .attr("x", WIDTH2/3.5)
        .attr("y", HEIGHT2 - 50)
        .attr("text-anchor","middle")
        .text("Like flu, stay at home")
        .style("fill","#FF4500")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

      svgsymptom.append("text")
        .attr("x", WIDTH2/1.4)
        .attr("y", HEIGHT2 - 20)
        .attr("text-anchor","middle")
        .text("Hospitalization")
        .style("fill","#6A5ACD")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

      svgsymptom.append("text")
        .attr("x", WIDTH2/0.86)
        .attr("y", HEIGHT2 )
        .attr("text-anchor","middle")
        .text("Intensive care")
        .style("fill","#6A5ACD")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");
  })//end covid19 symptoms

  d3.json(url5).then(symptoms=>{

     svgcovid19flu.append("text")
     .attr("x", WIDTH/4.9)
     .attr("y", HEIGHT - 400)
     .attr("text-anchor","middle")
     .text("What is the difference between Influenza (Flu) and COVID-19?")
     .style("stroke", "#191970")
     .style("fill","#191970")
     .style("stroke-width", ".4px")
     .style("font", "17px sans-serif");

     svgcovid19flu.append("text")
     .attr("x", WIDTH/4.9)
     .attr("y", HEIGHT - 370)
     .attr("text-anchor","middle")
     .text("Influenza (Flu) and COVID-19 are both contagious respiratory illnesses,")
     .style("stroke", "black")
     .style("fill","black")
     .style("stroke-width", ".4px")
     .style("font", "15px sans-serif");

     svgcovid19flu.append("text")
     .attr("x", WIDTH/4.9)
     .attr("y", HEIGHT - 350)
     .attr("text-anchor","middle")
     .text("but they are caused by different viruses.")
     .style("stroke", "black")
     .style("fill","black")
     .style("stroke-width", ".4px")
     .style("font", "16px sans-serif");

     svgcovid19flu.append("text")
     .attr("x", WIDTH/4.9)
     .attr("y", HEIGHT - 330)
     .attr("text-anchor","middle")
     .text("COVID-19 is caused by infection with a new coronavirus (called SARS-CoV-2),")
     .style("stroke", "black")
     .style("fill","black")
     .style("stroke-width", ".4px")
     .style("font", "13px sans-serif");

     svgcovid19flu.append("text")
     .attr("x", WIDTH/4.9)
     .attr("y", HEIGHT - 310)
     .attr("text-anchor","middle")
     .text("and flu is caused by infection with influenza viruses.")
     .style("stroke", "black")
     .style("fill","black")
     .style("stroke-width", ".4px")
     .style("font", "16px sans-serif");

     svgcovid19flu.append("text")
     .attr("x", WIDTH/4.9)
     .attr("y", HEIGHT - 260)
     .attr("text-anchor","middle")
     .text("How long someone can spread the virus")
     .style("stroke", "#4169E1")
     .style("fill","#4169E1")
     .style("stroke-width", ".4px")
     .style("font", "19px sans-serif");

     svgcovid19flu.append("text")
     .attr("x", WIDTH/4.9)
     .attr("y", HEIGHT - 220)
     .attr("text-anchor","middle")
     .text("Similarities:")
     .style("fill","#FF6347")
     .style("stroke-width", ".4px")
     .style("font", "18px sans-serif");

     svgcovid19flu.append("text")
     .attr("x", WIDTH/4.9)
     .attr("y", HEIGHT - 200)
     .attr("text-anchor","middle")
     .text("For both COVID-19 and flu, it’s possible to spread the virus for at least 1 day ")
     .style("stroke", "black")
     .style("fill","black")
     .style("stroke-width", ".4px")
     .style("font", "15px sans-serif");

     svgcovid19flu.append("text")
     .attr("x", WIDTH/4.9)
     .attr("y", HEIGHT - 180)
     .attr("text-anchor","middle")
     .text("before experiencing any symptoms.")
     .style("stroke", "black")
     .style("fill","black")
     .style("stroke-width", ".4px")
     .style("font", "15px sans-serif");
     

     svgcovid19flu.append("text")
     .attr("x", WIDTH/4.9)
     .attr("y", HEIGHT - 150)
     .attr("text-anchor","middle")
     .text("Differences:")
     .style("fill","#FF6347")
     .style("stroke-width", ".4px")
     .style("font", "18px sans-serif");

     svgcovid19flu.append("text")
     .attr("x", WIDTH/4.9)
     .attr("y", HEIGHT - 130)
     .attr("text-anchor","middle")
     .text("If a person has COVID-19, ")
     .style("stroke", "black")
     .style("fill","black")
     .style("stroke-width", ".4px")
     .style("font", "15px sans-serif");

     svgcovid19flu.append("text")
     .attr("x", WIDTH/4.9)
     .attr("y", HEIGHT - 110)
     .attr("text-anchor","middle")
     .text("they may be contagious for a longer period of time ")
     .style("stroke", "black")
     .style("fill","black")
     .style("stroke-width", ".4px")
     .style("font", "15px sans-serif");

     svgcovid19flu.append("text")
     .attr("x", WIDTH/4.9)
     .attr("y", HEIGHT - 90)
     .attr("text-anchor","middle")
     .text("than if they had flu. ")
     .style("stroke", "black")
     .style("fill","black")
     .style("stroke-width", ".4px")
     .style("font", "15px sans-serif");
      
    
})//end - explain how different between flu and covid-19

  d3.json(url6).then(diffViruses=>{
    //using max function, it will loop through the data and get the highest number of y value
    const max3 = d3.max(diffViruses, d=> d.fatalityRate)
    const min3 = d3.min(diffViruses, d=> d.fatalityRate) *0.55

    const y = d3.scaleLinear()
        .domain([min3, max3]) //highest y value
        .range([HEIGHT,0]) //minimum and maximum value 

    const x = d3.scaleBand()
        .domain(diffViruses.map(d => d.virus))
        .range([0,WIDTH])  
        .padding(0.2)

    const xAxisCall4 = d3.axisBottom(x)
    svght.append("g")
     .attr("transform",`translate(0, ${ HEIGHT })`)
     .call(xAxisCall4)

    const yAxisCall4 = d3.axisLeft(y)
    svght.append("g").call(yAxisCall4)
      
    svght.append("text")
        .attr("x", WIDTH/1.5)
        .attr("y", HEIGHT - 320)
        .attr("text-anchor","middle")
        .text("The case fatality rate (CFR) only shows the")
        .style("stroke", "black")
        .style("fill","black")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

    svght.append("text")
        .attr("x", WIDTH/1.5)
        .attr("y", HEIGHT - 290)
        .attr("text-anchor","middle")
        .text("% of confirmed cases who have died")
        .style("stroke", "black")
        .style("fill","black")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

    svght.append("text")
        .attr("x", WIDTH/1.5)
        .attr("y", HEIGHT - 250)
        .attr("text-anchor","middle")
        .text("CFR is unreliable during a pandamic")
        .style("stroke", "red")
        .style("fill","red")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

    const rects4 = svght.selectAll("circle")
    .data(diffViruses)

    rects4.enter().append("circle")
      .attr("cx", d=> x(d.virus)+ (x.bandwidth() / 2))
      .attr("cy", d => y(d.fatalityRate))
      .attr("r",10)
      .attr("fill", "#2E8B57")
      .append("title")
        .text(d=>`fatality Rate : ${d.fatalityRate}  in ${d.virus}`);
      

    rects4.enter().append("text")
          .attr("class", "value")
          .attr("x", d=> x(d.virus)+ (x.bandwidth() / 2))
          .attr("y", d => y(d.fatalityRate)+ (x.bandwidth() / 2))
          .attr("dy", ".35em") //vertical align middle
          .attr("width",x.bandwidth)
          .attr("height", d => HEIGHT - y(d.fatalityRate))
          .attr("text-anchor", "middle")
          .text(d=>d.virus)
          .attr("font-family" , "sans-serif")
          .attr("font-size" , "14px")
          .attr("fill" , "#C71585")
})//comparisons of different viruses

d3.json(urlagerisk).then(age=>{
  //using max function, it will loop through the data and get the highest number of y value
  const max = d3.max(age, d=> d.PercentOfdeceased)
 
  const min = d3.min(age, d=> d.PercentOfdeceased) *0.55

  const y = d3.scaleLinear()
      .domain([min, max]) //highest y value
      .range([HEIGHT,0]) //minimum and maximum value 

  const x = d3.scaleBand()
      .domain(age.map(d => d.AgeRange))
      .range([0,WIDTH])  
      .padding(0.2)

  const xAxisCall = d3.axisBottom(x)
  svgrisk.append("g")
   .attr("transform",`translate(0, ${ HEIGHT })`)
   .call(xAxisCall)
   .style("fill","#C71585")
   .style("font", "17px sans-serif")
   .style("text-anchor", "middle");

   svgrisk.append("text")
   .attr("x", WIDTH/3.2)
   .attr("y", HEIGHT - 290)
   .attr("text-anchor","middle")
   .text("COVID-19 is often more severe in people 60+yrs or with health conditions")
   .style("stroke", "#800000")
   .style("fill","#800000")
   .style("stroke-width", ".4px")
   .style("font", "20px sans-serif");

   svgrisk.append("text")
   .attr("x", WIDTH/3.2)
   .attr("y", HEIGHT - 270)
   .attr("text-anchor","middle")
   .text("like lung or heart disease, diabetes or conditions that affect their immune system.​")
   .style("stroke", "#800000")
   .style("fill","#800000")
   .style("stroke-width", ".4px")
   .style("font", "20px sans-serif");

  const rects = svgrisk.selectAll("rect")
    .data(age)

  rects.enter().append("rect")
    .attr("x", d=> x(d.AgeRange))
    .attr("y", d => y(d.PercentOfdeceased))
    .attr("width",x.bandwidth)
    .attr("height", d => HEIGHT - y(d.PercentOfdeceased))
    .attr("fill", d=>{
        if(d.PercentOfdeceased > 9){
            return "#FF4500";
        }
        return "#008080";
    })
    .append("title")
      .text(d=>`Mortality Rate : ${d.PercentOfdeceased} % in ${d.AgeRange}`);
    

  rects.enter().append("text")
    .attr("class", "value")
    .attr("x", d=> x(d.AgeRange)+ (x.bandwidth() / 2))
    .attr("y", d => y(d.PercentOfdeceased))
    .attr("dy", ".35em") //vertical align middle
    .attr("width",x.bandwidth)
    .attr("height", d => HEIGHT - y(d.PercentOfdeceased))
    .attr("text-anchor", "middle")
    .text(d=>d.PercentOfdeceased+ " %")
    .attr("font-family" , "sans-serif")
    .attr("font-size" , "22px")
    .attr("fill" , "black")
  
})//end - Most at Risk

//Start -- Different races
d3.json(diffRaces).then(race=>{
  //using max function, it will loop through the data and get the highest number of y value
  const max = d3.max(race, d=> d.Cases)
 
  const min = d3.min(race, d=> d.Cases) *0.55

  const y = d3.scaleLinear()
      .domain([min, max]) //highest y value
      .range([HEIGHT3,0]) //minimum and maximum value 

  const x = d3.scaleBand()
      .domain(race.map(d => d.Races))
      .range([0,WIDTH4])  
      .padding(0.2)

  const xAxisCall = d3.axisBottom(x)
  svgraces.append("g")
   .attr("transform",`translate(0, ${ HEIGHT3 })`)
   .call(xAxisCall)
   .style("fill","black")

   .selectAll("text")
      .attr("y", 0)
      .attr("x", 9)
      .attr("dy", ".45em")
      .attr("transform", "rotate(20)")
      .style("fill","black")
      .style("font", "15px sans-serif")
      .style("text-anchor", "start");

  const yAxisCall = d3.axisLeft(y)
    svgraces.append("g").call(yAxisCall)

  const rects = svgraces.selectAll("rect")
    .data(race)

  svgraces.append("text")
    .attr("x", WIDTH/3.2)
    .attr("y", HEIGHT - 400)
    .attr("text-anchor","middle")
    .text("Non-Hospitalized Patients")
    .style("stroke", "#800000")
    .style("fill","#800000")
    .style("stroke-width", ".4px")
    .style("font", "20px sans-serif");

  rects.enter().append("rect")
    .attr("x", d=> x(d.Races))
    .attr("y", d => y(d.Cases))
    .attr("width",x.bandwidth)
    .attr("height", d => HEIGHT3 - y(d.Cases))
    .attr("fill", d=>{
        if(d.Cases > 300){
            return "#DAA520";
        }else if(d.Cases > 270){
          return "#008000";
        }else if(d.Cases > 190){
          return "#D2691E";
        }else{
          return "#1E90FF";
        }
    })
    .append("title")
      .text(d=>`Cases : ${d.Cases} % in ${d.Races}`);
    

  rects.enter().append("text")
    .attr("class", "value")
    .attr("x", d=> x(d.Races)+ (x.bandwidth() / 2))
    .attr("y", d => y(d.Cases))
    .attr("dy", ".35em") //vertical align middle
    .attr("width",x.bandwidth)
    .attr("height", d => HEIGHT - y(d.Cases))
    .attr("text-anchor", "middle")
    .text(d=>d.Cases+ " %")
    .attr("font-family" , "sans-serif")
    .attr("font-size" , "22px")
    .attr("fill" , "black")
  
})//end - Races

//Start -- Different races2
d3.json(diffRaces).then(race2=>{
  //using max function, it will loop through the data and get the highest number of y value
  const max = d3.max(race2, d=> d.Death)
 
  const min = d3.min(race2, d=> d.Death) *0.55

  const y = d3.scaleLinear()
      .domain([min, max]) //highest y value
      .range([HEIGHT3,0]) //minimum and maximum value 

  const x = d3.scaleBand()
      .domain(race2.map(d => d.Races))
      .range([0,WIDTH4])  
      .padding(0.2)

  const xAxisCall = d3.axisBottom(x)
  svgraces2.append("g")
   .attr("transform",`translate(0, ${ HEIGHT3 })`)
   .call(xAxisCall)
   .style("fill","black")

  .selectAll("text")
   .attr("y", 0)
   .attr("x", 9)
   .attr("dy", ".45em")
   .attr("transform", "rotate(20)")
   .style("fill","black")
   .style("font", "15px sans-serif")
   .style("text-anchor", "start");

  const yAxisCall = d3.axisLeft(y)
  svgraces2.append("g").call(yAxisCall)


  const rects = svgraces2.selectAll("rect")
    .data(race2)

  
  svgraces2.append("text")
    .attr("x", WIDTH/3.2)
    .attr("y", HEIGHT - 400)
    .attr("text-anchor","middle")
    .text("Patient Deaths")
    .style("stroke", "#800000")
    .style("fill","#800000")
    .style("stroke-width", ".4px")
    .style("font", "20px sans-serif");

  rects.enter().append("rect")
    .attr("x", d=> x(d.Races))
    .attr("y", d => y(d.Death))
    .attr("width",x.bandwidth)
    .attr("height", d => HEIGHT3 - y(d.Death))
    .attr("fill", d=>{
      if(d.Death > 90){
          return "#DAA520";
      }else if(d.Death > 70){
        return "#008000";
      }else if(d.Death > 40){
        return "#D2691E";
      }else{
        return "#1E90FF";
      }
  })
    .append("title")
      .text(d=>`Mortality Rate : ${d.Death} % in ${d.Races}`);
    

  rects.enter().append("text")
    .attr("class", "value")
    .attr("x", d=> x(d.Races)+ (x.bandwidth() / 2))
    .attr("y", d => y(d.Death))
    .attr("dy", ".35em") //vertical align middle
    .attr("width",x.bandwidth)
    .attr("height", d => HEIGHT - y(d.Death))
    .attr("text-anchor", "middle")
    .text(d=>d.Death+ " %")
    .attr("font-family" , "sans-serif")
    .attr("font-size" , "22px")
    .attr("fill" , "black")
  
})//end - Races2

    Promise.all([
      d3.json("https://covid19symptoms.firebaseio.com/Covid19Symptoms.json"),
      d3.json("https://merssymptoms.firebaseio.com/MersSymptoms.json"),
      d3.json("https://sarssymptoms.firebaseio.com/SarsSymptoms.json")
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