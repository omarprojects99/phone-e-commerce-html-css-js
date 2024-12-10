from pymongo import MongoClient

# Replace this with your MongoDB URI
connection_string = "mongodb://localhost:27017"  # Or your MongoDB Atlas URI

try:
    # Connect to MongoDB
    client = MongoClient(connection_string)
    print("Connected to MongoDB!")

    # Access a database
    db = client['test_database']  # Replace with your database name

    # Access a collection
    collection = db['test_collection']  # Replace with your collection name

    # Insert a sample document
    sample_document = {"name": "omar", "age": 21, "job": "cyber sec architecte"}
    result = collection.insert_one(sample_document)
    print(f"Document inserted with ID: {result.inserted_id}")

    # Retrieve and print all documents
    for doc in collection.find():
        print(doc)

except Exception as e:
    print(f"Error connecting to MongoDB: {e}")
