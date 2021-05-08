from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource, reqparse
import json
import pymongo
import os
import sys
from pymongo import MongoClient
from bson import ObjectId
from boto.s3.connection import S3Connection


#json encoder to manage MongoDB ObjectID
class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o,ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)

# mongodb connection
#s3 = S3Connection(os.environ['S3_KEY'], os.environ['S3_SECRET'])
connection = 'mongodb+srv://DVPSN:CvnhJ5YPLxunTLs@cluster0.s5kpm.mongodb.net/Cluster0?retryWrites=true&w=majority'
#connection = s3
client = MongoClient(connection, tlsAllowInvalidCertificates=True)
db = client['Example'] 
collections = db['sampleData']
collection = db['uploadedData'] 

# Blueprint - each blueprint will be 1 route
indexRoute = Blueprint("index", __name__)
createRoute = Blueprint("create",__name__)
itemRoute = Blueprint("item",__name__)
getDescriptionRoute = Blueprint("getDescription",__name__)
updateRoute = Blueprint("update", __name__)
deleteRoute = Blueprint("delete", __name__)
# routes



#create item 
@createRoute.route('/api/create', methods=['POST'])
def create():
    print(request.json, flush=True)

    name = request.json.get("name")
    description = request.json.get("description")
    temp = request.json.get("amount")
    date = request.json.get("date")

    item ={
        "date": date,
        "name": name,
        "description": description,
        "amount": temp
    }
    # inserts a single document into the database, 
    collections.insert_one(item)
    return jsonify(data = "symptom created successfully")

#all items route
@indexRoute.route("/api/items")
def index():

    items = []
    #get all the items
    cursor = collections.find({})#empty object returns all documents in the collection
    for document in cursor:
        items.append({"_id": JSONEncoder().encode(document["_id"]),"date": document["date"], "name": document["name"],"description": document["description"], "amount": document["amount"]})
    return jsonify(data=items)



#single item route
@itemRoute.route("/api/item/<id>", methods=["GET"])
def items(id):
    cursor = collections.find_one({"_id": ObjectId(id)})#need to parse in order for Mongodb to read
    print(cursor, flush=True)
    #return the encoded item
    return jsonify(data=JSONEncoder().encode(cursor))


@getDescriptionRoute.route("/api/itemsDescriptions")
def getDescription():
    description_json = []
    if collections.find({}):
        for description in collections.find({}).sort("description"):
            description_json.append({"description": description['description'], "id": str(description['_id'])})
    return json.dumps(description_json)

#update item
@updateRoute.route("/api/update/<id>", methods=["PUT"])
def update(id):
    print(request.json, flush=True)
    
    itemid= request.json.get("itemid")
    name = request.json.get("name")
    description = request.json.get("description")
    temp = request.json.get("amount")


    updatedItem = {
        "name": name,
        "description": description,
        "amount": temp
    }

    collection.update_one({"_id": ObjectId(itemid)}, {"$set": updatedItem})
    return jsonify(data = "update response")   


#https://stackoverflow.com/questions/24420857/what-are-flask-blueprints-exactly
#https://www.youtube.com/watch?v=s4vMgOfbBzs
#items.append({"_id": JSONEncoder().encode(document["_id"]),"name": document["name"], "description": document["description "]})
#https://medium.com/swlh/how-to-deploy-a-react-python-flask-project-on-heroku-edb99309311
#https://devcenter.heroku.com/articles/config-vars

#https://medium.com/swlh/how-to-deploy-a-react-python-flask-project-on-heroku-edb99309311