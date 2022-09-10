# backend 

## Project setup
```
npm install
```

## Start backend server
```
npm start
```

## set up database

* install postgresql (eg. on macOS you can use homebrew https://formulae.brew.sh/formula/postgresql@14)
* start the postgresql database
* look at /backend/config/config.json, and create a database with the information used under "development"
* please run this sql /backend/tests/sql/ to create the tables (starting with init.pgsql)