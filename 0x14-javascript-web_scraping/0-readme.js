#!/usr/bin/node
// script that reads and prints the content of a file.

const fs = require('fs');

const readFile = (filePath) => {
  try {
    fs.readFile(filePath, 'utf-8', (err, content) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(content);
    });
  } catch (error) {
    console.error(error);
  }
};

// Simulate command-line arguments
const filename = process.argv[2]; // Get the filename as the second argument

readFile(filename);
