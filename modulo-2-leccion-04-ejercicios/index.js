//Ejercicico 2
function media(a, b, c, d) {
    return (a + b + c) / d;
  }
  const kakota = media(10, 14, 34, 3);
  console.log(kakota);

  //Ejercicio 3
function math_fuera(a){
    const no_IVA = a;
    const IVA = a*0.21;
    const total = no_IVA + IVA;
    return `Precio sin IVA: ${no_IVA}, IVA: ${IVA} y Total: ${total}.`
}
  const result = math_fuera (10);
  console.log(result);
