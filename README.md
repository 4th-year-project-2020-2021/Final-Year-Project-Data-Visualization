<h2 align="center">
    Final Year Project
</h3>

<h3 align="center">
    A collection of react components to render common data visualization charts, such as line/area/bar charts, scatterplots, pie and donut charts.
</h4>

## Contents
- [Group Members](#group-members)
- [Repository Description](#repository-description)
- [Program Overview](#program-overview)
- [Software Requirements](#software-requirements)
- [Running the Program](#running-the-program)
- [Designated Tasks](#designated-tasks)
- [Screens](#screens)
- [Referances](#referances)

## Group members
|    Students   | Student Number  |
| ------------- |:-:|
|    Jina Kim   |    G00353420    | 
|  Shirin Nagle |    G00363458    | 
|  Grace Keane  |    G00359990    | 

<br>

## Repository Description 

## Program Overview

## Software Requirements

## Running the Program
To get started developing right away:
<br>
* `git clone https://github.com/4th-year-project-2020-2021/Final-Year-Project-Data-Visualization.git`
<br>
* install all project dependencies with  `npm install`
<br>
* start the development server with `npm start`
<br>
* Navigate to http://localhost:3000/ on your browser.

- Screencast of how to run the program goes here


## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico 
│   └── index.html 
└── src
    ├── Components
    │   ├── GlobalStyle.js # Global styles.
    │   ├── App.js # This is the root of this app. 
    │   ├── ChartWrapper1.js
    │   ├── ChartWrapper2.js
    │   ├── Header.js
    │   └── Router.js
    ├── D3
    │   ├── D3Comparison.js 
    │   ├── D3MersSars.js 
    │   ├── D3Piechart.js
    │   ├── SymptomDropdown.js
    │   ├── VirusDropdown.js
    │   └── Router.js
    ├── Routes
    │   ├── Comparison.js 
    │   ├── Covid19.js 
    │   ├── Home.js
    │   ├── MersAndSars.js
    │   ├── Smallpox.js
    │   └── Upload.js
    └── index.js # It is used for DOM rendering only.
```

<br>

## Designated Tasks
### Grace - Covid-19 component & Home component

- [x] World Map using API
- [x] Search 
- [ ] Home screen
- [ ] Covid-19 Line Graphs
- [ ] Customize Graph

<br>

### Jina - Mers and Sars component & Comparison component

I consider D3 to be the standard library for data visualization on the web.
The main purpose of every work is that making interactive visualization applications and integrating D3.js in React.

- [x] Create interactive bar charts.
- [x] Add scatter plots.
- [x] Add line charts.
- [x] Add Pie charts.
- [x] User Authentication using Firebase .  -- Deleted!
- [ ] Add World Map.
- [ ] User Authentication.


<br>

### Shirin - Smallpox component & Upload component

- [x] World Map 
- [ ] Auto Generated Graph

<br>

## Screens

- [x] Home
- [x] Covid-19
- [x] Mers and Sars
- [x] Small pox
- [x] Comparison
- [x] Upload

## API/ CSV file Referances
[1] COVID-19 card data (NovelCOVID API) - https://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest <br>
[2] COVID-19 map data (NovelCOVID API) - https://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest#34f61547-12f7-4c8b-8326-c3894d9ceea7 <br>
[3] COVID-19 line graph API data - https://disease.sh/docs/#/COVID-19%3A%20JHUCSSE/get_v3_covid_19_historical<br>
[4] Mers and Sars datasets - https://www.kaggle.com/ <br>
[5] Sars outbreak - https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7312089/<br>
[6] Sars - https://www.who.int/csr/sars/country/2003_07_11/en/<br>
[7] Used to get information for Sars and Mers) - https://journals.sagepub.com/doi/full/10.1177/0165551520954674<br>
[8] <br>

