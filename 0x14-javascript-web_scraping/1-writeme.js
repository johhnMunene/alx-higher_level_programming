#!/usr/bin/node
// script that writes a string to a file.:

const fs = require('fs');

const writeToFile = (filePath, content) => {
  try {
    fs.writeFile(filePath, content, 'utf-8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Content written to ${filePath}`);
    });
  } catch (error) {
    console.error(error);
  }
};
