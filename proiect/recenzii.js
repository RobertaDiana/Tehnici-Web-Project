setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementsByClassName("demo")[0].innerHTML = d.toLocaleTimeString();
}

const para = document.createElement("p");
para.className="demo";
document.body.appendChild(para);



