// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import userRoutes from './routes/userRoutes.js'; // Add .js extension

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((err) => console.error('MongoDB connection error:', err));

// app.use('/api/users', userRoutes); // Use routes for user-related operations

// app.listen(5001, () => {
//   console.log('Server running on http://localhost:5001');
// });

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js'; // Add .js extension

const app = express();
const port = process.env.PORT || 10000; // Use PORT env variable or default to 10000

app.use(cors());
app.use(bodyParser.json());

// Update the MongoDB URI for cloud-based access if needed
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/users', userRoutes); // Use routes for user-related operations

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
