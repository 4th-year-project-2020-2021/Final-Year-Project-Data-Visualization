import time
from flask import Flask
from flask_cors import CORS
from routes import indexRoute, createRoute, itemRoute, getDescriptionRoute, smallpoxRoute
from rating import ratingRoute, indexRating
from age import ageRisk
import os
import flask


#app = Flask(__name__, static_folder='../build', static_url_path='/')# added 27/4
app = Flask(__name__)
CORS(app) # wrap app in CORS

#@app.route('/', methods=["GET"])# added 27/4
#def index():# added 27/4
    #return app.send_static_file('/build/index.html')# added 27/4

# This handles any errors generated because the app is using ReactRouter
#@app.errorhandler(404)
#def not_found(e):
    #return app.send_static_file('/build/index.html')

# register the blueprints
app.register_blueprint(indexRoute)
app.register_blueprint(createRoute)
app.register_blueprint(itemRoute)
app.register_blueprint(smallpoxRoute)
app.register_blueprint(getDescriptionRoute)
app.register_blueprint(ratingRoute)
app.register_blueprint(indexRating)
app.register_blueprint(ageRisk)

if __name__ == "__main__":
    #app.run(debug=True) #uncomment this line if everything breaks
    app.run(debug=True, port=os.environ.get('PORT',80)) # added 27/4



# mongodb+srv://DVPSN:<CvnhJ5YPLxunTLs>@cluster0.s5kpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
# Replace <password> with the password for the DVPSN user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.
# CvnhJ5YPLxunTLs

#@app.route('/time')
#def get_current_time():
    #return{'time': time.time()}

#@app.route('/hello')
#def say_hello():
   # s = "Finally got it to show from project api yip yip!!"
    #return{'hello': s}
#https://stackoverflow.com/questions/48713701/react-flask-heroku-app-is-not-displaying-frontend

#https://towardsdatascience.com/reactjs-python-flask-on-heroku-2a308272886a

#https://www.youtube.com/watch?v=Urx8Kj00zsI&t=0s - creating api 
#https://github.com/PrettyPrinted/flask-movie-api/tree/master/api - https://github.com/benawad/react-movie-list
#https://www.youtube.com/watch?v=06pWsB_hoD4 - how to build react frontend using flask api
#https://opensource.com/article/18/4/flask - about flask