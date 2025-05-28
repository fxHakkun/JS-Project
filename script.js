document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from refreshing page

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Thank you, ${name}! I will get back to you at ${email}.`);

  // Optionally clear the form
  this.reset();
});

function ShowContent(){
  const content = document.getElementById("hiddenContent");
  content.hidden = !content.hidden;
}

