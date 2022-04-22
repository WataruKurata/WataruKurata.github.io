function AllClear() {
  window.location.reload();
}

function calc() {
  const a = document.getElementById("figure1").value;
    num1 = parseInt(a);
  const b = document.getElementById("figure2").value;
    num2 = parseInt(b);
  const c = document.getElementById("figure3").value;
    num3 = parseInt(c);
  const d = document.getElementById("figure4").value;
    num4 = parseInt(d);
  const e = document.getElementById("figure5").value;
    num5 = parseInt(e);
  const total = num1 + num2 + num3 + num4 + num5;

  document.getElementById("result").innerHTML = num1 + num2 + num3 + num4 + num5;

  if (total >= 100) {
    document.getElementById("evaluate").innerHTML = "あなたは東大生です！おめでとうございます！";
  } else {
    document.getElementById("evaluate").innerHTML = "あなたはFランです。Study hard!!";
  }

}
