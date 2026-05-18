function calcularMedia() {
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);
    const resultado = document.getElementById("resultado");

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        resultado.innerHTML = "Digite notas válidas entre 0 e 10.";
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;

    let situacao = "";

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    resultado.innerHTML = `
        <strong>Média:</strong> ${media.toFixed(2)}<br>
        <strong>Situação:</strong> ${situacao}
    `;
}
