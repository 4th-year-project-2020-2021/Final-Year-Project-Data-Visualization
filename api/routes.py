from flask import Blueprint, request, jsonify
import json
import pymongo
import os
import sys
from pymongo import MongoClient
from bson import ObjectId

#json encoder to manage MongoDB ObjectID
class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o,ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)

# mongodb config
connection = 'mongodb+srv://DVPSN:CvnhJ5YPLxunTLs@cluster0.s5kpm.mongodb.net/Cluster0?retryWrites=true&w=majority'
client = MongoClient(connection)
db = client['Example'] 
collections = db['sampleData']


# Blueprint - each blueprint will be 1 route
indexRoute = Blueprint("index", __name__)
createRoute = Blueprint("create",__name__)
loginRoute = Blueprint("login",__name__)


# routes
@indexRoute.route('/api/sampleData')
def index():
    return jsonify(data = "something")
    

@createRoute.route('/api/create', methods=['POST'])
def create():
    print(request.json, flush=True)

    name = request.json.get("name")
    description = request.json.get("description")
    amount = request.json.get("amount")

    item ={
        "name": name,
        "description": description,
        "amount": amount
    }
    # inserts a single document into the database, 
    collections.insert_one(item)
    return jsonify()

@app.route('/src/LoginForm/login', methods=['POST'])
def login():
    """
    Logs a user in by parsing a POST request containing user credentials and
    issuing a JWT token.
    """
    req = flask.request.get_json(force=True)
    username = req.get('username', None)
    password = req.get('password', None)
    user = guard.authenticate(username, password)
    ret = {'access_token': guard.encode_jwt_token(user)}
    return ret, 200

#https://www.youtube.com/watch?v=s4vMgOfbBzs