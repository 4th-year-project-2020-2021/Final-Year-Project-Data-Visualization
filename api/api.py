import time
from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from routes import indexRoute, createRoute, itemRoute, getDescriptionRoute, updateRoute, deleteRoute
from rating import ratingRoute, indexRating
from smallpox import smallpoxRoute, smallPoxFilter, smallpox1921, smallpox1922
from age import ageRisk
import os

import flask


#app = Flask(__name__, static_folder='../build', static_url_path='/')# added 27/4
app = Flask(__name__)
CORS(app)  # wrap app in CORS method


# register the blueprints
app.register_blueprint(indexRoute)
app.register_blueprint(createRoute)
app.register_blueprint(itemRoute)
app.register_blueprint(smallpoxRoute)
app.register_blueprint(smallPoxFilter)
app.register_blueprint(getDescriptionRoute)
app.register_blueprint(ratingRoute)
app.register_blueprint(indexRating)
app.register_blueprint(ageRisk)
app.register_blueprint(smallpox1921)
app.register_blueprint(smallpox1922)

if __name__ == "__main__":
    app.run(debug=True) #uncomment this line if everything breaks
    #app.run(debug=True, port=os.environ.get('PORT', 80))  # added 27/4



# https://stackoverflow.com/questions/48713701/react-flask-heroku-app-is-not-displaying-frontend

# https://towardsdatascience.com/reactjs-python-flask-on-heroku-2a308272886a

# https://www.youtube.com/watch?v=Urx8Kj00zsI&t=0s - creating api
# https://github.com/PrettyPrinted/flask-movie-api/tree/master/api - https://github.com/benawad/react-movie-list
# https://www.youtube.com/watch?v=06pWsB_hoD4 - how to build react frontend using flask api
# https://opensource.com/article/18/4/flask - about flask
# https://medium.com/@gitaumoses4/deploying-a-flask-application-on-heroku-e509e5c76524
# https://devcenter.heroku.com/articles/flask-memcache#prerequisites