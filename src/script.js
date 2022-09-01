function converter(){
  var dolar = parseFloat(document.getElementById("entrada").value);
  document.getElementById("saida").value = (dolar*5.23).toFixed(2);
}

function limpar(){
 document.getElementById("entrada").value = null;
 document.getElementById("saida").value = null;
}