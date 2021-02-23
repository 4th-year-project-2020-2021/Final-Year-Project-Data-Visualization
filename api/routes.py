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
db = client['Example'] # may need to change connection string to Example, or client to Cluster0
# db = client.get_database('Example')
collections = db['sampleData']


# Blueprint - each blueprint will be 1 route
indexRoute = Blueprint("index", __name__)
createRoute = Blueprint("create",__name__)


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
    collections.insert_one(item)
    return jsonify()


#https://www.youtube.com/watch?v=s4vMgOfbBzs