# Knex/Express Project Sample

This is an example project structure that uses both Express and Knex. It assumes
the creation of a "server" JSON API using a Postgres database and creates a
basic relation between `users` and `projects` to demonstrate how such simple
data structures might be modeled using nothing more than Knex and plain JS.

## Why?

I'm tired of ORMs. I came from a Rails background where Active Record held your
hand all the time, and when something went wrong you had to decipher where (in
AR) it happened. It was a mysterious black box of goodies that helped me get
pretty far without really understanding what was happening between my app and
the DB.

Then I started working more with JS and was feeling a little naked without AR.
I tried Loopback, Sequelize, Bookshelf, Sails, Waterline, Mongoose, and ORM2.
Each has their own strengths and weaknesses. None was as stable and feature-rich
as Active Record. All of them had the same major problem: they're all ORMs!

The problem with ORMs is that they try to hide the business logic of interacting
with your database. But, at it's core, an API is *nothing more* than an
interface to a database. Take that out and you have to question what it is that
you're actually trying to accomplish.

But I'm also not into raw SQL syntax (it's kind of ugly). So a "query builder"
like Knex, which enables the construction of SQL queries in my native language,
is more to my liking.

I've also created my own "models" which are just Nodejs modules that are a bunch
of helper functions that store all the queries to the database in one place
where I can change and customize them (they don't even really need to use Knex
if I want to make my queries more raw).

Along with these pseudo-models, I've organized a simple Express app into
"controllers" and "routes" to fill out what a basic JSON API server application
might look like.

Maybe this is helpful to you to give you some ideas on how to structure your
own project. Maybe this can even be a starting template for your project.
Mainly, I want to show you that it's ok to take off the training wheels and
ditch the ORM you think you need. You don't need all that hidden abstraction
(and baggage) when all you really need is a series of database query functions
which control the data flowing in and out and present the outside world with
some kind of interface (like the JSON REST API used here).

The less you depend on, the more control you gain, and the fewer problems you
inherit. But you also have to be more diciplined, responsible, sensible, and
organized so as not to turn your beautiful app into a pile of spaghetti ;)

## License

MIT
