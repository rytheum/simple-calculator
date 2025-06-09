document.addEventListener("DOMContentLoaded", () => {
  const angkaPertamaInput = document.getElementById("angkaPertama");
  const angkaKeduaInput = document.getElementById("angkaKedua");
  const operatorButtons = document.querySelectorAll(".operator-btn");
  const resultDiv = document.getElementById("result");
  const resetBtn = document.getElementById("resetBtn"); 

  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const operator = button.dataset.operator;

      const angka1 = parseFloat(angkaPertamaInput.value);
      const angka2 = parseFloat(angkaKeduaInput.value);

      resultDiv.classList.remove("error");
      resultDiv.style.color = "#333";

      if (isNaN(angka1) || isNaN(angka2)) {
        resultDiv.textContent = "Masukkan angka yang valid!";
        resultDiv.classList.add("error");
        return;
      }

      let hasilPerhitungan;
      let errorMessage = "";

      switch (operator) {
        case "tambah":
          hasilPerhitungan = angka1 + angka2;
          break;
        case "kurang":
          hasilPerhitungan = angka1 - angka2;
          break;
        case "kali":
          hasilPerhitungan = angka1 * angka2;
          break;
        case "bagi":
          if (angka2 === 0) {
            errorMessage = "Tidak bisa dibagi dengan nol!";
          } else {
            hasilPerhitungan = angka1 / angka2;
          }
          break;
        default:
          errorMessage = "Operasi tidak dikenal!";
          break;
      }

      if (errorMessage) {
        resultDiv.textContent = errorMessage;
        resultDiv.classList.add("error");
      } else {
        let displayResult = parseFloat(hasilPerhitungan.toFixed(2));

        resultDiv.textContent = `Hasil: ${displayResult}`;
        resultDiv.style.color = "#28a745";
      }
    });
  });


  resetBtn.addEventListener("click", () => {
    angkaPertamaInput.value = ""; 
    angkaKeduaInput.value = ""; 
    resultDiv.textContent = "";  
    resultDiv.style.color = "#333"; 
  });
});
