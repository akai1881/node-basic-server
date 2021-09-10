const fs = require('fs');

const getBodyData = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = '';

      req.on('data', (chunk) => {
        body += chunk.toString();
      });

      req.on('end', () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
};

const writeDataToFile = (filename, content) => {
  fs.writeFile(filename, JSON.stringify(content), 'utf8', (err) => {
    if (err) console.log(err);
  });
};

module.exports = {
  getBodyData,
  writeDataToFile,
};
