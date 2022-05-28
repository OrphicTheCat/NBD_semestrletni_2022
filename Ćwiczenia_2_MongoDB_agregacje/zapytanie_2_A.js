printjson(db.people.aggregate([
    {$unwind: "$credit"},
    {$group: {
        _id: "$credit.currency",
        total_credit: {$sum: {$toDecimal: "$credit.balance"}}
    }},
{$project: {
    "_id": 0, 
    "waluta": "$_id", 
    "łączna liczba środków pozostałych na kartach kredytowych": "$total_credit"}
}
]
).toArray())