# Knex/Express Project Sample

This is an example project structure that uses both Express and Knex. It assumes
the creation of a "server" JSON API using a Postgres database and creates a
basic relation between `users` and `projects` to demonstrate how such simple
data structures might be modeled using nothing more than Knex and plain JS.

If you like this kind of architecture, you may also like [cred-server](https://github.com/robmclarty/cred-server)
which is something I'm working on as a more specific implementation of these
ideas :)

## Folder Structure

```
/config
  database.js -- loads the knexfile using settings for the current environment
/db
  /migrations
  /seeds
/server
  /controllers -- business logic for handling API endpoints
    project_controller.js
    user_controller.js
  /helpers -- modules for common functions that sit outside controllers/models
  /models  -- simple collections of db queries and utilities for user data
    index.js -- creates a single object with each model as a property
    project.js
    user.js
  /routes -- defines API endpoints and passes requests to corresponding controllers
    project_routes.js
    user_routes.js
  index.js -- the main Express app
knexfile.js -- defines all database settings for different environments
package.json -- defines scripts for utilities like migrations and seeds
```

## Why?

I'm tired of ORMs. I came from a Rails background where Active Record held my
hand all the time, and when something went wrong I had to decipher where (in
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

## Knex

I like knex because it just does what it says on the tin: it builds SQL queries.

But it also comes with some handy CLI tools for running migrations and seeding
your database (along with connecting to it in the first place from within your
app).

This is all I really wanted from an ORM. I'll structure my in-memory
representation of my data myself. I mean, *that* is what my app *is* so how
could an ORM know how to do it for me?

I just think it makes things much more straight-forward and simple. This makes
it obvious where something has gone wrong (so I can fix it) and makes for more
hooks where I can easily add on additional functionality. But that's just me.
YMMV.

## License

MIT
