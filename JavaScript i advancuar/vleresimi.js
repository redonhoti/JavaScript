function submitVleresimin() {
    var vleresimi = document.querySelector('input[name="vleresimi"]:checked');
    if (vleresimi) {
      var vlera = vleresimi.value;
      document.getElementById("rezultati").innerHTML = "Vlerësimi juaj është: " + vlera;
    } else {
      document.getElementById("rezultati").innerHTML = "Ju lutem zgjidhni një vlerësim.";
    }
  }
  