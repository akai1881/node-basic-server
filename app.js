require('dotenv').config();
const { EDESTADDRREQ } = require('constants');
const http = require('http');
const TodosController = require('./controllers/TodosController.js');
const { PATH_REGEX } = require('./utils/consts.js');

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  if (req.url === '/api/v1/todos' && req.method === 'GET') {
    TodosController.getAllTodos(req, res);
  } else if (req.url.match(PATH_REGEX) && req.method === 'GET') {
    const id = +req.url.split('/')[4];
    TodosController.getOneTodo(req, res, id);
  } else if (req.url === '/api/v1/todos' && req.method === 'POST') {
    TodosController.createTodo(req, res);
  }
});

server.listen(PORT, () => {
  console.log(`server working on port: ${PORT}`);
});
