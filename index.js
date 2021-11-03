// Adding my testing code
let API_ENDPOINT =
  "https://9gu23p7b2g.execute-api.eu-west-2.amazonaws.com/Dev/counter";

let API_ENDPOINT_DATA =
  "https://9gu23p7b2g.execute-api.eu-west-2.amazonaws.com/Dev/counter?count=11";

let count = 0;
let countEL = document.querySelector(".number");
const data = "?count=11";
// countEL.textContent = 0;

document.addEventListener("DOMContentLoaded", function () {
  console.log("I got a hit");
  document.querySelector(".number").textContent = 1;
  fetch(API_ENDPOINT_DATA, {
    headers: {
      "Content-type": "application/json",
    },
    method: "GET",
    // API_ENDPOINT = API_ENDPOINT + data,
    // body: JSON.stringify({
    //   count: 9,
    // }),
    mode: "cors",
  })
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data);
      let output_data = JSON.stringify(data);
      console.log(output_data);
      //   console.log(data[]);
      //   successDiv.textContent = "Submitted. But check the result below!";
      //   resultsDiv.textContent = JSON.stringify(data);
    })
    .catch(function (err) {
      //   errorDiv.textContent = "Oops! Error Error:\n" + err.toString();
      console.log(err);
    });

  //   console.log(countEL.textContent);
  //   count = Number(countEL.textContent);
  //   countEL.textContent = count + 1;
});
