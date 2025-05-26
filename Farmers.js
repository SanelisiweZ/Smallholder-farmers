function signUpNow() {
  let firstName = prompt("What is your First Name?");
  let lastName = prompt("What is your last Name?");
  let emailAddress = prompt("What is your email address?");
  let age = prompt("How old are you?");
  if (age >= 16) {
    alert(
      "Thank you " +
        firstName +
        " " +
        lastName +
        " for signing up for one of our Workshop😁! A confirmation email has been sent you. We will be in touch soon with further details"
    );
  } else {
    alert(
      "Sorry " +
        firstName +
        " " +
        lastName +
        ". You need to be 16 and above to qualify for this bootcamp☹️"
    );
  }
}

let signUpNowButton = document.querySelector("button");
signUpNowButton.addEventListener("click", signUpNow);
