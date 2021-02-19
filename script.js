function myfunc() {
    const langcheck = /[a-zA-Z]/;
    const chetcheck = /[02468]/;
    const nechetcheck = /[13579]/;
    const digitcheck = /[1-9]/;
    let mas1 = (document.getElementById("mass1").value).split(" ");
    let mas2 = (document.getElementById("mass2").value).split(" ");
    let checker = 0;
    for (let i = 0; i < mas1.length; i++) {
      if (mas1[i].length == 4) checker++;
      if (nechetcheck.test(mas1[i][0])) checker++;
      if (digitcheck.test(mas1[i][1])) checker++;
      if (chetcheck.test(mas1[i][2])) checker++;
      if (langcheck.test(mas1[i][3])) checker++;
      if (checker == 5) checker = 0;
      else {
        alert("Неверный ввод!");
        return;
      }
    }
    for (let i = 0; i < mas2.length; i++) {
      if (mas2[i].length == 4) checker++;
      if (nechetcheck.test(mas2[i][0])) checker++;
      if (digitcheck.test(mas2[i][1])) checker++;
      if (chetcheck.test(mas2[i][2])) checker++;
      if (langcheck.test(mas2[i][3])) checker++;
      if (checker == 5) checker = 0;
      else {
        alert("Неверный ввод!");
        return;
      }
    }
    document.getElementById("output1").innerHTML = "Объединение множеств: " +
                                                    objedienie((document.getElementById("mass1").value).split(" "), (document.getElementById("mass2").value).split(" "));
    document.getElementById("output2").innerHTML = "Пересечение множеств: " +
                                                    peresechenie((document.getElementById("mass1").value).split(" "), (document.getElementById("mass2").value).split(" "));
    document.getElementById("output3").innerHTML = "Дополнение второго множества до первого: " +
                                                    dopolnenie((document.getElementById("mass1").value).split(" "), (document.getElementById("mass2").value).split(" "));
    document.getElementById("output4").innerHTML = "Симметрическая разность множеств: " +
                                                    simmrazn((document.getElementById("mass1").value).split(" "), (document.getElementById("mass2").value).split(" "));
  }
  function objedienie(mass1, mass2) {
    let final = "";
    for (let i = 0; i < mass1.length; i++) {
      for (let j = 0; j < mass2.length; j++) {
        if (mass1[i] == mass2[j]) mass2[j] = "";
       }
    }
    for (let i = 0; i < mass1.length; i++) {
      final += mass1[i] + ' ';
    }
    for (let i = 0; i < mass2.length; i++) {
      if (mass2[i] != null) final += mass2[i] + ' ';
    }
    return final;
  }
  function peresechenie(mass1, mass2) {
    let final = "";
    for (let i = 0; i < mass1.length; i++) {
      for (let j = 0; j < mass2.length; j++) {
        if (mass1[i] == mass2[j]) final += mass1[i] + ' ';
       }
    }
    return final;
  }
  function dopolnenie(mass1, mass2) {
    let final = "";
    for (let i = 0; i < mass1.length; i++) {
      for (let j = 0; j < mass2.length; j++) {
        if (mass1[i] == mass2[j]) mass1[i] = "";
       }
    }
    for (let i = 0; i < mass1.length; i++) {
      if (mass1[i] != null) final += mass1[i] + ' ';
    }
    return final;
  }
  function simmrazn(mass1, mass2) {
    let final = "";
    for (let i = 0; i < mass1.length; i++) {
      for (let j = 0; j < mass2.length; j++) {
        if (mass1[i] == mass2[j]) {
          mass1[i] = "";
          mass2[j] = "";
        }
       }
    }
    for (let i = 0; i < mass1.length; i++) {
      if (mass1[i] != null) final += mass1[i] + ' ';
    }
    for (let j = 0; j < mass2.length; j++) {
      if (mass1[j] != null) final += mass2[j] + ' ';
    }
    return final;
  }