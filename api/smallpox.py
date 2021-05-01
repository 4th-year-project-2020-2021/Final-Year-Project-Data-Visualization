from flask import Blueprint, request, jsonify
import json
import pymongo
import os
import sys
from pymongo import MongoClient
from bson import ObjectId
import pytest
from boto.s3.connection import S3Connection
# json encoder to manage MongoDB ObjectID


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)


# mongodb config
#s3 = S3Connection(os.environ['S3_KEY'], os.environ['S3_SECRET'])
#connection = s3
connection = 'mongodb+srv://DVPSN:CvnhJ5YPLxunTLs@cluster0.s5kpm.mongodb.net/Cluster0?retryWrites=true&w=majority'
client = MongoClient(connection)
db = client['Example']
collection = db['uploadedData']


# Blueprint - each blueprint will be 1 route
smallpoxRoute = Blueprint("sp",__name__)
smallPoxFilter  = Blueprint("year", __name__)

# routes


@smallpoxRoute.route("/api/smallpox")
def sp():

    smallpox = []
    #get all the items
    cursor = collection.find({})
    for document in cursor:
        smallpox.append({"_id": JSONEncoder().encode(document["_id"]),"Entity": document["Entity"],"Code": document["Code"], "Year": document["Year"],"Cases": document["Smallpox cases"]})
    return jsonify(data=smallpox)

@smallPoxFilter.route("/api/smallpox/<Year>")
def filterByYear(Year):
    year = []
    cursor = collection.find({})
    for y in cursor:
        year.append({"_id": JSONEncoder().encode(y["_id"]),"Entity": y["Entity"],"Code": y["Code"], "Year": y["Year"],"Cases": y["Smallpox cases"]})
    return jsonify(data=year)

# https://www.youtube.com/watch?v=s4vMgOfbBzs
#items.append({"_id": JSONEncoder().encode(document["_id"]),"name": document["name"], "description": document["description "]})
