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

// Example usage:
const filePath = process.argv[2]; // Get the file path from the second argument
const contentToWrite = process.argv[3]; // Get the content to write from the third argument

writeToFile(filePath, contentToWrite);
