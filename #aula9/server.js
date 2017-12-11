const express = require('express');
const app = express();

app.use(express.static('./public'));

app.set('port', 3000);

app.listen(app.get('port'), () => {
  console.log(`Servidor ouvindo na porta ${app.get("port")}`);
});