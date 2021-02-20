import time
from flask import Flask
import matplotlib.pyplot as plt
#from .models import SmallPox 


app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return{'time': time.time()}

@app.route('/hello')
def say_hello():
    s = "Finally got it to show from project api!!"
    return{'hello': s}

#@app.route('/pox')
#def show_list():
    #pox_list = SmallPox.all()
    #poxs = []
    #for pox in pox_list:
        #poxs.append()
    #l = "Not working yet"
    #return jsonify({'poxs': poxs})





#https://towardsdatascience.com/reactjs-python-flask-on-heroku-2a308272886a

#https://www.youtube.com/watch?v=Urx8Kj00zsI&t=0s - creating api 
#https://github.com/PrettyPrinted/flask-movie-api/tree/master/api - https://github.com/benawad/react-movie-list
#https://www.youtube.com/watch?v=06pWsB_hoD4 - how to build react frontend using flask api
#https://opensource.com/article/18/4/flask - about flask