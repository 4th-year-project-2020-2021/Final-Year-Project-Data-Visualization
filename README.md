<h2 align="center">
    Final Year Project
</h3>

<h3 align="center">
    A collection of react components to render common data visualizations such as line graphs, pie charts ect as well as live data visualizations and statistics.
</h4>

## Contents
- [Group Members](#group-members)
- [Program Overview](#program-overview)
- [Software Requirements](#software-requirements)
- [Running the Program](#running-the-program)
- [Run web service](#run-web-service)
- [Technology stack](#technology-stack)
- [Designated Tasks](#designated-tasks)
- [Screens](#screens)
- [Referances](#referances)

## Repository Description 

```bash
├── README.md - This file.
├── package.json 
├── public
│   ├── favicon.ico 
│   └── index.html 
└── src
    ├── D3ComparisonComponents
    │   ├── ChartWrapper2.js 
    │   └── D3Components
    │       ├── D3Comparison.js 
    │       ├── D3PieChart.js
    │       └── SymptomDropdown.js 
    ├── D3MersSarsComponents
    │   ├── ChartWrapper.js 
    │   └── D3Components
    │      ├── D3MersSars.js
    │      └── VirusDropdown.js 
    ├── FirebaseAuth
    │   ├── Auth.js 
    │   ├── AuthForm.js 
    │   ├── Discussion.js 
    │   ├── firebase.js 
    │   ├── Message.js 
    │   ├── Profile.js 
    │   ├── Factory.js 
    │   └── AuthStyles
    │       └── authStyles.css
    ├── CovidComponents
    │   ├── InfoBox.js
    │   ├── InfoBox2.js  
    │   ├── LineGraph.js 
    │   ├── Map.js 
    │   ├── Table.js 
    │   ├── util.js 
    ├── Components
    │   ├── App.js
    │   ├── Navigation.js  
    │   └── Router.js 
    ├── css
    │   ├── styling.css # Covid-19 page styling
    ├── Routes
    │   ├── Comparison.js 
    │   ├── Covid19.js # Live interactive Covid-19 maps, cards and a line graph
    │   ├── Stats.js # Database visuals & statistics
    │   ├── Home.js # Home screen code
    │   ├── MersAndSars.js  
    │   ├── Smallpox.js 
    │   └── Upload.js 
    ├── App.js
    └── index.js
    
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
$ flask run
 * Running on http://127.0.0.1:5000/
 ```

## Technology stack

- React in the Client side.

- Flask, MongoDB in the backend.

- Mongo Atlas as Managed Mongo Database service in the cloud.

- Heroku Cloud Platform for deploying API and React App.

- D3 for Data visualization. (Inside Mers,Sars,Comparison components)

- Firebase Realtime Database for handling user authenticaton and storing Mers, Sars, Comparison datasets.

- Cloud Firestore (cloud-hosted, NoSQL database) for discussion page (User can Crate, Read, Update, Delete their messages in this page).

- Architecture image goes here**

## Designated Tasks

### Grace - Covid-19 component & Home component

- [x] World Maps using API
- [x] Glabal data cards
- [x] Drop down function
- [x] Covid-19 table
- [ ] Interactive Covid-19 map
- [x] Covid-19 last 120 days Line Graph
- [x] Home Screen
- [x] Add review / see all rewiews
- [ ] Stats
- [ ] Interactive cases list
- [ ] Comparison pie chart

### Jina - Mers_Sars page & Comparison page & User Authentication (Firebase) & Discussion page (Cloud Firestore)

I consider D3 to be the standard library for data visualization on the web.
The main purpose of every work is that making interactive visualization applications and integrating D3.js in React.

- [x] Interactive Bar charts with dropdown button Flicking between datasets. 
- [x] Scatter plots.
- [x] Line graphs.
- [x] Pie chart.
- [x] Comparison page. (Comparisions of Covid-19, Mers and Sars) - Data Visualization with D3
- [x] Mers and Sars page. - Data Visualization with D3
- [x] Login and Register functionalities ( Firebase ).
- [x] Profile page. - users can edit their profile name.
- [x] Discussion page - Added CRUD(Create, read, update and delete) functionalities. ( Firestore ).

- Users can view our Message Board.
- USers can create their own Account (Email, Google account, and Github account)
- Users can log into their Account.
- Logged in users can post their own messages on the Message Board.
- Logged in users can edit and delete their messages they have created.
- Logged in users can edit their profile name.

### Shirin - Smallpox component & Upload component

- [x] World Map 
- [x] Connection to MongoDB Atlas
- [ ] Auto Generated Graph
- [ ] Flask backend
- [ ] API routes for connecting to MongoDB Atlas
- [ ] Stats

## Screens

- [x] Home
- [x] Covid-19
- [x] Stats
- [x] Mers and Sars
- [x] Comparison
- [x] Small pox
- [x] Upload
- [X] Login & Register
- [X] Profile
- [X] Discussion

## API/ CSV file and information Referances
[1] COVID-19 card data (NovelCOVID API) - https://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest <br>
[2] COVID-19 map data (NovelCOVID API) - https://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest#34f61547-12f7-4c8b-8326-c3894d9ceea7 <br>
[3] COVID-19 line graph API data - https://disease.sh/docs/#/COVID-19%3A%20JHUCSSE/get_v3_covid_19_historical<br>
[4] Mers and Sars datasets - https://www.kaggle.com/ <br>
[5] Sars outbreak - https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7312089/<br>
[6] Sars - https://www.who.int/csr/sars/country/2003_07_11/en/<br>
[7] Used to get information for Sars and Mers) - https://journals.sagepub.com/doi/full/10.1177/0165551520954674<br>
[8] Difference between Flu and COVID-19 - https://www.cdc.gov/flu/symptoms/flu-vs-covid19.htm<br>
[9] Smallpox data https://ourworldindata.org/smallpox<br>


