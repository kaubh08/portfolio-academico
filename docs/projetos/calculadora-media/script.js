function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var resultado = document.getElementById('resultado');

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado.innerHTML = 'Preencha as três notas antes de calcular.';
        return;
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        resultado.innerHTML = 'Digite notas válidas entre 0 e 10.';
        return;
    }

    var media = (nota1 + nota2 + nota3) / 3;
    var situacao = '';

    if (media >= 7) {
        situacao = 'Aprovado';
    } else if (media >= 5) {
        situacao = 'Recuperação';
    } else {
        situacao = 'Reprovado';
    }

    resultado.innerHTML = '<strong>Média:</strong> ' + media.toFixed(2) + '<br><strong>Situação:</strong> ' + situacao;
}
