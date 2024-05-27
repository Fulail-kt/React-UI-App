import express from 'express';
import connectDB from './config/db.js';
import routes from './routes/routes.js';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();



const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors({origin:'*'}))
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api', routes);


// PORT 
const PORT=process.env.PORT || 3000

// Server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });