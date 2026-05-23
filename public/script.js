const imageUpload = document.getElementById("imageUpload");
const profilePic = document.getElementById("profile-pic");

imageUpload.addEventListener("change", function () {

  const file = this.files[0];

  if (file) {

    const reader = new FileReader();

    reader.onload = function (e) {
      profilePic.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }

});
const text = [
  "Aspiring Full Stack Developer",
  "Creative UI Designer",
  "Frontend Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];

  letter = currentText.slice(0, ++index);

  document.getElementById("typing-text").textContent = letter;

  if (letter.length === currentText.length) {

    count++;
    index = 0;

    setTimeout(type, 1200);

  } else {

    setTimeout(type, 100);
  }

})();