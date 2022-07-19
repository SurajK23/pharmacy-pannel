const uN = localStorage.getItem("uName");
const pW = localStorage.getItem("pWord");
if (uN && pW) {
  if (uN === pW) window.location.href = "order/order.html";
}

function subData() {
  let userName = document.getElementById("username").value;
  let passWord = document.getElementById("password").value;

  if (userName != "" && userName === passWord) {
    localStorage.setItem("uName", userName);
    localStorage.setItem("pWord", passWord);
    alert("Login Successful!");
    window.location.href = "order/order.html";
  } else {
    alert(`Please Enter Valid Credentials ${userName} ${passWord}`);
  }
  return false;
}
