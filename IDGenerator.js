function generateID() {
  document.getElementById("cardName").innerText = document.getElementById("name").value;
  document.getElementById("cardID").innerText = document.getElementById("id").value;
  document.getElementById("cardCourse").innerText = document.getElementById("course").value;
  document.getElementById("cardCollege").innerText = document.getElementById("college").value;
  document.getElementById("cardValid").innerText = document.getElementById("valid").value;
  const photoInput = document.getElementById("photoUpload");
  const cardPhoto = document.getElementById("cardPhoto");

  if (photoInput.files && photoInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      cardPhoto.src = e.target.result;
    };
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    cardPhoto.src = "";
  }
  document.getElementById("card").style.display = "block";
}