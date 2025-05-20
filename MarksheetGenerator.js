function generateMarksheet() {
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const className = document.getElementById("class").value;

  const marks = [
    parseInt(document.getElementById("sub1").value) || 0,
    parseInt(document.getElementById("sub2").value) || 0,
    parseInt(document.getElementById("sub3").value) || 0,
    parseInt(document.getElementById("sub4").value) || 0,
    parseInt(document.getElementById("sub5").value) || 0
  ];

  const total = marks.reduce((a, b) => a + b, 0);
  const percentage = (total / 500) * 100;
  const result = marks.every(mark => mark >= 33) ? "Pass" : "Fail";

  document.getElementById("msName").innerText = name;
  document.getElementById("msRoll").innerText = roll;
  document.getElementById("msClass").innerText = className;
  document.getElementById("msTotal").innerText = total;
  document.getElementById("msPercentage").innerText = percentage.toFixed(2);
  document.getElementById("msResult").innerText = result;

  document.getElementById("marksheet").style.display = "block";
}