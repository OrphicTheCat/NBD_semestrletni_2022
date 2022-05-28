// Przed wykonaniem zadania dokonałam konwersji wagi i wzrostu ze stringów na liczby:
// db.people.find().forEach( function (x) {x.weight = parseFloat(x.weight), x.height = parseFloat(x.height); db.people_conv.save(x);});
// Można teoretycznie rozwiązać problem wstawiając $toDecimal, ale wtedy wyniki brzydko wyglądają :)

printjson(db.people_conv.aggregate([
    {$group: {
        _id: "$sex",
        average_weight: {$avg: "$weight"},
        average_height: {$avg: "$height"}
    }
},
{$project: {
    "_id": 0, 
    "Plec": "$_id", 
    "srednia waga": {$trunc: ["$average_weight", 2]}, 
    "sredni wzrost" : {$trunc: ["$average_height", 2]}}
}
]
).toArray())