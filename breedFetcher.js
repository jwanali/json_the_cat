const request = require("request");
const input = process.argv;
const { exit } = require("process");

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${input[2]}`,
  (error, response, body) => {
    if (error) {
      console.log(error);
      exit();
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        console.log(`sorry the ${input[2]} breed is not found`);
      } else {
        console.log(data[0].description);
      }
    }
  }
);
