# AdcellerantAssessment

### In the database directory, add a file named config.js containing your mysql login information
```
const login = {
  host: 'localhost', // your host name
  user: 'root', // your user name
  password: 'password', // your password
  database: 'productInfo'
};
```

module.exports = login;

### To seed database, in your terminal run 

```
npm run seed
```

### Next, run
```
npm run dev
```

### Go to localhost:3000 on web browser
