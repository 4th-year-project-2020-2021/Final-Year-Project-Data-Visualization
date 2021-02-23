import time
from flask import Flask
from flask_cors import CORS
#import matplotlib.pyplot as plt
#from pymongo import MongoClient
#from pymongo.errors import ConnectionFailure, InvalidName
from routes import indexRoute, createRoute

connection_url = 'mongodb+srv://DVPSN:CvnhJ5YPLxunTLs@cluster0.s5kpm.mongodb.net/Cluster0?retryWrites=true&w=majority'
app = Flask(__name__)
CORS(app) # wrap app in cors - added 20/2

# register the blueprints
app.register_blueprint(indexRoute)
app.register_blueprint(createRoute)

@app.route('/time')
def get_current_time():
    return{'time': time.time()}

@app.route('/hello')
def say_hello():
    s = "Finally got it to show from project api yip yip!!"
    return{'hello': s}

# To insert a single document into the database, 
# insert_one() function is used 


if __name__ == "__main__":
    app.run(debug=True)
# mongodb+srv://DVPSN:<CvnhJ5YPLxunTLs>@cluster0.s5kpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
# Replace <password> with the password for the DVPSN user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.
# CvnhJ5YPLxunTLs



#https://towardsdatascience.com/reactjs-python-flask-on-heroku-2a308272886a

#https://www.youtube.com/watch?v=Urx8Kj00zsI&t=0s - creating api 
#https://github.com/PrettyPrinted/flask-movie-api/tree/master/api - https://github.com/benawad/react-movie-list
#https://www.youtube.com/watch?v=06pWsB_hoD4 - how to build react frontend using flask api
#https://opensource.com/article/18/4/flask - about flask