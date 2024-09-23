const express = require("express");
const xlsx = require("xlsx");
const fs = require("fs");
const app = express();

const port = 5000;

const data = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Los Angeles" },
];

const ws = xlsx.utils.json_to_sheet(data);
const wb = xlsx.utils.book_new();

xlsx.utils.book_append_sheet(wb, ws, "sheet1");

xlsx.writeFile(wb, "output.xlsx");

console.log("Excel file created successfully!");

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port);
