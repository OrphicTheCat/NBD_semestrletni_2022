// Etap 1 - mapowanie

var mapJob  = function() {emit (this.job, 1);};

// Etap 2 - redukcja

var reduceJob = function(key, value) {
    return key, Array.sum(value);
 };

// Etap 3 - finalizacja - nie jest konieczny
// Map reduce - użycie funkcji

printjson(db.people.mapReduce(
    mapJob,
    reduceJob,
    { out: "mrJob" }
 ));
printjson(db.mrJob.find().toArray().map((value) => value._id));