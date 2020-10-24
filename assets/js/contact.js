alert("we are here");

var btn = document.getElementById("send-message");
btn.onclick(function (e) {
  e.preventDefault();
  alert("send message button clicked");
});

//when user clicks yes to submit message
// $("#submit_message").click(function () {
//   //get the email address supplied by the user
//   var email = $("#email_address").val();
//   var message = $("#message").val();
//   var name = $("#name").val();

//   $("#modal_confirmation").css("display", "none");

//   if (email != "" && isEmail(email)) {
//     //show modal

//     //make Ajax call here
//     $.ajax({
//       url: "php_includes/mail-sender.php",
//       type: "POST",
//       data: "name=" + name + "&message=" + message + "&email=" + email,
//       success: function (data) {
//         // alert(data);
//         // console.log(data);
//         // alert("message: "+data);
//         // window.location.assign("contact.php");
//         $("#email_address").val("");
//         $("#message").val("");
//         $("#name").val("");

//         $("#feedback_message").html(data);
//         $("#feedback").slideDown("fast").delay(5000).slideUp("slow");

//         console.log(data);
//       },
//     });
//   }
// });

//when user clicks no to cancel message
$("#cancel_message").click(function () {
  $("#modal_confirmation").css("display", "none");
});

//when user clicks the send message button
$("#submit").click(function (e) {
  e.preventDefault();
  var email = $("#email_address").val();
  var message = $("#message").val();
  var name = $("#name").val();

  // if( email != "" && isEmail(email) && message != "" ){
  //   $("#modal_confirmation").css("display", "block");
  // }else if(){
  //     $("#feedback_message").html("Invalid email address");
  //     $("#feedback").slideDown("fast").delay(5000).slideUp("slow");

  // }

  //   perform validations
  //   validateForm(email, message, name);

  //submit form data -> make ajax call
  $.ajax({
    url: "php_includes/mail-sender.php",
    type: "POST",
    data: "name=" + name + "&message=" + message + "&email=" + email,
    success: function (data) {
      // alert(data);
      // console.log(data);
      // alert("message: "+data);
      // window.location.assign("contact.php");
      $("#email_address").val("");
      $("#message").val("");
      $("#name").val("");

      $("#feedback_message").html(data);
      $("#feedback").slideDown("fast").delay(5000).slideUp("slow");

      console.log(data);
    },
  });
});

function validateForm(email, message, name) {
  if (email == "" && message == "" && name == "") {
    $("#feedback_message").html("Fields cannot be left blank");
    $("#feedback").slideDown("fast").delay(5000).slideUp("slow");
  } else if (email == "" || !isEmail(email)) {
    $("#feedback_message").html("Invalid email address");
    $("#feedback").slideDown("fast").delay(5000).slideUp("slow");
  } else if (message == "") {
    $("#feedback_message").html("You can't send a blank message.");
    $("#feedback").slideDown("fast").delay(5000).slideUp("slow");
  } else {
    $("#modal_confirmation").css("display", "block");
  }
}
