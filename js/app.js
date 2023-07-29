function sumar() {
    const forma = document.getElementById("forma");
    let a = forma["operandoA"];
    let b = forma["operandoB"];
    let resultado = parseInt(a.value) + parseInt(b.value);
    if(isNaN(resultado))
        resultado = "La operación no incluye números";
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}