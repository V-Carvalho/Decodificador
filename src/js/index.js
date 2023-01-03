let messageUser = "";

function encrypt() {
  messageUser = document.getElementById("messageUser").value.toLowerCase();

  if (messageUser != "") {
    document.getElementById("btnCopyMsg").style.display = "block";
    document.getElementById("imgNothingFound").style.display = "none";    

    let resultEncode = messageUser
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    document.getElementById("textResult").innerHTML = resultEncode;    
  } else {
    alert("Digite algo para continuar...");
  }
}

function decrypt() {
  messageUser = document.getElementById("messageUser").value.toLowerCase();

  if (messageUser != "") {
    document.getElementById("btnCopyMsg").style.display = "block";
    document.getElementById("imgNothingFound").style.display = "none";
    
    let resultDecode = messageUser
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    document.getElementById("textResult").innerHTML = resultDecode;
  } else {
    alert("Digite algo para continuar...");
  }
}

function copyMsg() {
  var copyText = document.getElementById("textResult").innerText;

  navigator.clipboard.writeText(copyText);

  alert(`Texto copiado: ${copyText}`);
}
