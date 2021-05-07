import * as d3 from 'd3';

/********************
 * //Read the data  *
 *******************/

const mersCountry = "https://merscountries.firebaseio.com/MersCountry.json";
const sarsCountry = "https://sarscountries.firebaseio.com/SarsCountry.json";
const sarsOutbreak = "https://sarsoutbreak.firebaseio.com/SarsOutbreak.json";

const MARGIN = { TOP: 10, BOTTOM: 60, LEFT: 70, RIGHT: 10 };
const WIDTH = 1100 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

const WIDTH2 = 1100 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT2 = 480 - MARGIN.TOP - MARGIN.BOTTOM;
const MARGIN2 = { TOP: 10, BOTTOM: 60, LEFT: 60, RIGHT: 10 };

const WIDTH3 = 1100 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT3 = 480 - MARGIN.TOP - MARGIN.BOTTOM;

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
  // This constructor function gets called only once when you first load up this visualization.
  constructor(element) {
    const vis = this;

    // Adds the svg canvas
    vis.svg = d3.select(element)  // Select element on the page with D3 select
      .append("svg")  // Add elements onto a selection with the D3 append method
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)  // Attr method to set attributes of these elements
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

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
      .text("Since April 2012 and as of 12 January 2021, 2 581 cases of MERS-CoV, including 935 deaths,have been reported by health authorities worldwide.");



    vis.xLabel = vis.svg.append("text")
      .attr("x", WIDTH / 1.8)
      .attr("y", HEIGHT - 330)
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
      .style("font", "40px sans-serif");


    vis.xLabel6 = vis.svg.append("text")
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


    vis.xLabel7 = vis.svg.append("text")
      .attr("x", WIDTH / 1.8)
      .attr("y", HEIGHT - 260)
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

  
    const svg2 = d3.select(element)
      .append("svg")
      .attr("width", WIDTH2 + MARGIN2.LEFT + MARGIN2.RIGHT)
      .attr("height", HEIGHT2 + MARGIN2.TOP + MARGIN2.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

    const tsvg2 = d3.select(element)
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
      .text("Middle East had the highest number cases (88.4%), followed by Asia (10.7%), Europe (0.8%) and USA with only 2 cases officially reported (0.1%).");

    const svg3 = d3.select(element)
      .append("svg")
      .attr("width", WIDTH2 + MARGIN2.LEFT + MARGIN2.RIGHT)
      .attr("height", HEIGHT2 + MARGIN2.TOP + MARGIN2.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

    const tsvg3 = d3.select(element)
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
      .text("The majority of SARS cases were from China, Canada and Singapore, among which, cases from China mainland presented the largest proportion, followed by that from Hong Kong and Taiwan.");

    d3.select(element)
      .append("div")
      .style("border", "1px lightgray solid;")
      .style("background-color", "#808080")
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
      .text("features are compared in 5 main areas. (China, Hong Kong, Taiwan, Singapore, Canada)")


    const svg4 = d3.select(element)
      .append("svg")
      .attr("width", WIDTH3 + MARGIN2.LEFT + MARGIN2.RIGHT)
      .attr("height", HEIGHT3 + MARGIN2.TOP + MARGIN2.BOTTOM)
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
      .text("China has the most infected cases and deaths, yet the lowest mortality rate.")

    const svg7 = d3.select(element)
      .append("svg")
      .attr("width", WIDTH3 + MARGIN2.LEFT + MARGIN2.RIGHT)
      .attr("height", HEIGHT3 + MARGIN2.TOP + MARGIN2.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)

    vis.svg.append("text")
      .attr("x", -(HEIGHT / 2))
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .text("Number of reported cases")
      .attr("transform", "rotate(-90)")
      .style("stroke", "black")
      .style("fill", "black")
      .style("stroke-width", ".2px")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "25px sans-serif")
          .style("stroke", "#4682B4")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("font", "20px sans-serif")
          .style("fill", "black")
          .style("stroke", "none")
      })
      .style("font", "20px sans-serif");


    vis.svg.append("text")
      .attr("x", WIDTH / 2.07)
      .attr("y", HEIGHT + 15)
      .attr("text-anchor", "middle")
      .text("Date")
      .on("mouseover", function (d) {
        //Do something on mouseover of any bar
        d3.select(this)
          .style("font", "17px sans-serif")
          .style("stroke", "#008080")
          .style("fill", "#008080")
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("stroke", "black")
          .style("fill", "black")
          .style("font", "15px sans-serif")
      })
      .style("stroke", "black")
      .style("fill", "black")
      .style("stroke-width", ".4px")
      .style("text-decoration", "underline")
      .style("font", "15px sans-serif");


    vis.xAxisGroup = vis.svg.append("g")
      .attr("transform", `translate(0, ${HEIGHT})`)

    vis.yAxisGroup = vis.svg.append("g")



    // Mers - Country
    d3.json(mersCountry).then(comparison2 => {
      //using max function, it will loop through the data and get the highest number of y value
      const max2 = d3.max(comparison2, d => d.Confirmed)
      const min2 = d3.min(comparison2, d => d.Confirmed) * 0.55

      // Define the div for the tooltip
      var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

      const y = d3.scaleLinear()
        .domain([min2, max2]) //highest y value
        .range([HEIGHT2, 0]) //minimum and maximum value 


      const x = d3.scaleBand()
        .domain(comparison2.map(d => d.Country))
        .range([0, WIDTH2])
        .padding(0.2)

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
        .selectAll("text")
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(50)")
        .style("fill", "blue")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "18px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "15px sans-serif")
            .style("fill", "blue")
            .style("stroke", "none")
        })
        .style("font", "15px sans-serif")
        .style("text-anchor", "start");


      const yAxisCall2 = d3.axisLeft(y)
      svg2.append("g").call(yAxisCall2)
        .style("fill", "grey")

      svg2.append("text")
        .attr("x", WIDTH2 / 2)
        .attr("y", HEIGHT2 + 50)
        .attr("text-anchor", "middle")
        .text("Country")
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
        .style("stroke", "black")
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("text-decoration", "underline")
        .style("font", "15px sans-serif");

      svg2.append("text")
        .attr("x", WIDTH2 / 2)
        .attr("y", HEIGHT2 - 330)
        .attr("text-anchor", "middle")
        .text("Mers")
        .style("stroke", "#3CB371")
        .style("fill", "#3CB371")
        .style("stroke-width", ".4px")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "70px sans-serif")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "35px sans-serif")
        })
        .style("font", "35px sans-serif");

      svg2.append("text")
        .attr("x", WIDTH2 / 2)
        .attr("y", HEIGHT2 - 285)
        .attr("text-anchor", "middle")
        .text("First identified in Saudi Arabia in 2012.")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "20px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "black")
            .style("fill", "black")
        })
        .style("stroke", "black")
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

      svg2.append("text")
        .attr("x", WIDTH2 / 2)
        .attr("y", HEIGHT2 - 250)
        .attr("text-anchor", "middle")
        .text("Since 2012, MERS has been reported in 27 countries")
        .style("stroke", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "20px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "black")
            .style("fill", "black")
        })
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

      svg2.append("text")
        .attr("x", WIDTH2 / 2.8)
        .attr("y", HEIGHT2 - 210)
        .attr("text-anchor", "middle")
        .style("stroke", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "16px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "#4682B4")
            .style("fill", "#4682B4")
        })
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

      svg2.append("text")
        .attr("x", WIDTH2 / 2.8)
        .attr("y", HEIGHT2 - 190)
        .attr("text-anchor", "middle")
        .style("stroke", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "16px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "#4682B4")
            .style("fill", "#4682B4")
        })
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

      svg2.append("text")
        .attr("x", WIDTH2 / 2.9)
        .attr("y", HEIGHT2 - 150)
        .attr("text-anchor", "middle")
        .style("stroke", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "16px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "#4682B4")
            .style("fill", "#4682B4")
        })
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

      svg2.append("text")
        .attr("x", WIDTH2 / 3)
        .attr("y", HEIGHT2 - 130)
        .attr("text-anchor", "middle")
        .style("stroke", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "16px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "#4682B4")
            .style("fill", "#4682B4")
        })
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

      svg2.append("text")
        .attr("x", -(HEIGHT2 / 2))
        .attr("y", -40)
        .attr("text-anchor", "middle")
        .text("No. of Confirmed Cases")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "25px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "15px sans-serif")
            .style("fill", "black")
            .style("stroke", "none")
        })
        .attr("transform", "rotate(-90)")
        .style("stroke", "black")
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "15px sans-serif");

      // Add the line
      svg2.append("path")
        .datum(comparison2)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-miterlimit", "1")
        .attr("stroke-width", 2.5)
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .attr("fill", "#ddd")
            .attr("pointer-events", "all")
            .attr("stroke", "#00008B")
            .style("opacity", "2")
            .style("stroke-width", "10")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("r", 20)
            .style("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-miterlimit", "1")
            .style("opacity", "1")
            .style("stroke-width", "2.5")
        })
        .attr("d", d3.line()
          .x(function (d) { return x(d.Country) })
          .y(function (d) { return y(d.Confirmed) })
        )
      // Add the points
      // Add the scatterplot

      const rects2 = svg2.selectAll("circle")
        .data(comparison2)

      rects2.enter().append("circle")
        .attr("cx", d => x(d.Country))
        .attr("cy", d => y(d.Confirmed))
        .attr("r", 20)
        .attr("fill", d => {
          if (d.Confirmed > 2000) {
            return "red";
          }
          return "green";
        })
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("stroke", "lightblue")
            .style("opacity", "2")
            .style("stroke-width", "5")
            .attr("r", 50)
            .attr("fill", d => {
              if (d.Confirmed > 2000) {
                return "#FF4500";
              }
              return "#556B2F";
            })
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("r", 20)
            .attr("fill", d => {
              if (d.Confirmed > 2000) {
                return "red";
              }
              return "green";
            })
        })
        .append("title")
        .text(d => `Number of Confirmed Cases :\nNo. ${d.Confirmed}\nin ${d.Country} country`);


      rects2.enter().append("text")
        .attr("class", "value")
        .attr("x", d => x(d.Country))
        .attr("y", d => y(d.Confirmed))
        .attr("dy", ".35em") //vertical align middle
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT - y(d.Confirmed))
        .attr("text-anchor", "middle")
        .text(d => "No. " + d.Confirmed)
        .attr("font-family", "sans-serif")
        .attr("font-size", "10px")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "20px sans-serif")
            .style("stroke", "black")
            .style("fill", "black")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "11px sans-serif")
            .style("fill", "white")
            .style("stroke", "none")
        })
        .attr("fill", "white")
    })// End Mers - Country

    // Start Sars - Country
    d3.json(sarsCountry).then(comparison3 => {
      //using max function, it will loop through the data and get the highest number of y value
      const max3 = d3.max(comparison3, d => d.Confirmed)
      const min3 = d3.min(comparison3, d => d.Confirmed) * 0.55

      const y = d3.scaleLinear()
        .domain([min3, max3]) //highest y value
        .range([HEIGHT2, 0]) //minimum and maximum value 

      const x = d3.scaleBand()
        .domain(comparison3.map(d => d.Country))
        .range([0, WIDTH2])
        .padding(0.2)

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
        .selectAll("text")
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(50)")
        .style("fill", "blue")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "18px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "15px sans-serif")
            .style("fill", "blue")
            .style("stroke", "none")
        })
        .style("font", "15px sans-serif")
        .style("text-anchor", "start");

      const yAxisCall3 = d3.axisLeft(y)
      svg3.append("g").call(yAxisCall3)
        .style("fill", "grey")

      svg3.append("text")
        .attr("x", WIDTH2 / 2)
        .attr("y", HEIGHT2 + 50)
        .attr("text-anchor", "middle")
        .text("Country")
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
        .style("stroke", "black")
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("text-decoration", "underline")
        .style("font", "15px sans-serif");

      svg3.append("text")
        .attr("x", WIDTH2 / 2)
        .attr("y", HEIGHT2 - 355)
        .attr("text-anchor", "middle")
        .text("Sars")
        .style("stroke", "#008080")
        .style("fill", "#008080")
        .style("stroke-width", ".4px")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "70px sans-serif")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "45px sans-serif")
        })
        .style("font", "40px sans-serif");

      svg3.append("text")
        .attr("x", WIDTH2 / 2)
        .attr("y", HEIGHT2 - 320)
        .attr("text-anchor", "middle")
        .text("8,098 cases, resulting in 774 deaths reported in")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "15px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "#4682B4")
            .style("fill", "#4682B4")
        })
        .style("stroke", "black")
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

      svg3.append("text")
        .attr("x", WIDTH2 / 1.7)
        .attr("y", HEIGHT2 - 275)
        .attr("text-anchor", "middle")
        .text("17 countries (9.6% fatality rate), with the majority of cases in mainland China and Hong Kong.")
        .style("stroke", "black")
        .style("fill", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "16px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "#4682B4")
            .style("fill", "#4682B4")
        })
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

      svg3.append("text")
        .attr("x", WIDTH2 / 2)
        .attr("y", HEIGHT2 - 245)
        .attr("text-anchor", "middle")
        //.text("No cases of SARS have been reported worldwide since 2004.")
        .style("stroke", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "15px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "#4682B4")
            .style("fill", "#4682B4")
        })
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

      svg3.append("text")
        .attr("x", WIDTH2 / 1.7)
        .attr("y", HEIGHT2 - 210)
        .attr("text-anchor", "middle")
        //.text("Similar to MERS, more patients were male, while male patients presented 55.9% of total cases,")
        .style("stroke", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "15px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "#4682B4")
            .style("fill", "#4682B4")
        })
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");


      svg3.append("text")
        .attr("x", WIDTH2 / 2)
        .attr("y", HEIGHT2 - 188)
        .attr("text-anchor", "middle")
        //.text("female patients only accounted for 44.1%")
        .style("stroke", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "15px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "#4682B4")
            .style("fill", "#4682B4")
        })
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "17px sans-serif");

      svg3.append("text")
        .attr("x", -(HEIGHT2 / 2))
        .attr("y", -40)
        .attr("text-anchor", "middle")
        .text("No. of Confirmed Cases")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "25px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "15px sans-serif")
            .style("fill", "black")
            .style("stroke", "none")
        })
        .attr("transform", "rotate(-90)")
        .style("stroke", "black")
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "15px sans-serif");

      // Add the line
      svg3.append("path")
        .datum(comparison3)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .attr("stroke", "#00008B")
        .style("stroke-width", "2.5")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .attr("fill", "#ddd")
            .attr("pointer-events", "all")
            .attr("stroke", "#00008B")
            .style("opacity", "2")
            .style("stroke-width", "10")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("r", 20)
            .style("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-miterlimit", "1")
            .attr("pointer-events", "all")
            .style("opacity", "1")
            .style("stroke-width", "2.5")
        })
        .attr("d", d3.line()
          .x(function (d) { return x(d.Country) })
          .y(function (d) { return y(d.Confirmed) })

        )
      // Add the points


      const rects3 = svg3.selectAll("circle")
        .data(comparison3)

      rects3.enter().append("circle")
        .attr("cx", d => x(d.Country))
        .attr("cy", d => y(d.Confirmed))
        .attr("r", 20)
        .attr("fill", d => {
          if (d.Confirmed > 5000) {
            return "red";
          }
          return "green";
        })
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("stroke", "lightblue")
            .style("opacity", "2")
            .style("stroke-width", "5")
            .attr("r", 50)
            .attr("fill", d => {
              if (d.Confirmed > 2000) {
                return "#FF8C00";
              }
              return "#556B2F";
            })
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("r", 20)
            .attr("fill", d => {
              if (d.Confirmed > 2000) {
                return "red";
              }
              return "green";
            })
        })
        .append("title")
        .text(d => `Number of Confirmed Cases :\nNo. ${d.Confirmed} \nin ${d.Country} country`);

      rects3.enter().append("text")
        .attr("class", "value")
        .attr("x", d => x(d.Country))
        .attr("y", d => y(d.Confirmed))
        .attr("dy", ".35em") //vertical align middle
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT - y(d.Confirmed))
        .attr("text-anchor", "middle")
        .text(d => "No. " + d.Confirmed)
        .attr("font-family", "sans-serif")
        .attr("font-size", "10px")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "20px sans-serif")
            .style("stroke", "black")
            .style("fill", "black")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "11px sans-serif")
            .style("fill", "white")
            .style("stroke", "none")
        })
        .attr("fill", "white")
    })//end third

    // Sars - outbreak1,2,3
    d3.json(sarsOutbreak).then(outbreak1 => {
      //using max function, it will loop through the data and get the highest number of y value
      const max2 = d3.max(outbreak1, d => d.Cases)
      const min2 = d3.min(outbreak1, d => d.Cases) * 0.55

      const y = d3.scaleLinear()
        .domain([min2, max2]) //highest y value
        .range([HEIGHT3, 0]) //minimum and maximum value 

      const x = d3.scaleBand()
        .domain(outbreak1.map(d => d.Country))
        .range([0, WIDTH3])
        .padding(0.2)

      const xAxisCall2 = d3.axisBottom(x)
      svg4.append("g")
        .attr("transform", `translate(0, ${HEIGHT3})`)
        .call(xAxisCall2)
        .style("fill", "grey")
        .selectAll("text")
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(30)")
        .style("fill", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "18px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "15px sans-serif")
            .style("fill", "black")
            .style("stroke", "none")
        })
        .style("font", "15px sans-serif")
        .style("text-anchor", "start");


      const yAxisCall2 = d3.axisLeft(y)
      svg4.append("g").call(yAxisCall2)
        .style("fill", "grey")

      svg4.append("text")
        .attr("x", WIDTH3 / 1.9)
        .attr("y", HEIGHT3 + 50)
        .attr("text-anchor", "middle")
        .text("Country")
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
        .style("stroke", "#008080")
        .style("fill", "#008080")
        .style("stroke-width", ".4px")
        .style("text-decoration", "underline")
        .style("font", "15px sans-serif");

      svg4.append("text")
        .attr("x", WIDTH3 / 1.5)
        .attr("y", HEIGHT3 - 400)
        .attr("text-anchor", "middle")
        .text("⚫ Sars no. of total infected cases")
        .style("stroke", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "16px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "black")
            .style("fill", "black")
        })
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "15px sans-serif");


      svg4.append("text")
        .attr("x", WIDTH3 / 1.48)
        .attr("y", HEIGHT3 - 370)
        .attr("text-anchor", "middle")
        .text("🟢 Sars no. of total Recovered cases")
        .style("stroke", "green")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "16px sans-serif")
            .style("stroke", "green")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "green")
            .style("fill", "green")
        })
        .style("fill", "green")
        .style("stroke-width", ".4px")
        .style("font", "15px sans-serif");


      svg4.append("text")
        .attr("x", WIDTH3 / 1.52)
        .attr("y", HEIGHT3 - 345)
        .attr("text-anchor", "middle")
        .text("🔴 Sars no. of total Death cases")
        .style("stroke", "red")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "16px sans-serif")
            .style("stroke", "red")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "red")
            .style("fill", "red")
        })
        .style("fill", "red")
        .style("stroke-width", ".4px")
        .style("font", "15px sans-serif");

      //x labels

      svg4.append("text")
        .attr("x", WIDTH3 / 17)
        .attr("y", HEIGHT3 - 425)
        .attr("text-anchor", "middle")
        .text("No. infected : 5327")
        .style("stroke", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "14px sans-serif")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "12px sans-serif")
            .style("fill", "black")
        })
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "12px sans-serif");


      //2

      svg4.append("text")
        .attr("x", WIDTH3 / 2.75)
        .attr("y", HEIGHT3 - 134)
        .attr("text-anchor", "middle")
        .text("No. infected : 1755")
        .style("stroke", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "14px sans-serif")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "12px sans-serif")
            .style("fill", "black")
        })
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "12px sans-serif");

      //3

      svg4.append("text")
        .attr("x", WIDTH3 / 1.80)
        .attr("y", HEIGHT3 - 45)
        .attr("text-anchor", "middle")
        .text("No. infected : 671")
        .style("stroke", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "14px sans-serif")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "12px sans-serif")
            .style("fill", "black")
        })
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "12px sans-serif");

      //4

      svg4.append("text")
        .attr("x", WIDTH3 / 1.35)
        .attr("y", HEIGHT3 - 13)
        .attr("text-anchor", "middle")
        .text("No. infected : 671")
        .style("stroke", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "14px sans-serif")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "12px sans-serif")
            .style("fill", "black")
        })
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "12px sans-serif");

      //5

      svg4.append("text")
        .attr("x", WIDTH3 / 1.06)
        .attr("y", HEIGHT3 - 13)
        .attr("text-anchor", "middle")
        .text("No. infected : 250")
        .style("stroke", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "14px sans-serif")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "12px sans-serif")
            .style("fill", "black")
        })
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "12px sans-serif");

      // Add the line
      svg4.append("path")
        .datum(outbreak1)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 1.5)
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("stroke-width", "10")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("stroke", "black")
            .attr("fill", "none")
            .style("stroke-width", "2")
        })
        .attr("d", d3.line()
          .x(function (d) { return x(d.Country) + (x.bandwidth() / 2) })
          .y(function (d) { return y(d.Cases) })

        )


      // Add the line2==recovered
      svg4.append("path")
        .datum(outbreak1)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 1.5)
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("stroke-width", "10")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("stroke", "green")
            .attr("fill", "none")
            .style("stroke-width", "2")
        })
        .attr("d", d3.line()
          .x(function (d) { return x(d.Country) + (x.bandwidth() / 2) })
          .y(function (d) { return y(d.Recovered) })
        )


      // Add the line3-death
      svg4.append("path")
        .datum(outbreak1)
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 1.5)
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("stroke-width", "10")
            .attr("r", 35)
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("stroke", "red")
            .attr("fill", "none")
            .style("stroke-width", "2")
        })
        .attr("d", d3.line()
          .x(function (d) { return x(d.Country) + (x.bandwidth() / 2) })
          .y(function (d) { return y(d.Deaths) })
        )
      // Add the points-confirmed

      const rects2 = svg4.selectAll("circle")
        .data(outbreak1)

      rects2.enter().append("circle")
        .attr("cx", d => x(d.Country) + (x.bandwidth() / 2))
        .attr("cy", d => y(d.Cases))
        .attr("r", 7)
        .attr("fill", "black")
        .on("mouseover", function () {
          //Do something on mouseover of any bar
          d3.select(this)
            .attr("fill", "black");
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("fill", "black");
        })
        .append("title")
        .text(d => `Number of Confirmed Cases : ${d.Cases}  in ${d.Country}`);

      //deaths circle
      rects2.enter().append("circle")
        .attr("cx", d => x(d.Country) + (x.bandwidth() / 2))
        .attr("cy", d => y(d.Deaths))
        .attr("r", 7)
        .attr("fill", "red")
        .on("mouseover", function () {
          //Do something on mouseover of any bar
          d3.select(this)
            .attr("fill", "red");
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("fill", "red");
        })
        .append("title")
        .text(d => `Number of Confirmed Cases : ${d.Deaths}  in ${d.Country}`);

      //recovered circle
      rects2.enter().append("circle")
        .attr("cx", d => x(d.Country) + (x.bandwidth() / 2))
        .attr("cy", d => y(d.Recovered))
        .attr("r", 7)
        .attr("fill", "green")
        .on("mouseover", function () {
          //Do something on mouseover of any bar
          d3.select(this)
            .attr("fill", "green");
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("fill", "green");
        })
        .append("title")
        .text(d => `Number of Confirmed Cases : ${d.Recovered}  in ${d.Country}`);

      //confirmed
      rects2.enter().append("text")
        .attr("class", "value")
        .attr("x", d => x(d.Country) + (x.bandwidth() / 2))
        .attr("y", d => y(d.Cases))
        .attr("dy", ".35em") //vertical align middle
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT - y(d.Cases))
        .attr("text-anchor", "middle")
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black")
        .append("title")
        .text(d => `Number of Total Infected Cases:\nNo. ${d.Cases} \nin ${d.Country} country`);

      //recovered

      rects2.enter().append("text")
        .attr("class", "value")
        .attr("x", d => x(d.Country) + (x.bandwidth() / 4))
        .attr("y", d => y(d.Recovered))
        .attr("dy", ".35em") //vertical align middle
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT - y(d.Recovered))
        .attr("text-anchor", "middle")
        .text(d => d.Recovered)
        .attr("font-family", "sans-serif")
        .attr("font-size", "15px")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "30px sans-serif")
            .style("stroke", "black")
            .style("fill", "black")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "15px sans-serif")
            .style("fill", "green")
            .style("stroke", "green")
        })
        .attr("fill", "green")
        .append("title")
        .text(d => `Recovered Cases :\n${d.Recovered}% \nin ${d.Country} country`);


      //death

      rects2.enter().append("text")
        .attr("class", "value")
        .attr("x", d => x(d.Country) + (x.bandwidth() / 4))
        .attr("y", d => y(d.Deaths))
        .attr("dy", ".35em") //vertical align middle
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT - y(d.Deaths))
        .attr("text-anchor", "middle")
        .text(d => d.Deaths)
        .attr("font-family", "sans-serif")
        .attr("font-size", "15px")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "30px sans-serif")
            .style("stroke", "black")
            .style("fill", "black")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "15px sans-serif")
            .style("fill", "red")
            .style("stroke", "red")
        })
        .attr("fill", "red")
        .append("title")
        .text(d => `Deaths Cases :\n${d.Deaths}% \nin ${d.Country} country`);
    })// End Sars outbreak 1

    // Sars - outbreak4
    d3.json(sarsOutbreak).then(outbreak4 => {
      //using max function, it will loop through the data and get the highest number of y value
      const max2 = d3.max(outbreak4, d => d.MortalityRate)
      const min2 = d3.min(outbreak4, d => d.MortalityRate) * 0.55

      const y = d3.scaleLinear()
        .domain([min2, max2]) //highest y value
        .range([HEIGHT3, 0]) //minimum and maximum value 

      const x = d3.scaleBand()
        .domain(outbreak4.map(d => d.Country))
        .range([0, WIDTH3])
        .padding(0.2)

      const xAxisCall2 = d3.axisBottom(x)
      svg7.append("g")
        .attr("transform", `translate(0, ${HEIGHT3})`)
        .call(xAxisCall2)
        .style("fill", "grey")
        .selectAll("text")
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(30)")
        .style("fill", "black")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "18px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "15px sans-serif")
            .style("fill", "black")
            .style("stroke", "none")
        })
        .style("font", "15px sans-serif")
        .style("text-anchor", "start");


      const yAxisCall2 = d3.axisLeft(y)
      svg7.append("g").call(yAxisCall2)
        .style("fill", "grey")

      svg7.append("text")
        .attr("x", WIDTH3 / 1.9)
        .attr("y", HEIGHT3 + 50)
        .attr("text-anchor", "middle")
        .text("Country")
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
        .style("stroke", "#008080")
        .style("fill", "#008080")
        .style("stroke-width", ".4px")
        .style("text-decoration", "underline")
        .style("font", "15px sans-serif");

      svg7.append("text")
        .attr("x", WIDTH3 / 2)
        .attr("y", HEIGHT3 - 180)
        .attr("text-anchor", "middle")
        .text("🔵 Sars-Mortality Rate (%) ")
        .style("stroke", "blue")
        .style("fill", "blue")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "16px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "18px sans-serif")
            .style("stroke", "#4682B4")
            .style("fill", "#4682B4")
        })
        .style("stroke-width", ".4px")
        .style("font", "15px sans-serif");

      svg7.append("text")
        .attr("x", -(HEIGHT3 / 2))
        .attr("y", -40)
        .attr("text-anchor", "middle")
        .text("Mortality Rate (%)")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "15px sans-serif")
            .style("stroke", "#4682B4")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "17px sans-serif")
            .style("stroke", "black")
            .style("fill", "black")
        })
        .attr("transform", "rotate(-90)")
        .style("stroke", "black")
        .style("fill", "black")
        .style("stroke-width", ".4px")
        .style("font", "15px sans-serif");

      // Add the line
      svg7.append("path")
        .datum(outbreak4)
        .attr("fill", "none")
        .attr("stroke", "blue")
        .attr("stroke-width", 1.5)
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("stroke-width", "10")
            .attr("fill", "#ddd")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("fill", "none")
          //.style("stroke-width","2")
        })
        .attr("d", d3.line()
          .x(function (d) { return x(d.Country) + (x.bandwidth() / 2) })
          .y(function (d) { return y(d.MortalityRate) })
        )
      // Add the points

      const rects2 = svg7.selectAll("circle")
        .data(outbreak4)

      rects2.enter().append("circle")
        .attr("cx", d => x(d.Country) + (x.bandwidth() / 2))
        .attr("cy", d => y(d.MortalityRate))
        .attr("r", 5)
        .attr("fill", "black")
        .on("mouseover", function () {
          //Do something on mouseover of any bar
          d3.select(this)
            .attr("fill", "rgb(95, 109, 148)");
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .attr("fill", "black");
        })
        .append("title")
        .text(d => `Mortality Rate : ${d.MortalityRate}  in ${d.Country}`);


      rects2.enter().append("text")
        .attr("class", "value")
        .attr("x", d => x(d.Country) + (x.bandwidth() / 2))
        .attr("y", d => y(d.MortalityRate))
        .attr("dy", ".35em") //vertical align middle
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT - y(d.MortalityRate))
        .attr("text-anchor", "middle")
        .text(d => d.MortalityRate + " %")
        .attr("font-family", "sans-serif")
        .attr("font-size", "25px")
        .on("mouseover", function (d) {
          //Do something on mouseover of any bar
          d3.select(this)
            .style("font", "30px sans-serif")
            .style("stroke", "red")
            .style("fill", "red")
        })
        .on("mouseout", function (d) {
          d3.select(this)
            .style("font", "25px sans-serif")
            .style("fill", "red")
            .style("stroke", "red")
        })
        .attr("fill", "black")
        .append("title")
        .text(d => `Mortality Rate (%):\n${d.Cases}% \nin ${d.Country} country`);
    })// End Sars outbreak 4

    Promise.all([
      d3.json("https://merssummary-d0933.firebaseio.com/MersSummary.json"),
      d3.json("https://sarssummary-84e13.firebaseio.com/SarsSummary.json")
    ]).then((datasets) => {
      vis.MersData = datasets[0]
      vis.SarsData = datasets[1]
      console.log(vis.MersData)
      console.log(vis.SarsData)
      vis.update("mers")
    })
  }

  // This update() method gets called you change your data.
  update(virus) {
    const vis = this;

    vis.xLabel.text(`${virus}`)

    vis.data = (virus === "mers") ? vis.MersData : vis.SarsData;
    vis.xLabel.text(` ${virus}`)

    //using max function, it will loop through the data and get the highest number of y value.
    const max = d3.max(vis.data, d => d.Number)
    const min = d3.min(vis.data, d => d.Number) * 0.55

    const y = d3.scaleLinear()
      .domain([min, max]) //highest y value.
      .range([HEIGHT, 0]) //minimum and maximum value .

    const x = d3.scaleBand()
      .domain(vis.data.map(d => d.Year))
      .range([0, WIDTH])
      .padding(0.2)

    const xAxisCall = d3.axisBottom(x)
    vis.xAxisGroup.transition().duration(500).call(xAxisCall)
      .style("fill", "grey")
      .selectAll("text")
      .attr("y", 0)
      .attr("x", 9)
      .attr("dy", ".50em")
      .attr("transform", "rotate(70)")
      .style("fill", "blue")
      .style("font", "13px sans-serif")
      .style("text-anchor", "start");


    const yAxisCall = d3.axisLeft(y)
    vis.yAxisGroup.transition().duration(500).call(yAxisCall)
      .style("fill", "grey")

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
      .attr("height", d => HEIGHT - y(d.Number))


    // ENTER
    rects.enter().append("rect")
      .attr("x", d => x(d.Year))
      .attr("width", x.bandwidth)
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
      .attr("stroke-width", 3)
  }
}


