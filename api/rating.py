from flask import Blueprint, request, jsonify
import json
import pymongo
#from dotenv import load_dotenv
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
collections = db['ratings']


# Blueprint - each blueprint will be 1 route
ratingRoute = Blueprint("rating", __name__)

# routes
@ratingRoute.route('/api/create', methods=['POST'])
def rating():
    print(request.json, flush=True)

    rating = request.json.get("rating")

    item ={
        "rating": rating
    }
    # inserts a single document into the database, 
    collections.insert_one(item)
    return jsonify(data = "Successfully submitted rating")



#https://www.youtube.com/watch?v=s4vMgOfbBzs
#items.append({"_id": JSONEncoder().encode(document["_id"]),"name": document["name"], "description": document["description "]})