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
client = MongoClient(connection, tlsAllowInvalidCertificates=True)
db = client['Example'] 
collections = db['AgeData']

ageRisk = Blueprint("age", __name__)


@ageRisk.route("/api/ageRisk")
def age():

    ages = []
    #get all the items
    cursor = collections.find({})
    for document in cursor:
        ages.append({"_id": JSONEncoder().encode(document["_id"]),"AgeRange": document["AgeRange"], "PercentOfdeceased": document["PercentOfdeceased"]})
    return jsonify(data=ages)
# The ageRisk api is trying to to return individual entries but there is only 1 id and the data is stored as an array. 