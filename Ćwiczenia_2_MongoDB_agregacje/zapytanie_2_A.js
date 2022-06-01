// Przed wykonaniem zapytania dokonałam konwersji balance ze stringu na float za pomocą skryptu:
//db.people_converted.find({"credit":{"$exists":true}}).forEach(function(data){
     // for(var ii=0;ii<data.credit.length;ii++) {db.people_converted.update(
         // {"_id": data._id, "credit.number": data.credit[ii].number},
         // {"$set": {"credit.$.balance": parseFloat(data.credit[ii].balance)}});}})


printjson(db.people_converted.aggregate([
    {$unwind: "$credit"},
    {$group: {
        _id: "$credit.currency",
        total_credit: {$sum: "$credit.balance"}
    }},
{$project: {
    "_id": 0, 
    "waluta": "$_id", 
    "łączna liczba środków pozostałych na kartach kredytowych": "$total_credit"}
}
]
).toArray())