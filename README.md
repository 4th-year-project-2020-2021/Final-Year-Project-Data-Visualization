<h2 align="center">
    Final Year Project
</h3>

<h3 align="center">
    Data Visualisation & Analysis
</h4>

<p align="center">
  <img src="./Images/GMIT.jpeg" width=600 height=250/>
</p>

## Contents
- [Program Overview](#program-overview)
- [Software Requirements](#software-requirements)
- [Running the Program](#running-the-program)
- [Running the Tests](#running-the-tests)
- [Run the Web Service](#run-web-service)
- [Technology stack](#technology-stack)
- [Designated Tasks](#designated-tasks)
- [Screens](#screens)
- [Referances](#API-and-CSV-file-and-information-referances)

## Program Overview
Data visualisation and analysis techniques have been the front and center in the efforts to communicate the statistics as well as the science around the COVID-19 virus. Interactive dashboards with several charts and graphs surfaced in different formats to offer concise ways to make sense of complex and overwhelming pandemic data sets. These techniques have become essential in informing the general public as well as healthcare providers, scientists and governments of the overall COVID-19 growth. 

As a result, the team felt it would be beneficial as well as informative to create a web application that would take large COVID-19 data sets as well as other epidemic data and create a series of data visualisations from it. As well as compare past and present viruses to distinguish similarities along with differences. This would provide a clear view of COVID-19 and how similar viruses have spread.

Our final year project is based on the data visualization and analysis of various viruses such as COVID-19, Sars and Mers and Smallpox. Our project follows a frontend (React), middleware (Python/ Flask) and backend (MongoDB Atlas, Firebase) architecture. This project allows data to be displayed on various data visualizations such as maps, bar charts, line graphs, pie charts, tables etc, using JavaScript, Python and D3. Statistics and live graphs are generated using continuously updating data from a given API and stored data from MongoDB Atlas. GET and POST requests are used to send and receive data from the database. Data comparisons and auto-generated graphs are also incorporated into this project. There is also a login functionality that uses Firebase to record user log in data. Once our project is fully completed it will be diploid to Heroku. 

- Screencast goes here 

## Software Requirements
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Anaconda3 Version (Python 3.8.5)](https://www.anaconda.com/products/individual)
- [cmder](https://cmder.net/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_emea_ireland_search_core_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624527&gclid=Cj0KCQiA-aGCBhCwARIsAHDl5x8_dfnh9PWedNlnlRjFzg8yn4SIV5UxJTl9bBAb7SfrZy6IE2JXCdoaAp7tEALw_wcB)
- [Firebase](https://firebase.google.com/)
- [Heroku](https://www.heroku.com/)
- [git](https://git-scm.com/downloads)

## Running the Program
1) In your command line terminal: `git clone https://github.com/4th-year-project-2020-2021/Final-Year-Project-Data-Visualization.git`
2) Install all project dependencies: `npm install`
3) Start the development server: `npm start`
4) Navigate to http://localhost:3000/ on your browser.

- Screencast of how to run the program goes here**

## Running the Tests
1) cd into the <b>/program/</b> directory
2) `cd api`
3) `cd Tests`
4) In the terminal type: `pytest`

- Screencast of how to run the tests goes here**

### Running the Web Service
```bash
$ pip install -r requirements.txt
$ cd api
$ flask run
 * Running on http://127.0.0.1:5000/
 ```

 - Screencast of how to run the web servise goes here**

## Technology stack

- React in the Client side.
- Flask, MongoDB in the backend.
- Mongo Atlas as Managed Mongo Database service in the cloud.
- Heroku Cloud Platform for deploying API and React App.
- D3 for Data visualization. (Inside Mers,Sars,Comparison components)
- Firebase Realtime Database for handling user authenticaton and storing Mers, Sars, Comparison datasets.
- Cloud Firestore (cloud-hosted, NoSQL database) for discussion page (User can Create, Read, Update, Delete their messages in this page).

<p align="center">
  <img src="./Images/fremp.PNG" width=600 height=300/>
</p>

## Designated Tasks

### Grace - Covid-19 component & Home component

- [x] World Maps using API
- [x] Glabal data cards
- [x] Drop down function
- [x] Covid-19 table
- [x] Interactive Covid-19 map
- [x] Covid-19 last 120 days Line Graph
- [x] Home Screen styling
- [x] Add review functionality
- [ ] Stats
- [x] Interactive cases list
- [ ] Comparison pie chart
- [ ] Dissertation writing

### Jina - Mers_Sars page & Comparison page & User Authentication (Firebase) & Discussion page (Cloud Firestore)

I consider D3 to be the standard library for data visualization on the web.
The main purpose of every work is that making interactive visualization applications and integrating D3.js in React.

- [x] Interactive Bar charts with dropdown button Flicking between datasets
- [x] Scatter plots
- [x] Line graphs
- [x] Comparison pie chart (Covid19, Mers and Sars)
- [x] Comparison page. (Comparisions of Covid-19, Mers and Sars) - Data Visualization with D3
- [x] Mers and Sars page. - Data Visualization with D3
- [x] Login and Register functionalities ( Firebase )
- [x] Profile page. - users can edit their profile name
- [x] Discussion page - Added CRUD(Create, read, update and delete) functionalities. ( Firestore )
- [ ] Dissertation writing

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
- [x] Flask backend
- [ ] API routes for connecting to MongoDB Atlas
- [ ] Stats
- [x] Home Screen see all reviews functionality
- [ ] Dissertation writing

## Screens
- Home
- Covid-19
- Stats
- Mers and Sars
- Comparison
- Small pox
- Upload
- Login & Register
- Profile
- Discussion

## API and CSV file and information Referances
[1] COVID-19 card data (NovelCOVID API) - https://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest <br>
[2] COVID-19 map data (NovelCOVID API) - https://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest#34f61547-12f7-4c8b-8326-c3894d9ceea7 <br>
[3] COVID-19 line graph API data - https://disease.sh/docs/#/COVID-19%3A%20JHUCSSE/get_v3_covid_19_historical<br>
[4] Mers and Sars datasets - https://www.kaggle.com/ <br>
[5] Sars outbreak - https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7312089/<br>
[6] Sars - https://www.who.int/csr/sars/country/2003_07_11/en/<br>
[7] Used to get information for Sars and Mers) - https://journals.sagepub.com/doi/full/10.1177/0165551520954674<br>
[8] Difference between Flu and COVID-19 - https://www.cdc.gov/flu/symptoms/flu-vs-covid19.htm<br>
[9] Smallpox data https://ourworldindata.org/smallpox<br>
[10] Mers data https://www.hindawi.com/journals/bmri/2020/9629747/<br>
[11] Comparisons of Mers,Sars,Covid-19 https://pulmonarychronicles.com/index.php/pulmonarychronicles/article/view/795/1687 <br>