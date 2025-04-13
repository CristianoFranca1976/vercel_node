# Vercel node.js

## How to connect an API project using Vercel with node.js

- Basic start open a terminal in your VS code

```
npm init -y (auto complete)

or

npme init (manual)
```


- Create a file with name 

```
server..js
```

- Another file name

```
.gitignore
```

- Inside the file write:

```
node_modules
```

- This file function ignore a dowload any file or folder inside.


- Create a nother file with name

```
vercel.json
```
- Below you add this code 


```
{
  "version": 2,
  "builds": [{"src": "server.js", "use": "@vercel/node"}],
  "routes":[
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```


- Finily a file name server.js this code to test.


```
const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Teste usando Vercel com Node.js")
});

app.listen(port, () => {
  `Sever is running on port localhost:${port}`
});

```

- Now you can test and you can open in you vercel after add this project in your repository.

