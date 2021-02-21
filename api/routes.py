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
# db = client.get_database('Example')
collections = db['sampleData']


# Blueprint - each blueprint will be 1 route
indexRoute = Blueprint("index", __name__)


# routes
@indexRoute.route('/api/sampleData')
def index():
    return jsonify(data = "something")


#https://www.youtube.com/watch?v=s4vMgOfbBzs