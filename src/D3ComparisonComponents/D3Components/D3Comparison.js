/**
 * @author Jina Kim
 *
 * Javascript codes for D3 graphs (Mers, Sars, Covid-19) - Interactive bar chart line graphs, scatter plots
 */

import * as d3 from 'd3';

const url = "https://differentviruses-d1ee0.firebaseio.com/Comparison.json";
const MARGIN = { TOP: 10, BOTTOM: 60, LEFT: 70, RIGHT: 10 };
const WIDTH = 1050 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;


const MARGIN2 = { TOP: 10, BOTTOM: 60, LEFT: 60, RIGHT: 10 };
const WIDTH2 = 370 - MARGIN2.LEFT - MARGIN2.RIGHT;
const HEIGHT2 = 380 - MARGIN2.TOP - MARGIN2.BOTTOM;
const HEIGHT3 = 450 - MARGIN2.TOP - MARGIN2.BOTTOM;

/********
 * Data *
 ********/

const url5 = "https://symptomsseriousness.firebaseio.com/CovidSymptomSeriousness.json";  //covid19 symptoms
const url6 = "https://differentviruses.firebaseio.com/DiffViruses.json";  //different viruses comparison
const urlagerisk = "https://covid19agerisk.firebaseio.com/Covid19AgeRisk.json" //covid-19, different age range risk

// References
// https://blog.logrocket.com/using-d3-js-v6-with-react/
// https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/
// https://www.udemy.com/course/d3-react/
// https://betterprogramming.pub/react-d3-plotting-a-line-chart-with-tooltips-ed41a4c31f4f
// https://www.d3-graph-gallery.com/graph/custom_color.html
// https://www.tutorialsteacher.com/d3js/create-bar-chart-using-d3js
// http://www.d3noob.org/2016/11/change-line-chart-into-scatter-plot-in.html //Change a line chart into a scatter plot in d3.js 
// https://www.d3-graph-gallery.com/graph/line_select.html

export default class D3Comparison {
  constructor(element) {

    const vis = this;

    // Appending SVG canvas and moving into the center of the screen according to the D3 margin convension.
    vis.svgg = d3.select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

    vis.svgg.append("text")
      .attr("x", -(HEIGHT / 2))
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .text("Percentage (%) of patients with symptoms")
      .attr("transform", "rotate(-90)")
      .style("stroke", "black")
      .style("fill", "black")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "black")
          .style("font", "20px sans-serif")
      })
      .style("stroke-width", ".2px")
      .style("font", "20px sans-serif");

    vis.xLabel = vis.svgg.append("text")
      .attr("x", WIDTH / 1.8)
      .attr("y", HEIGHT - 410)
      .attr("text-anchor", "middle")
      .style("stroke", "#3CB371")
      .style("fill", "#3CB371")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "40px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "black")
          .style("font", "30px sans-serif")
      })
      .style("stroke-width", ".4px")
      .style("font", "30px sans-serif");

    vis.xLabel2 = vis.svgg.append("text")
      .attr("x", WIDTH / 1.8)
      .attr("y", HEIGHT - 380)
      .attr("text-anchor", "middle")
      .style("stroke", "#191970")
      .style("fill", "#191970")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "#3CB371")
          .style("font", "20px sans-serif")
      })
      .style("stroke-width", ".4px")
      .style("font", "20px sans-serif");


    vis.xLabel3 = vis.svgg.append("text")
      .attr("x", WIDTH / 1.8)
      .attr("y", HEIGHT - 360)
      .attr("text-anchor", "middle")
      .style("stroke", "#191970")
      .style("fill", "#191970")
      .style("stroke-width", ".4px")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "#3CB371")
          .style("font", "20px sans-serif")
      })
      .style("font", "20px sans-serif");

    vis.xLabel4 = vis.svgg.append("text")
      .attr("x", WIDTH / 1.8)
      .attr("y", HEIGHT - 340)
      .attr("text-anchor", "middle")
      .style("stroke", "#191970")
      .style("fill", "#191970")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "#3CB371")
          .style("font", "20px sans-serif")
      })
      .style("stroke-width", ".4px")
      .style("font", "20px sans-serif");

    vis.xLabel5 = vis.svgg.append("text")
      .attr("x", WIDTH / 1.8)
      .attr("y", HEIGHT - 320)
      .attr("text-anchor", "middle")
      .style("stroke", "#191970")
      .style("fill", "#191970")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "#3CB371")
          .style("font", "20px sans-serif")
      })
      .style("stroke-width", ".4px")
      .style("font", "20px sans-serif");


    vis.xLabel6 = vis.svgg.append("text")
      .attr("x", WIDTH / 1.8)
      .attr("y", HEIGHT - 300)
      .attr("text-anchor", "middle")
      .style("stroke", "#191970")
      .style("fill", "#191970")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "#3CB371")
          .style("font", "20px sans-serif")
      })
      .style("stroke-width", ".4px")
      .style("font", "20px sans-serif");


    vis.xLabel7 = vis.svgg.append("text")
      .attr("x", WIDTH / 1.8)
      .attr("y", HEIGHT - 280)
      .attr("text-anchor", "middle")
      .style("stroke", "#191970")
      .style("fill", "#191970")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "#3CB371")
          .style("font", "20px sans-serif")
      })
      .style("stroke-width", ".4px")
      .style("font", "20px sans-serif");


    vis.svgg.append("text")
      .attr("x", WIDTH / 2)
      .attr("y", HEIGHT - 280)
      .attr("text-anchor", "middle")
      .style("stroke", "#3CB371")
      .style("fill", "#3CB371")
      .style("stroke-width", ".4px")
      .style("font", "20px sans-serif");

    vis.svgg.append("text")
      .attr("x", WIDTH / 2)
      .attr("y", HEIGHT + 50)
      .attr("text-anchor", "middle")
      .style("stroke", "black")
      .style("fill", "black")
      .text("Symptoms")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "black")
          .style("font", "20px sans-serif")
      })
      .style("stroke-width", ".2px")
      .style("font", "20px sans-serif");

    vis.xAxisGroup = vis.svgg.append("g")
      .attr("transform", `translate(0, ${HEIGHT})`)

    vis.yAxisGroup = vis.svgg.append("g")


    d3.select(element)
      .append("div")
      .style("border", "1px gray solid;")
      .style("background-color", "#DCDCDC")
      .style("font", "20px sans-serif")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "black")
          .style("font", "20px sans-serif")
      })
      .text("This is preliminary COVID-19 data. While SARS and MERS' mortality rates are well understood, the definition of COVID-19 diagnoses is still shifting and it may be years until the actual number of cases is known.");


    const svg = d3.select(element)
      .append("svg")
      .attr("width", WIDTH2 + MARGIN2.LEFT + MARGIN2.RIGHT)
      .attr("height", HEIGHT2 + MARGIN2.TOP + MARGIN2.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

    const svg2 = d3.select(element)
      .append("svg")
      .attr("width", WIDTH2 + MARGIN2.LEFT + MARGIN2.RIGHT)
      .attr("height", HEIGHT2 + MARGIN2.TOP + MARGIN2.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

    const svg3 = d3.select(element)
      .append("svg")
      .attr("width", WIDTH2 + MARGIN2.LEFT + MARGIN2.RIGHT)
      .attr("height", HEIGHT2 + MARGIN2.TOP + MARGIN2.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

    d3.select(element)
      .append("div")
      .style("border", "1px lightgray solid;")
      .style("background-color", "#DCDCDC")
      .style("font", "20px sans-serif")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "black")
          .style("font", "20px sans-serif")
      })
     
    d3.select(element)
      .append("div")
      .style("border", "1px lightgray solid;")
      .style("background-color", "grey")
      .style("font", "20px sans-serif")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "black")
          .style("font", "20px sans-serif")
      })
      .text("Seriousness of Covid-19 symptoms");


    const svgsymptom = d3.select(element)  //covid19 symptoms
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

    d3.select(element)
      .append("div")
      .style("border", "1px lightgray solid;")
      .style("background-color", "#DCDCDC")
      .style("font", "20px sans-serif")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "black")
          .style("font", "20px sans-serif")
      })
      .text("How Contagious & Deadly is it?");

    d3.select(element)
      .append("div")
      .style("border", "1px lightgray solid;")
      .style("background-color", "grey")
      .style("font", "20px sans-serif")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "black")
          .style("font", "20px sans-serif")
      })
      .text("% who die (CASE FAFALITY RATE)");


    const svght = d3.select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

    d3.select(element)
      .append("div")
      .style("border", "1px lightgray solid;")
      .style("background-color", "#DCDCDC")
      .style("font", "22px sans-serif")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "black")
          .style("font", "20px sans-serif")
      })
      .text("Who is most at risk for COVID-19?");

    d3.select(element)
      .append("div")
      .style("border", "1px lightgray solid;")
      .style("background-color", "#DCDCDC")
      .style("font", "22px sans-serif")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "black")
          .style("font", "20px sans-serif")
      })
      .text("Those Aged 60+ are Most At Risk");

    d3.select(element)
      .append("div")
      .style("border", "1px lightgray solid;")
      .style("background-color", "grey")
      .style("font", "23px sans-serif")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "black")
          .style("font", "20px sans-serif")
      })
      .text("%of deceased");

    const svgrisk = d3.select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)


    d3.select(element)
      .append("div")
      .style("border", "1px lightgray solid;")
      .style("background-color", "lightgrey")
      .style("font", "20px sans-serif")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "black")
          .style("font", "20px sans-serif")
      })
    

    d3.select(element)
      .append("div")
      .style("border", "1px lightgray solid;")
      .style("background-color", "#DCDCDC")
      .style("font", "20px sans-serif")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "22px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "#3CB371")
          .style("fill", "black")
          .style("font", "20px sans-serif")
      })

    d3.json(url).then(comparison => {
      //using max function, it will loop through the data and get the highest number of y value
      const max = d3.max(comparison, d => d.Mortality)

      const min = d3.min(comparison, d => d.Mortality) * 0.55

      const y = d3.scaleLinear()
        .domain([min, max]) //highest y value
        .range([HEIGHT2, 0]) //minimum and maximum value 

      const x = d3.scaleBand()
        .domain(comparison.map(d => d.Name))
        .range([0, WIDTH2])
        .padding(0.2)

      const xAxisCall = d3.axisBottom(x)
      svg.append("g")
        .attr("transform", `translate(0, ${HEIGHT2})`)
        .call(xAxisCall)
        .style("fill", "grey")

      const yAxisCall = d3.axisLeft(y)
      svg.append("g").call(yAxisCall)
        .style("fill", "grey")

      svg.append('g')
        .attr('class', 'grid')
        .attr('transform', `translate(0, ${HEIGHT2})`)
        .call(d3.axisBottom()
          .scale(x)
          .tickSize(-HEIGHT2, 0, 0)
          .tickFormat(''))

      svg.append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft()
          .scale(y)
          .tickSize(-WIDTH2, 0, 0)
          .tickFormat(''))

      svg.append("text")
        .attr("x", WIDTH / 7)
        .attr("y", HEIGHT - 290)
        .attr("text-anchor", "middle")
        //.text("Mouse over!")
        .style("stroke", "black")
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");


      svg.append("text")
        .attr("x", -(HEIGHT3 / 2))
        .attr("y", -40)
        .attr("text-anchor", "middle")
        .text("Motality Rate (%)")
        .attr("transform", "rotate(-90)")
        .style("stroke", "black")
        .style("fill", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "19px sans-serif")
            .style("stroke", "#008080")
            .style("fill", "#008080")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("stroke", "#3CB371")
            .style("fill", "black")
            .style("font", "20px sans-serif")
        })
        .style("stroke-width", ".2px")
        .style("font", "20px sans-serif");

      const rects = svg.selectAll("circle")
        .data(comparison)

      rects.enter().append("circle")
        .attr("cx", d => x(d.Name) + (x.bandwidth() / 2))
        .attr("cy", d => y(d.Mortality))
        .attr("r", 35)
        .style("stroke", "lightblue")
        .style("opacity", "2")
        .style("stroke-width", "5")
        .attr("fill", d => {
          if (d.Mortality > 20) {
            return "#A52A2A";
          }
          return "#4bc0c0";
        })
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("stroke", "lightblue")
            .style("opacity", "2")
            .style("stroke-width", "10")
            .attr("r", 70)
            .attr("fill", d => {
              if (d.Mortality > 20) {
                return "#A52A2A";
              }
              return "#4bc0c0";
            })
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("r", 35)
            .attr("fill", d => {
              if (d.Mortality > 20) {
                return "#A52A2A";
              }
              return "#4bc0c0";
            })
        })
        .append("title")
        .style('fill', 'darkOrange')

        .text(d => `Mortality Rate (%): \n${d.Mortality} %\nin ${d.Name} virus`);


      rects.enter().append("text")
        .attr("class", "value")
        .attr("x", d => x(d.Name) + (x.bandwidth() / 2))
        .attr("y", d => y(d.Mortality))
        .attr("dy", ".35em") //vertical align middle
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT2 - y(d.Mortality))
        .attr("text-anchor", "middle")
        .text(d => d.Mortality + " %")
        .attr("font-family", "sans-serif")
        .attr("font-size", "18px")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "28px sans-serif")
            .style("stroke", "black")
            .style("fill", "black")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "18px sans-serif")
            .style("fill", "blue")
            .style("stroke", "none")
        })
        .attr("fill", "blue")
    })//end first

    d3.json(url).then(comparison2 => {
      //using max function, it will loop through the data and get the highest number of y value
      const max2 = d3.max(comparison2, d => d.Deaths)
      const min2 = d3.min(comparison2, d => d.Deaths) * 0.55

      const y = d3.scaleLinear()
        .domain([min2, max2]) //highest y value
        .range([HEIGHT2, 0]) //minimum and maximum value 

      const x = d3.scaleBand()
        .domain(comparison2.map(d => d.Name))
        .range([0, WIDTH2])
        .padding(0.2)

      svg2.append('g')
        .attr('class', 'grid')
        .attr('transform', `translate(0, ${HEIGHT2})`)
        .call(d3.axisBottom()
          .scale(x)
          .tickSize(-HEIGHT2, 0, 0)
          .tickFormat(''))

      svg2.append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft()
          .scale(y)
          .tickSize(-WIDTH2, 0, 0)
          .tickFormat(''))

      const xAxisCall2 = d3.axisBottom(x)
      svg2.append("g")
        .attr("transform", `translate(0, ${HEIGHT2})`)
        .call(xAxisCall2)
        .style("fill", "grey")

      const yAxisCall2 = d3.axisLeft(y)
      svg2.append("g").call(yAxisCall2)
        .style("fill", "grey")

      svg2.append("text")
        .attr("x", WIDTH / 7)
        .attr("y", HEIGHT - 290)
        .attr("text-anchor", "middle")
        //.text("Mouse over!")
        .style("stroke", "black")
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");


      svg2.append("text")
        .attr("x", WIDTH2 / 2)
        .attr("y", HEIGHT2 + 50)
        .attr("text-anchor", "middle")
        .text("Comparisons between the viruses were made")
        .style("stroke", "black")
        .style("fill", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "#008080")
            .style("fill", "#008080")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("stroke", "#3CB371")
            .style("fill", "black")
            .style("font", "15px sans-serif")
        })
        .style("stroke-width", ".4px")
        .style("text-decoration", "underline")
        .style("font", "15px sans-serif");

      svg2.append("text")
        .attr("x", -(HEIGHT2 / 2))
        .attr("y", -45)
        .attr("text-anchor", "middle")
        .text("Number of Deaths")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "22px sans-serif")
            .style("stroke", "#008080")
            .style("fill", "#008080")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("stroke", "black")
            .style("fill", "black")
            .style("font", "20px sans-serif")
        })
        .attr("transform", "rotate(-90)")
        .style("stroke", "black")
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "20px sans-serif");

      const rects2 = svg2.selectAll("rect")
        .data(comparison2)

      rects2.enter().append("circle")
        .attr("cx", d => x(d.Name) + (x.bandwidth() / 2))
        .attr("cy", d => y(d.Deaths))
        .attr("r", 35)
        //.attr("width",x.bandwidth)
        //.attr("height", d => HEIGHT2 - y(d.Deaths))
        .style("stroke", "lightblue")
        .style("opacity", "2")
        .style("stroke-width", "5")
        .attr("fill", d => {
          if (d.Deaths > 1000) {
            return "#A52A2A";
          }
          return "#4bc0c0";
        })
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("stroke", "lightblue")
            .style("opacity", "2")
            .style("stroke-width", "10")
            .attr("r", 70)
            .attr("fill", d => {
              if (d.Deaths > 1000) {
                return "#A52A2A";
              }
              return "#4bc0c0";
            })
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("r", 35)
            .attr("fill", d => {
              if (d.Deaths > 1000) {
                return "#A52A2A";
              }
              return "#4bc0c0";
            })
        })
        .append("title")
        .text(d => `Number of Deaths :\nNo. ${d.Deaths}\nin ${d.Name} virus`);

      rects2.enter().append("text")
        .attr("class", "value")
        .attr("x", d => x(d.Name) + (x.bandwidth() / 2))
        .attr("y", d => y(d.Deaths))
        .attr("dy", ".35em") //vertical align middle
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT2 - y(d.Deaths))
        .attr("text-anchor", "middle")
        .text(d => "No. " + d.Deaths)
        .attr("font-family", "sans-serif")
        .attr("font-size", "18px")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "28px sans-serif")
            .style("stroke", "black")
            .style("fill", "black")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "18px sans-serif")
            .style("fill", "blue")
            .style("stroke", "none")
        })
        .attr("fill", "blue")
    })//end second

    d3.json(url).then(comparison3 => {
      //using max function, it will loop through the data and get the highest number of y value
      const max3 = d3.max(comparison3, d => d.Cases)
      const min3 = d3.min(comparison3, d => d.Cases) * 0.55

      const y = d3.scaleLinear()
        .domain([min3, max3]) //highest y value
        .range([HEIGHT2, 0]) //minimum and maximum value 

      const x = d3.scaleBand()
        .domain(comparison3.map(d => d.Name))
        .range([0, WIDTH2])
        .padding(0.2)

      svg3.append('g')
        .attr('class', 'grid')
        .attr('transform', `translate(0, ${HEIGHT2})`)
        .call(d3.axisBottom()
          .scale(x)
          .tickSize(-HEIGHT2, 0, 0)
          .tickFormat(''))

      svg3.append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft()
          .scale(y)
          .tickSize(-WIDTH2, 0, 0)
          .tickFormat(''))

      const xAxisCall3 = d3.axisBottom(x)
      svg3.append("g")
        .attr("transform", `translate(0, ${HEIGHT2})`)
        .call(xAxisCall3)
        .style("fill", "grey")

      const yAxisCall3 = d3.axisLeft(y)
      svg3.append("g").call(yAxisCall3)
        .style("fill", "grey")

      svg3.append("text")
        .attr("x", WIDTH / 7)
        .attr("y", HEIGHT - 290)
        .attr("text-anchor", "middle")
        //.text("Mouse over!")
        .style("stroke", "black")
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");


      svg3.append("text")
        .attr("x", -(HEIGHT2 / 2))
        .attr("y", -45)
        .attr("text-anchor", "middle")
        .text("Number of Cases")
        .attr("transform", "rotate(-90)")
        .style("stroke", "black")
        .style("fill", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "22px sans-serif")
            .style("stroke", "#008080")
            .style("fill", "#008080")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("stroke", "black")
            .style("fill", "black")
            .style("font", "20px sans-serif")
        })
        .style("stroke-width", ".4px")
        .style("font", "20px sans-serif");


      const rects3 = svg3.selectAll("circle")
        .data(comparison3)

      rects3.enter().append("circle")
        .attr("cx", d => x(d.Name) + (x.bandwidth() / 2))
        .attr("cy", d => y(d.Cases))
        .attr("r", 35)
        .style("stroke", "lightblue")
        .style("opacity", "2")
        .style("stroke-width", "5")
        .attr("fill", d => {
          if (d.Cases > 10000) {
            return "#A52A2A";
          }
          return "#4bc0c0";
        })
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("stroke", "lightblue")
            .style("opacity", "2")
            .style("stroke-width", "10")
            .attr("r", 70)
            .attr("fill", d => {
              if (d.Cases > 10000) {
                return "#A52A2A";
              }
              return "#4bc0c0";
            })
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("r", 35)
            .attr("fill", d => {
              if (d.Cases > 10000) {
                return "#A52A2A";
              }
              return "#4bc0c0";
            })
        })
        .append("title")
        .text(d => `Number of Cases :\nNo.${d.Cases} \nin ${d.Name} virus`);


      rects3.enter().append("text")
        .attr("class", "value")
        .attr("x", d => x(d.Name) + (x.bandwidth() / 2))
        .attr("y", d => y(d.Cases))
        .attr("dy", ".35em") //vertical align middle
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT2 - y(d.Cases))
        .attr("text-anchor", "middle")
        .text(d => "No. " + d.Cases)
        .attr("font-family", "sans-serif")
        .attr("font-size", "18px")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "28px sans-serif")
            .style("stroke", "black")
            .style("fill", "black")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "18px sans-serif")
            .style("fill", "blue")
            .style("stroke", "none")
        })
        .attr("fill", "blue")
    })//end third

    d3.json(url5).then(symptoms => {
      //using max function, it will loop through the data and get the highest number of y value
      const max = d3.max(symptoms, d => d.HowSerious)

      const min = d3.min(symptoms, d => d.HowSerious) * 0.55

      const y = d3.scaleLinear()
        .domain([min, max]) //highest y value
        .range([HEIGHT, 0]) //minimum and maximum value 

      const x = d3.scaleBand()
        .domain(symptoms.map(d => d.Seriousness))
        .range([0, WIDTH])
        .padding(0.2)

      const xAxisCall = d3.axisBottom(x)
      svgsymptom.append("g")
        .attr("transform", `translate(0, ${HEIGHT})`)
        .call(xAxisCall)
        .style("fill", "gold")
        .style("font", "17px sans-serif")
        .style("text-anchor", "middle");

      svgsymptom.append('line')
        .attr('x1', 0)
        .attr('y1', y)
        .attr('x2', WIDTH)
        .attr('y2', y)
        .attr('stroke', 'red')

      svgsymptom.append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft()
          .scale(y)
          .tickSize(-WIDTH, 0, 0)
          .tickFormat(''))

      svgsymptom.append("text")
        .attr("x", -(HEIGHT / 2))
        .attr("y", -40)
        .attr("text-anchor", "middle")
        .text("Percentage (%) of patients with symptoms")
        .attr("transform", "rotate(-90)")
        .style("stroke", "black")
        .style("fill", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "19px sans-serif")
            .style("stroke", "#008080")
            .style("fill", "#008080")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("stroke", "#3CB371")
            .style("fill", "black")
            .style("font", "20px sans-serif")
        })
        .style("stroke-width", ".2px")
        .style("font", "20px sans-serif");


      svgsymptom.append("text")
        .attr("x", WIDTH / 1.5)
        .attr("y", HEIGHT - 290)
        .attr("text-anchor", "middle")
        .text("The Majority of infections are Mild")
        .style("stroke", "green")
        .style("fill", "green")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "15px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "green")
            .style("fill", "green")
        })
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

      const rects = svgsymptom.selectAll("rect")
        .data(symptoms)

      rects.enter().append("rect")
        .attr("x", d => x(d.Seriousness))
        .attr("y", d => y(d.HowSerious))
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT - y(d.HowSerious))
        .attr("fill", d => {
          if (d.HowSerious > 80) {
            return "#A52A2A";
          }
          return "#4066e0";
        })
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("stroke", "lightblue")
            .style("opacity", "2")
            .style("stroke-width", "20")
            .attr("fill", d => {
              if (d.HowSerious > 80) {
                return "#A52A2A";
              }
              return "#4066e0";
            })
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("stroke-width", "5")
            .style("opacity", "1")
            .attr("fill", d => {
              if (d.HowSerious > 80) {
                return "#A52A2A";
              }
              return "#4066e0";
            })
        })
        .append("title")
        .text(d => `Mortality Rate :\n${d.HowSerious} % \nof patients with symptoms are ${d.Seriousness}`);


      rects.enter().append("text")
        .attr("class", "value")
        .attr("x", d => x(d.Seriousness) + (x.bandwidth() / 2))
        .attr("y", d => y(d.HowSerious))
        .attr("dy", ".35em") //vertical align middle
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT3 - y(d.HowSerious))
        .attr("text-anchor", "middle")
        .text(d => d.HowSerious + " %")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "24px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "22px sans-serif")
            .style("stroke", "#000080")
            .style("fill", "#000080")
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "22px")
        .attr("fill", "#000080")

      svgsymptom.append("text")
        .attr("x", WIDTH2 / 1.5)
        .attr("y", HEIGHT2 - 50)
        .attr("text-anchor", "middle")
        .text("Like flu, stay at home")
        .style("fill", "white")
        .style("stroke-width", ".4px")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "20px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "#FF4500")
            .style("fill", "white")
        })
        .style("font", "17px sans-serif");

      svgsymptom.append("text")
        .attr("x", WIDTH2 / 0.58)
        .attr("y", HEIGHT2 - 20)
        .attr("text-anchor", "middle")
        .text("Hospitalization")
        .style("fill", "#6A5ACD")
        .style("stroke-width", ".4px")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "20px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "#6A5ACD")
            .style("fill", "#6A5ACD")
        })
        .style("font", "17px sans-serif");

      svgsymptom.append("text")
        .attr("x", WIDTH2 / 0.36)
        .attr("y", HEIGHT2)
        .attr("text-anchor", "middle")
        .text("Intensive care")
        .style("fill", "#6A5ACD")
        .style("stroke-width", ".4px")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "20px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "#6A5ACD")
            .style("fill", "")
        })
        .style("font", "17px sans-serif");
    })//end covid19 symptoms


    d3.json(url6).then(diffViruses => {
      //using max function, it will loop through the data and get the highest number of y value
      const max3 = d3.max(diffViruses, d => d.fatalityRate)
      const min3 = d3.min(diffViruses, d => d.fatalityRate) * 0.55

      const y = d3.scaleLinear()
        .domain([min3, max3]) //highest y value
        .range([HEIGHT, 0]) //minimum and maximum value 

      const x = d3.scaleBand()
        .domain(diffViruses.map(d => d.virus))
        .range([0, WIDTH])
        .padding(0.2)

      const xAxisCall4 = d3.axisBottom(x)
      svght.append("g")
        .attr("transform", `translate(0, ${HEIGHT})`)
        .call(xAxisCall4)
        .style("fill", "grey")

      svght.append('g')
        .attr('class', 'grid')
        .attr('transform', `translate(0, ${HEIGHT})`)
        .call(d3.axisBottom()
          .scale(x)
          .tickSize(-HEIGHT, 0, 0)
          .tickFormat(''))

      svght.append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft()
          .scale(y)
          .tickSize(-WIDTH, 0, 0)
          .tickFormat(''))

      const yAxisCall4 = d3.axisLeft(y)
      svght.append("g").call(yAxisCall4)
        .style("fill", "grey")


      svght.append("text")
        .attr("x", -(HEIGHT3 / 2))
        .attr("y", -40)
        .attr("text-anchor", "middle")
        .text("Motality Rate (%)")
        .attr("transform", "rotate(-90)")
        .style("stroke", "black")
        .style("fill", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "19px sans-serif")
            .style("stroke", "#008080")
            .style("fill", "#008080")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("stroke", "#3CB371")
            .style("fill", "black")
            .style("font", "20px sans-serif")
        })
        .style("stroke-width", ".2px")
        .style("font", "20px sans-serif");


      svght.append("text")
        .attr("x", WIDTH / 1.5)
        .attr("y", HEIGHT - 290)
        .attr("text-anchor", "middle")
        .text("% of confirmed cases who have died")
        .style("stroke", "black")
        .style("fill", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "19px sans-serif")
            .style("stroke", "#FF6347")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "black")
            .style("fill", "black")
        })
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

      svght.append("text")
        .attr("x", WIDTH / 1.5)
        .attr("y", HEIGHT - 255)
        .attr("text-anchor", "middle")
        .text("case fatality rate (CFR) is unreliable during a pandamic")
        .style("stroke", "red")
        .style("fill", "red")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "19px sans-serif")
            .style("stroke", "black")
            .style("fill", "black")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "red")
            .style("fill", "red")
        })
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

      // Add the line
      svght.append("path")
        .datum(diffViruses)
        .attr("fill", "none")
        .attr("stroke", "lightblue")
        .attr("stroke-width", 1)
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("fill", "none")
            .attr("stroke", "lightblue")
            .style("opacity", "2")
            .style("stroke-width", "7")
            .attr("r", 35)
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("r", 20)
            .attr("fill", "none")
            .attr("stroke", "lightblue")
            .style("stroke-width", "5")
        })
        .attr("d", d3.line()
          .x(function (d) { return x(d.virus) + (x.bandwidth() / 2) })
          .y(function (d) { return y(d.fatalityRate) })
        )

      const rects4 = svght.selectAll("circle")
        .data(diffViruses)

      rects4.enter().append("circle")
        .attr("cx", d => x(d.virus) + (x.bandwidth() / 2))
        .attr("cy", d => y(d.fatalityRate))
        .attr("r", 10)
        .attr("fill", "#2F4F4F")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("stroke", "lightblue")
            .style("opacity", "2")
            .style("stroke-width", "10")
            .attr("r", 70)
            .attr("fill", "#2E8B57")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("stroke", "none")
            .attr("r", 10)
            .attr("fill", "#2F4F4F");
        })
        .append("title")
        .text(d => `fatality Rate :\n${d.fatalityRate}%\nin ${d.virus}`);




      rects4.enter().append("text")
        .attr("class", "value")
        .attr("x", d => x(d.virus) + (x.bandwidth() / 2))
        .attr("y", d => y(d.fatalityRate) + (x.bandwidth() / 2))
        .attr("dy", ".35em") //vertical align middle
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT - y(d.fatalityRate))
        .attr("text-anchor", "middle")
        .text(d => d.virus)
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "28px sans-serif")
            .style("fill", "#000080")
            .text(d => d.fatalityRate + "%" + ` in ${d.virus}`)
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("fill", "blue")
            .text(d => d.virus)
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "#C71585")
    })//comparisons of different viruses

    d3.json(urlagerisk).then(age => {
      //using max function, it will loop through the data and get the highest number of y value
      const max = d3.max(age, d => d.PercentOfdeceased)

      const min = d3.min(age, d => d.PercentOfdeceased) * 0.55

      const y = d3.scaleLinear()
        .domain([min, max]) //highest y value
        .range([HEIGHT, 0]) //minimum and maximum value 

      const x = d3.scaleBand()
        .domain(age.map(d => d.AgeRange))
        .range([0, WIDTH])
        .padding(0.6)

      const xAxisCall = d3.axisBottom(x)
      svgrisk.append("g")
        .attr("transform", `translate(0, ${HEIGHT})`)
        .call(xAxisCall)
        .style("fill", "#C71585")
        .style("font", "17px sans-serif")
        .style("text-anchor", "middle")

        .selectAll("text")
        .style("fill", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "30px sans-serif")
            .style("fill", "black")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("fill", "black")
        })
        .style("font", "17px sans-serif")
        .style("text-anchor", "start");

      svgrisk.append("text")
        .attr("x", -(HEIGHT / 1.7))
        .attr("y", -40)
        .attr("text-anchor", "middle")
        .text("Motality Rate (%)")
        .attr("transform", "rotate(-90)")
        .style("stroke", "black")
        .style("fill", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "19px sans-serif")
            .style("stroke", "#008080")
            .style("fill", "#008080")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("stroke", "#3CB371")
            .style("fill", "black")
            .style("font", "20px sans-serif")
        })
        .style("stroke-width", ".2px")
        .style("font", "20px sans-serif");
      
      const rects = svgrisk.selectAll("rect")
        .data(age)

      rects.enter().append("rect")
        .attr("x", d => x(d.AgeRange))
        .attr("y", d => y(d.PercentOfdeceased))
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT - y(d.PercentOfdeceased))
        .attr("fill", d => {
          if (d.PercentOfdeceased > 20) {
            return "#A52A2A";
          }
          return "#008080";
        })
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("stroke", "lightblue")
            .style("opacity", "2")
            .style("stroke-width", "10")
            .attr("fill", d => {
              if (d.PercentOfdeceased > 20) {
                return "#FF8C00";
              }
              return "#556B2F";
            })
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("stroke", "none")
            .attr("fill", d => {
              if (d.PercentOfdeceased > 20) {
                return "#A52A2A";
              }
              return "#008080";
            })
        })
        .append("title")
        .text(d => `Mortality Rate :\n${d.PercentOfdeceased}%\nin ${d.AgeRange}`);

      // Add the line
      svgrisk.append("path")
        .datum(age)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 5)
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("stroke-width", "10")
            .attr("r", 35)
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("stroke", "blue")
            .style("stroke-width", "5")
        })
        .attr("d", d3.line()
          .x(function (d) { return x(d.AgeRange) + (x.bandwidth() / 2) })
          .y(function (d) { return y(d.PercentOfdeceased) })
        )

      // Add the points

      const rects2 = svgrisk.selectAll("circle")
        .data(age)

      rects2.enter().append("circle")
        .attr("cx", d => x(d.AgeRange) + (x.bandwidth() / 2))
        .attr("cy", d => y(d.PercentOfdeceased))
        .attr("r", 5)
        .attr("fill", "red")
        .on("mouseover", function () {
          //Do something on mouseover of any bar
          d3.select(this)
            .attr("fill", "rgb(95, 109, 148)");
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("fill", "red");
        })
        .append("title")
        .text(d => `Number of Confirmed Cases : ${d.PercentOfdeceased}  in ${d.AgeRange}`);

      rects.enter().append("text")
        .attr("class", "value")
        .attr("x", d => x(d.AgeRange) + (x.bandwidth() / 2))
        .attr("y", d => y(d.PercentOfdeceased))
        .attr("dy", ".35em") //vertical align middle
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT - y(d.PercentOfdeceased))
        .attr("text-anchor", "middle")
        .text(d => d.PercentOfdeceased + " %")
        .attr("font-family", "sans-serif")
        .attr("font-size", "22px")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "30px sans-serif")
            .style("fill", "blue")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "22px sans-serif")
            .style("fill", "black")
        })
        .attr("fill", "black")

    })//end - Most at Risk


    Promise.all([
      d3.json("https://covid19symptoms.firebaseio.com/Covid19Symptoms.json"),
      d3.json("https://merssymptoms.firebaseio.com/MersSymptoms.json"),
      d3.json("https://sarssymptoms.firebaseio.com/SarsSymptoms.json")
    ]).then((datasets) => {

      vis.Covid19Data = datasets[0]
      vis.MersData = datasets[1]
      vis.SarsData = datasets[2]

      console.log(vis.Covid19Data)
      console.log(vis.MersData)
      console.log(vis.SarsData)
      vis.update("covid19")

    })
  }

  // This update() method gets called you change your data.
  update(virus) {
    const vis = this;

    vis.xLabel.text(`${virus} symptoms`)
    vis.xLabel2.text(`Shortness of breath was less common in COVID‐19 patients (17%),`)
    vis.xLabel3.text(`in comparison to SARS (32%) and MERS (51%). `)
    vis.xLabel4.text(`Likewise, chills were less common in COVID‐19 patients (17%), `)
    vis.xLabel5.text(`in comparison to SARS (57.5%) and MERS (41%). `)
    vis.xLabel6.text(`Therefore, these clinical symptoms should help distinguish`)
    vis.xLabel7.text(`the various coronavirus infections from each other. `)

    vis.data = (virus === "covid19") ? vis.Covid19Data : (virus === "mers") ? vis.MersData : vis.SarsData;
    vis.xLabel.text(` ${virus}`)

    //using max function, it will loop through the data and get the highest number of y value.
    const max = d3.max(vis.data, d => d.Number)
    const min = d3.min(vis.data, d => d.Number) * 0.95

    const y = d3.scaleLinear()
      .domain([min, max]) //highest y value.
      .range([HEIGHT, 0]) //minimum and maximum value .


    // Create the scale
    const x = d3.scaleBand()
      .domain(vis.data.map(d => d.Name))
      .range([0, WIDTH])
      .padding(0.4)

    const xAxisCall = d3.axisBottom(x)
    vis.xAxisGroup.transition().duration(500).call(xAxisCall)
      .style("fill", "grey")

    const yAxisCall = d3.axisLeft(y)
    vis.yAxisGroup.transition().duration(500).call(yAxisCall)
      .style("fill", "grey")

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
      .attr("height", d => HEIGHT - y(d.Number))


    // ENTER
    rects.enter().append("rect")
      .attr("x", d => x(d.Name))
      .attr("width", x.bandwidth)
      .attr("fill", "#69b3a2")
      .attr("y", HEIGHT)
      .transition().duration(500)
      .attr("height", d => HEIGHT - y(d.Number))
      .attr("y", d => y(d.Number))
      .style("padding", "3px")
      .style("margin", "1px")
      .style("width", d => `${d * 10}px`)
      .text(d => d)
      .attr("fill", "#5F9EA0")
      .attr("stroke", "#D3D3D3")
      .attr("stroke-width", 4)
  }
}

