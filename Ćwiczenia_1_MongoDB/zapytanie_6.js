printjson(
    db.people.insert(
        {
            "sex" : "Female",
            "first_name" : "Katarzyna",
            "last_name" : "Kleczkowska",
            "job" : "Researcher",
            "email" : "s24558@pjwstk.edu.pl",
            "location" : {
                "city" : "Krakow",
                "address" : {
                    "streetname" : "Bajkowa",
                    "streetnumber" : "33"
                }
            },
            "description" : "Andra moi ennepe Mousa polutropon, hos mala polla",
            "height" : "162.5",
            "weight" : "55.5",
            "birth_date" : "1990-01-23T14:33:15Z",
            "nationality" : "Poland",
            "credit" :
                {
                    "type" : "solo",
                    "number" : "3530833569142236",
                    "currency" : "PLN",
                    "balance" : "0.5"
                }
        }
    )
)