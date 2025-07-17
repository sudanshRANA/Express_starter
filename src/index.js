const express = require('express');


const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');

const app = express();

app.use(express.json());
app.use(express.text());
app.post('/ping',(req, res) => {
   console.log('req.body',req.body);
   return res.status(200).json({message: 'poNg'   });
})

  
app.listen(ServerConfig.PORT, async () => {
  await  connectDB();
  console.log(`Server started at  port ${ServerConfig.PORT}`);
  
});

