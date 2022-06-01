// Przed wykonaniem zapytania dokonałam konwersji balance ze stringu na float za pomocą skryptu:
//db.people_converted.find({"credit":{"$exists":true}}).forEach(function(data){
     // for(var ii=0;ii<data.credit.length;ii++) {db.people_converted.update(
         // {"_id": data._id, "credit.number": data.credit[ii].number},
         // {"$set": {"credit.$.balance": parseFloat(data.credit[ii].balance)}});}})

printjson(db.people_converted.aggregate([
    {$match: {"nationality": "Poland", "sex": "Female"}},
    {$unwind: "$credit"},
    {$group: {
        _id: "$credit.currency",
        avg_credit: {$avg: "$credit.balance"},
        sum_credit: {$sum: "$credit.balance"}
}},
{$project: {
    "_id": 0, 
    "waluta": "$_id",
    "średnia liczba środków": {$trunc: ["$avg_credit", 2]},
    "łączna liczba środków": "$sum_credit"
}}
]
).toArray())
