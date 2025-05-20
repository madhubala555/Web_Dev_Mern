function generateResume() {
  document.getElementById("rName").innerText = document.getElementById("fullName").value;
  document.getElementById("rEmail").innerText = document.getElementById("email").value;
  document.getElementById("rPhone").innerText = document.getElementById("phone").value;
  document.getElementById("rAddress").innerText = document.getElementById("address").value;
  document.getElementById("rObjective").innerText = document.getElementById("objective").value;
  
  document.getElementById("rEdu1").innerText = document.getElementById("education1").value;
  document.getElementById("rEdu2").innerText = document.getElementById("education2").value;

  document.getElementById("rSkill1").innerText = document.getElementById("skill1").value;
  document.getElementById("rSkill2").innerText = document.getElementById("skill2").value;
  document.getElementById("rSkill3").innerText = document.getElementById("skill3").value;

  document.getElementById("resume").style.display = "block";
}