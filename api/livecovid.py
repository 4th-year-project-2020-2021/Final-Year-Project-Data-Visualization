from flask import Flask, render_template
import requests
import json

app = Flask(__name__, template_folder='templates')

@app.route('/', methods=['GET'])
def index():
    # API data link
    req = requests.get('https://corona.lmao.ninja/v2/all')
    data = req.content
    return render_template('index.html', data=data)