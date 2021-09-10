const todosData = require('./../data/todos.json');
const { v4: uuidv4 } = require('uuid');
const { writeDataToFile } = require('../utils/helpers');
const path = require('path');

class TodosModel {
  static findAll = () => {
    return new Promise((resolve, reject) => {
      resolve(todosData);
    });
  };

  static findOne = (id) => {
    return new Promise((resolve, rejected) => {
      const todo = todosData.find((todo) => todo.id === id);
      resolve(todo);
    });
  };

  static create = (todo) => {
    return new Promise((resolve, rejected) => {
      const newTodo = {
        ...todo,
        id: uuidv4(),
      };

      todosData.push(newTodo);

      writeDataToFile(path.resolve('data', 'todos.json'), todosData);

      resolve(newTodo);
    });
  };
}

module.exports = TodosModel;
