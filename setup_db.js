use activities_db;

// Create activities collection and insert sample data
db.activities.insertMany([
  {
    name: "Coding Workshop",
    description: "Learn programming fundamentals",
    schedule: "Every Monday, 2-4 PM",
    max_participants: 12,
    participants: ["michael@mergington.edu", "daniel@mergington.edu"]
  },
  {
    name: "Study Group",
    description: "Group study session for CS courses",
    schedule: "Wednesdays and Fridays, 3-5 PM",
    max_participants: 20,
    participants: ["emma@mergington.edu", "sophia@mergington.edu"]
  }
]);

// Print results
print("\nCollections in activities_db:");
db.getCollectionNames().forEach(printjson);
print("\nSample activities:");
db.activities.find().forEach(printjson);
