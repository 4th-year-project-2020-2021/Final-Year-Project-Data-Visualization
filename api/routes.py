from flask import Blueprint, request, jsonify
import json
#import pymongo
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
collections = db['sampleData']


# Blueprint - each blueprint will be 1 route
indexRoute = Blueprint("index", __name__)
createRoute = Blueprint("create",__name__)
itemRoute = Blueprint("item",__name__)
getDescriptionRoute = Blueprint("getDescription",__name__)

# routes
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

#single item route
@itemRoute.route("/api/item/<id>", methods=["GET"])
def item(id):
    cursor = collections.find_one({"_id": ObjectId(id)})
    print(cursor, flush=True)
    
    #return the encoded item
    return jsonify(data=JSONEncoder().encode(cursor))

#all items route
@indexRoute.route("/api/items")
def index():

    items = []
    #get all items from the collection
    cursor = collections.find({})
    #loop to get the needed data
    for document in cursor:
       #we need to encode the MongoDBId here
       items.append({"_id": JSONEncoder().encode(document["_id"])})
    #return the items
    return jsonify(data= items)

@getDescriptionRoute.route("/api/itemsDescriptions")
def getDescription():
    description_json = []
    if collections.find({}):
        for description in collections.find({}).sort("description"):
            description_json.append({"description": description['description'], "id": str(description['_id'])})
    return json.dumps(description_json)


#https://www.youtube.com/watch?v=s4vMgOfbBzs
#items.append({"_id": JSONEncoder().encode(document["_id"]),"name": document["name"], "description": document["description "]})