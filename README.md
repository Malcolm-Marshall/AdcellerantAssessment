# AdcellerantAssessment

### Tech Used:
JavaScript and React frontend, connected to a Next.js server and a MySQL database.
Libraries used include React-Bootstap for framework, and nivo for visuals.

## To view web page:

### In the database directory, add a file named config.js containing your mysql login information
```
const login = {
  host: 'localhost', // your host name
  user: 'root', // your user name
  password: 'password', // your password
  database: 'productInfo'
};

module.exports = login;
```

### To initialize database, from the root directory in the terminal
```
npm run db
```

### To seed database 

```
npm run seed
```

### Next, to start developer server
```
npm run dev
```

### Go to localhost:3000 on web browser
