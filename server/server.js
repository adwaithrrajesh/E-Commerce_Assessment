const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan')
const productRoute = require('./routes/productRouter')
require('./database/config');




// Define the port
const port = process.env.PORT;



app.use(express.json());
app.use(cors({
  origin: '*',
  methods:['GET','POST','PUT','PATCH','DELETE'],
  credentials:true
}));
app.use(morgan('dev'));

app.use('/api',productRoute)



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
