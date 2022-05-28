printjson(
    db.people.find(
        {$and:[{"weight":{$gte:"68"}}, {"weight":{$lte:"71.5"}}]}
    ).toArray())