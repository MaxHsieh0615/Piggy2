{
    "development": {
      "username": "root",
      "password": process.env.pw,
      "database": "piggybusiness",
      "host": "localhost",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": process.env.pw,
      "database": "piggybusiness",
      "host": "localhost",
      "dialect": "mysql",
      "logging": false
    },
    "production": {
        "username": "root",
        "password": process.env.pw,
        "database": "piggybusiness",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }
  }
  