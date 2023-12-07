const express = require('express');
const app = express();

// Importando os arquivos de rota
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/users');
const categoryRoutes = require('./routes/categories');
const taskCategoryRoutes = require('./routes/taskCategories');

app.use(express.json());

// Usando as rotas
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/taskcategories', taskCategoryRoutes);

// Rota de boas-vindas (opcional)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Importe seus modelos Sequelize aqui
const db = require('./models');

// Sincronizando todos os modelos com o banco de dados
db.sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
  });
});
