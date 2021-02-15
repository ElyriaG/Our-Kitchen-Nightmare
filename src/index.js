var fs = require("fs");

$(document).ready(function () {
  let recipeTitle;
  let recipeMeal;
  let recipeCulture;
  let recipeIngredients;
  let recipeTime;
  let recipeDifficulty;
  let recipeDescription;
  let recipeNotes;
  let recipePicture;

  $("#saveButton").on("click", function () {
    recipeTitle = $("#recipeTitle").val();
    recipeMeal = $("#recipeMeal").val();
    recipeCulture = $("#recipeCulture").val();
    recipeIngredients = $("#recipeIngredients").val();
    recipeTime = $("#recipeTime").val();
    recipeDifficulty = $("#recipeDifficulty").val();
    recipeDescription = $("#recipeDescription").val();
    recipeNotes = $("#recipeNotes").val();
    recipePicture = $("#recipePicture").val();

    fs.writeFile(
      "OurRecipes.csv",
      "Name, Meal, Ethnicity, Ingredients, Time, Difficulty, Description, Notes, Pictures",
      function (error) {
        if (error) {
          return console.log(error);
        } else if (recipeTitle == "" || recipeMeal == "") {
          return alert("All fields must be filled.");
        }
        console.log("OurRecipes.txt was updated!");
      }
    );
    console.log("writeFile Complete");
    // console.log(
    //   recipeTitle,
    //   recipeMeal,
    //   recipeCulture,
    //   recipeIngredients,
    //   recipeTime,
    //   recipeDifficulty,
    //   recipeDescription,
    //   recipeNotes,
    //   recipePicture
    // );
  });
});

//Name, Meal, Ethnicity, Ingredients, Time, Difficulty, Description, Notes, Pictures

// // This block of code will read from the "movies.txt" file.
// // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// // The code will store the contents of the reading inside the variable "data"
// fs.readFile("movies.txt", "utf8", function(error, data) {

//   // If the code experiences any errors it will log the error to the console.
//   if (error) {
//     return console.log(error);
//   }

//   // We will then print the contents of data
//   console.log(data);

//   // Then split it by commas (to make it more readable)
//   var dataArr = data.split(",");

//   // We will then re-display the content as an array for later use.
//   console.log(dataArr);

// });
