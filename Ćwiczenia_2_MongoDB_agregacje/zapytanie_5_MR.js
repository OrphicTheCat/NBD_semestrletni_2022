// Przed wykonaniem zapytania dokonałam konwersji balance ze stringu na float za pomocą skryptu:
//db.people_converted.find({"credit":{"$exists":true}}).forEach(function(data){
     // for(var ii=0;ii<data.credit.length;ii++) {db.people_converted.update(
         // {"_id": data._id, "credit.number": data.credit[ii].number},
         // {"$set": {"credit.$.balance": parseFloat(data.credit[ii].balance)}});}})

// Etap 1 - mapowanie

var mapBalance = function() {
    for (var idx = 0; idx < this.credit.length; idx++) {
       var key = this.credit[idx].currency;
       var value = {count: 1, totalBalance: this.credit[idx].balance};
       emit(key, value);
    }
};

// Etap 2 - redukcja

var reduceBalance = function(key, value) {
    reducedValue = {count: 0, totalBalance: 0};
    for (var idx = 0; idx < value.length; idx++) {
        reducedValue.count += value[idx].count;
        reducedValue.totalBalance += value[idx].totalBalance;
    }
    return reducedValue;
 };

 // Etap 3 - finalizacja

var finalizeBalance = function(key, value) {
    value.averageBalance = value.totalBalance/value.count;
    return value;
  };

// Map reduce - użycie funkcji

printjson(db.people_converted.mapReduce(mapBalance, reduceBalance, {query: {nationality: "Poland", sex: "Female"}, out: "mrBalance", finalize: finalizeBalance}));
printjson(db.mrBalance.find({}, {"value.totalBalance": 1, "value.averageBalance": 1}).toArray());