const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const connectDB = require('./config/config');
const taskRoutes = require('./routes/tasks');
const swaggerDocument = require('./docs');

const app = express();

app.use(express.json());

app.use('/tasks', taskRoutes);

const swaggerSpecs = swaggerJsdoc({ swaggerDefinition: swaggerDocument, apis: ['./docs/*.js'] });
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
