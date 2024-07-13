from pymongo import MongoClient
client = MongoClient()
client = MongoClient("mongodb://localhost:27017/")
financial_house = client.financial_house