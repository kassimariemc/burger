$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger-input").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".change-devoured").on("click", function(event) {
    const id = $(this).data("id");

    const newDevouredState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})