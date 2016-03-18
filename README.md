#Links

Link for working [application](https://g19-km-movies.herokuapp.com/).

Link to public [repo](https://github.com/KyleJayMaxwell/unit-2-assesment).

## Set Up

```
fork/clone
npm install
nodemon
```

## Description

Your mission is to create a CRUD app that allows users to add movies to a movie database. The basic styles, form, and other templates have been created for you, but you'll need to wire up your database, routes and views.

__All of your movies routes should be in `routes/movies.js`__

## Create a database called moviedb

```
psql postgres
create database moviedb;
\l (to confirm creation)
\c moviedb
```

## Create a table called movies with the following columns:

* Director
* Title
* Rating
* Description

## Stories

__#1__

```
When I click 'Add a Movie'
Then I should see a form to add a new movie
```

__#2__

```
When I submit the form for a new movie
Then I should return to my list of all movies
And I should see my new movie listed with all movies
```

__#3__

```
When I click on the title of a movie
Then I should be taken to a 'show' page
And on that page I should see all of the information for that movie
And I should see a link to 'Edit' the movie
And I should see a link to 'Delete' the movie
```
__#4__

```
When I click 'Edit'
Then I should see a form pre-filled with the current movie information
When I change information for that movie
And I click "Update"
Then I should see my updated movie
```
__#5__

```
When I click 'Delete'
Then I should see a list of all movies
And the deleted movie should not be listed
```
