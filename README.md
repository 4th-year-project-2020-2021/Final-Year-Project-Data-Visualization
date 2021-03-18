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
- [Run web service](#run-web-service)
- [Technology stack](#technology-stack)
- [Designated Tasks](#designated-tasks)
- [Screens](#screens)
- [Referances](#referances)

## Group members
|    Students   | Student Number  |
| ------------- |:-:|
|    Jina Kim   |    G00353420    | 
|  Shirin Nagle |    G00363458    | 
|  Grace Keane  |    G00359990    | 

## Repository Description 

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
    │   ├── ChartWrapper1.js # Container for D3MersSars.js
    │   ├── ChartWrapper2.js # Container for D3Comparison.js
    │   ├── Header.js # It displays Navbar
    │   └── Router.js # It enables the navigation among views of various components in this web application.
    ├── D3 # Data visualization with D3 - All codes are written in JavaScript.
    │   ├── D3Comparison.js # It shows how COVID-19 compares to past epidemics. e.g. Mers, Sars and covid-19.
    │   ├── D3MersSars.js # It displays various graphs and comparison of Mers and Sars viruses.
    │   ├── D3Piechart.js # It displays a pie chart (% of covid-19 deaths between men and women).
    │   ├── SymptomDropdown.js # It contains dropdown button to display three different datasets(Covid-19, Mers,Sars symptoms) flicking between them. 
    │   └── VirusDropdown.js # It contains dropdown button to display two different datasets(Mers and Sars) flicking between them.
    ├── LoginForm
    │   └── Login.js # It contains login functionality.
    ├── css
    │   ├── styling.css # Covid-19 page styling
    ├── CovidComponents
    │   ├── InfoBox.js
    │   ├── InfoBox2.js  
    │   ├── LineGraph.js 
    │   ├── Map.js 
    │   ├── Table.js 
    │   ├── util.js 
    ├── Routes
    │   ├── Comparison.js # Container for D3Comparison.js
    │   ├── Covid19.js # Live interactive Covid-19 maps, cards and a line graph
    │   ├── Stats.js # Database visuals & statistics
    │   ├── Home.js # Home screen code
    │   ├── MersAndSars.js  # Container for D3MerSars.js
    │   ├── Smallpox.js 
    │   └── Upload.js 
    └── index.js # It is used for DOM rendering only.
    
```

## Program Overview
Our final year project is based on the data visualization and analysis of various viruses such as COVID-19, Sars and Mers, Smallpox. Our project follows a frontend (React), middleware (Python/ Flask) and backend (MongoDB Atlas) architecture. This project allows data to be displayed on various data visualizations such as maps, bar charts, line graphs, pie charts etc, using JavaScript, Python and D3. Statistics and live graphs are generated using continuously updating data from a given API that is recorded in MongoDB Atlas. GET and POST requests will be used to send and receive data from the database. Data comparisons and auto-generated graphs are also incorporated into this project. There is login functionality that uses Firebase to record user log in data. Once our project is fully completed it will be diploid to Heroku. 

## Software Requirements
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Anaconda3 Version (Python 3.8.5)](https://www.anaconda.com/products/individual)
- [cmder](https://cmder.net/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_emea_ireland_search_core_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624527&gclid=Cj0KCQiA-aGCBhCwARIsAHDl5x8_dfnh9PWedNlnlRjFzg8yn4SIV5UxJTl9bBAb7SfrZy6IE2JXCdoaAp7tEALw_wcB)
- [git](https://git-scm.com/downloads)
- [Heroku](https://www.heroku.com/)


## Running the Program
To get started developing the right away:

1) `git clone https://github.com/4th-year-project-2020-2021/Final-Year-Project-Data-Visualization.git`

2) Install all project dependencies with  `npm install`

3) Start the development server with `npm start`

4) Navigate to http://localhost:3000/ on your browser.

- Screencast of how to run the program goes here**

### Run web service

```bash
$ pip install -r requirements.txt
$ cd api
$ set FLASK_APP=api.py
$ python -m flask run
 * Running on http://127.0.0.1:5000/
 ```

## Technology stack

- React in the Client side.

- Flask, MongoDB in the backend.

- Mongo Atlas as Managed Mongo Database service in the cloud.

- Heroku Cloud Platform for deploying API and React App.

- Writing code using D3, JavaScript, and React Hooks.

- JWT (Json Web Token) will be used to authenticate users.

- Architecture image goes here**

## Designated Tasks
### Grace - Covid-19 component & Home component

- [x] World Maps using API
- [x] Glabal data cards
- [x] Drop down function
- [x] Covid-19 table
- [ ] Interactive Covid-19 map
- [x] Covid-19 last 120 days Line Graph
- [ ] Home Screen

### Jina - Mers and Sars component & Comparison component & User login functionality

I consider D3 to be the standard library for data visualization on the web.
The main purpose of every work is that making interactive visualization applications and integrating D3.js in React.

- [x] Create interactive bar charts.
- [x] Add scatter plots.
- [x] Add line charts.
- [x] Add Pie charts.
- [x] User Authentication using Firebase .  -- Deleted!
- [ ] Implement JWT (Json Web Token) is used to authenticate users

### Shirin - Smallpox component & Upload component

- [x] World Map 
- [x] Connection to MongoDB Atlas
- [ ] Auto Generated Graph
- [ ] Flask backend
- [ ] API routes for connecting to MongoDB Atlas

## Screens

- [x] Home
- [x] Covid-19
- [x] Stats
- [x] Mers and Sars
- [x] Small pox
- [x] Comparison
- [x] Upload

## API/ CSV file and information Referances
[1] COVID-19 card data (NovelCOVID API) - https://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest <br>
[2] COVID-19 map data (NovelCOVID API) - https://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest#34f61547-12f7-4c8b-8326-c3894d9ceea7 <br>
[3] COVID-19 line graph API data - https://disease.sh/docs/#/COVID-19%3A%20JHUCSSE/get_v3_covid_19_historical<br>
[4] Mers and Sars datasets - https://www.kaggle.com/ <br>
[5] Sars outbreak - https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7312089/<br>
[6] Sars - https://www.who.int/csr/sars/country/2003_07_11/en/<br>
[7] Used to get information for Sars and Mers) - https://journals.sagepub.com/doi/full/10.1177/0165551520954674<br>
[8] Difference between Flu and COVID-19 - https://www.cdc.gov/flu/symptoms/flu-vs-covid19.htm<br>
[9] flask-praetorian - https://flask-praetorian.readthedocs.io/en/latest/index.html<br>
[10] Smallpox data https://ourworldindata.org/smallpox<br>

