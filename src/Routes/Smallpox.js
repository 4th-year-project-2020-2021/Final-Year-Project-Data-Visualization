import React, { useEffect, useState } from 'react';
import {Line, Pie,Bar, Radar, Polar, Doughnut, Bubble} from 'react-chartjs-2';
import "../css/styling.css";


const Smallpox = () => {
    //return all smallpox data from database
    const [chartData, setChartData] = useState({});
    const [chartDataBar, setChartDataBar] = useState({});
    const [chartDataPie, setChartDataPie] = useState({});
    const [dropcountries, setDropDownCountries] = useState([]);

    const chart = () => {
        let cases = [];
        let country = [];
        let year = [];

        fetch("/api/smallpox/1921")
        .then(res => res.json()
        ).then(items => {
            console.log(items);
            for (const dataObj of items.data) {
                cases.push(dataObj.Cases);
                country.push(dataObj.Entity);
                year.push(dataObj.Year);
              }
              setChartData({
                labels: country,
                datasets:[
                    {
                        label: 'Cases',
                        fill: false,

                        backgroundColor: 'rgba(75,192,192,1)',
                        lineTension: 0.1,
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 1,
                        data: cases
                      },
                      {
                        label: 'Country',
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 1,
                        data: country
                      },
                      {
                        label: 'Year',
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 1,
                        data: year
                      }


                ]
            })
        })
        .catch(err => {
            console.log(err);
        });
        //console.log(temp, tempDate);
    };


    useEffect(() =>{
        chart();
    },[]);

    const chartBar = () => {
        let cases = [];
        let country = [];

        fetch("/api/smallpox/1922")
        .then(res => res.json()
        ).then(items => {
            console.log(items);
            for (const dataObj of items.data) {
                cases.push(dataObj.Cases);
                country.push(dataObj.Entity);
              }
              setChartDataBar({
                labels: country,
                datasets:[
                    {
                        label: 'Cases',
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 1,
                        data: cases
                      }
                ]
            })
        })
        .catch(err => {
            console.log(err);
        });
    };


    useEffect(() =>{
        chartBar();
    },[]);

    const chartPie = () => {
      let age = [];
      let risk = [];

      fetch("/api/ageRisk")
      .then(res => res.json()
      ).then(items => {
          console.log(items);
          for (const dataObj of items.data) {
              age.push(dataObj.AgeRange);
              risk.push(dataObj.PercentOfdeceased);
            }
            setChartDataPie({
              labels: age,
              datasets:[
                  {
                      label: 'Cases',
                      backgroundColor: [
                        '#663399',
                        '#7953a9',
                        '#8b74bd',
                        '#b9bfff',
                        '#4066e0',
                        '#22277a',
                        '#a9a9a9',
                        '#4bc0c0',
                        '#003350',
                        '#35014F'
                      ],
                      borderWidth: .01,
                      data: risk
                    }
              ]
          })
      })
      .catch(err => {
          console.log(err);
      });
  };


  useEffect(() =>{
      chartPie();
  },[]);


    return (
        <div style={{
            fontSize:"22px",
            fontFamily: "Nanum Gothic",
            color: "dark",
            position: 'absolute',
            width: "40%"
            }}>




            <React.Fragment>
            <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Smallpox Cases 1921", display: true, fontSize:20},
            legend: {display:true, position:'right'},
            scales: {
              yAxes: [
                {
                  ticks: {autoSkip: true, suggestedMin: 0, suggestedMax: 100},
                  gridLines: { display: true}
                }
              ],
              xAxes: [
                {
                  gridLines: {display: true}
                }
              ]
            }
          }}
        />
      </div>
            </React.Fragment>
         <React.Fragment>
             <div>
                 <Bar
                     data={chartDataBar}
                     options={{
            title:{ display:true, text:'Smallpox cases per Country 1922', fontSize:20 },
            legend:{ display:true, position:'right'}
          }}
                 />
             </div>
         </React.Fragment>
         <React.Fragment>
           <div>
           <Doughnut
          data={chartDataPie}
          options={{
            title:{
              display:true,
              text:'Risk of Death By Age',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
         <Polar
          data={chartDataPie}
          options={{
            title:{
              display:true,
              text:'Risk of Death By Age',
              fontSize:20
            },
            legend:{
              display:true,
              position:'left'
            }
          }}
        />

           </div>
         </React.Fragment>

        </div>
    )

}

export default Smallpox