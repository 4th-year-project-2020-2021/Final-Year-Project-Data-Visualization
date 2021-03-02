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
    ├── Routes
    │   ├── Comparison.js # Container for D3Comparison.js
    │   ├── Covid19.js # Live Covid-19 map, search & database statistics
    │   ├── Home.js # Home screen code
    │   ├── MersAndSars.js  # Container for D3MerSars.js
    │   ├── Smallpox.js 
    │   └── Upload.js 
    └── index.js # It is used for DOM rendering only.
```


## Program Overview
Our final year project is based on the data visualization and analysis of various viruses.

## Software Requirements
- Visual Studio Code
- Anaconda
- cmder
- git

## Running the Program
To get started developing right away:

1) `git clone https://github.com/4th-year-project-2020-2021/Final-Year-Project-Data-Visualization.git`

2) install all project dependencies with  `npm install`

3) start the development server with `npm start`

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

- [x] World Map using API
- [x] Search 
- [ ] Covid-19 Line Graph
- [ ] Home Screen
- [ ] Deploy to Heroku

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
- [ ] Auto Generated Graph
- [ ] Flask backend
- [ ] API routes for connecting to MongoDB Atlas
- [x] Connection to MongoDB Atlas

## Screens

- [x] Home
- [x] Covid-19
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
[9] Smallpox data https://ourworldindata.org/smallpox
[10] <br>

