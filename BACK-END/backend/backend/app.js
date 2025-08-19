const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
   const mongoose = require('mongoose');
   const dotenv = require('dotenv');

   dotenv.config();

   const app = express();
   const PORT = process.env.PORT || 3000;

   // Conexão com o MongoDB
   mongoose.connect(process.env.MONGODB_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   })
   .then(() => console.log('Conectado ao MongoDB'))
   .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

   // Middleware e rotas
   app.use(express.json());
   app.use('/api', require('./routes/api'));

   app.listen(PORT, () => {
       console.log(Servidor rodando na porta ${PORT});
   });
   
// Configurações
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend')));

// Rotas
const apiRoutes = require('./routes/api');
const adminRoutes = require('./routes/admin');

app.use('/api', apiRoutes);
app.use('/admin', adminRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Servidor rodando na porta ${PORT});
});