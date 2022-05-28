printjson(
    db.people.find(
        {"nationality": "Germany"}
    ).toArray())