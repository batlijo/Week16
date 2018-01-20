var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("https://duckduckgo.com") //
  .type("#search_form_input_homepage", "github nightmare")
  .click("#search_button_homepage")
  .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end() // can inspect on chrome developer tools
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });

//when would taking a screenshot be useful? to see if and when there is an error
