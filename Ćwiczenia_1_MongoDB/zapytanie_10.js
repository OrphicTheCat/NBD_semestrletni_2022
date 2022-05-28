printjson(
    db.people.update(
        {"job": "Editor"},
        {$unset: {"email": ""}},
        {multi: true}     
    )
)