// Przed wykonaniem zadania dokonałam konwersji wagi i wzrostu ze stringów na liczby:
// db.people.find().forEach( function (x) {x.weight = parseFloat(x.weight), x.height = parseFloat(x.height); db.people_conv.save(x);})
// Wynik działania waga/wzrost^2 pomnożyłam przez 10000, aby otrzymać wyniki w bardziej znanej i ławiejszej do interpretacji formie

var bmi = {$divide: 
    ["$weight", 
    {$pow: ["$height", 2]}
]
}

printjson(db.people_conv.aggregate([
    {$group: {
        _id: "$nationality",
        avg_bmi: {$avg: bmi},
        min_bmi: {$min: bmi},
        max_bmi: {$max: bmi}
}},
{$project: {
    "_id": 0, 
    "narodowość": "$_id",
    "średnie BMI": {$trunc: [{$multiply: ["$avg_bmi", 10000]}, 2]},
    "minimalne BMI": {$trunc: [{$multiply: ["$min_bmi", 10000]}, 2]},
    "maksymalne BMI": {$trunc: [{$multiply: ["$max_bmi", 10000]}, 2]}
}}
]
).toArray())
