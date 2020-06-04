
| # | Action  | URL                | HTTPS Verb | EJS       | Mongoose                       |
|---|---------|--------------------|------------|-----------|--------------------------------|
| 1 | Index   | /contacts/         | GET        | index.ejs | collection.find()              |
| 2 | Show    | /contacts/:id      | GET        | show.ejs  | collection.findById()          |
| 3 | New     | /contacts/new      | GET        | new.ejs   | N/A                            |
| 4 | Create  | /contacts/         | POST       | N/A       | collection.create()            |
| 5 | Edit    | /contacts/:id/edit | GET        | edit.ejs  | collection.findById()          |
| 6 | Update  | /contacts/:id      | PUT        | N/A       | collection.findByIdAndUpdate() |
| 7 | Destroy | /contacts/:id      | DELETE     | N/A       | collection.findByIdAndRemove() |
