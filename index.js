class Coche {
  constructor(icono) {
    this.icono = icono;
    this.posicion = 200; // Posición inicial en la pista
    this.chocado = false; // Estado de choque
  }

  // Método para mover el coche y manejar colisiones con árboles
  mover(arboles) {
    if (this.chocado) {
      this.chocado = false; // Si estaba chocado, se recupera y no se mueve este turno
    } else {
      let avance = Math.floor(Math.random() * 3) + 1;
      let nuevaPosicion = this.posicion - avance;
      if (nuevaPosicion <= 0) {
        this.posicion = 0;
      } else {
        if (arboles.includes(nuevaPosicion)) {
          this.chocado = true; // Cambia el estado de chocado
          this.posicion = nuevaPosicion; // Mueve al coche a la posición del árbol y muestra el choque
        } else {
          this.posicion = nuevaPosicion;
        }
      }
    }
  }
}

let generarArboles = (coche) => {
  let cantidadArboles = Math.floor(Math.random() * 10) + 1;
  let arboles = new Set();
  while (arboles.size < cantidadArboles) {
    let posicionArbol = Math.floor(Math.random() * (coche.posicion - 1)) + 1;
    arboles.add(posicionArbol);
  }
  return Array.from(arboles);
};

let imprimirPista = (arboles, coche) => {
  let pista = ["🏁"];
  for (let i = 1; i <= coche.posicion; i++) {
    if (i === coche.posicion) {
      if (arboles.includes(i) && coche.chocado) {
        pista.push("💥");
      } else {
        pista.push(coche.icono);
      }
    } else if (arboles.includes(i)) {
      pista.push("🌲");
    } else {
      pista.push(" ");
    }
  }
  return pista.join("");
};

let juego = () => {
  let coche1 = new Coche("🚙");
  let coche2 = new Coche("🚗");
  let coche3 = new Coche("🚕");
  let coche4 = new Coche("🚛");
  let coche5 = new Coche("🚚");
  let coche6 = new Coche("🚓");
  let coche7 = new Coche("🚜");
  let coche8 = new Coche("🚒");
  let coche9 = new Coche("🚐");
  let coche10 = new Coche("🚘");
  let arboles1 = generarArboles(coche1);
  let arboles2 = generarArboles(coche2);
  let arboles3 = generarArboles(coche3);
  let arboles4 = generarArboles(coche4);
  let arboles5 = generarArboles(coche5);
  let arboles6 = generarArboles(coche6);
  let arboles7 = generarArboles(coche7);
  let arboles8 = generarArboles(coche8);
  let arboles9 = generarArboles(coche9);
  let arboles10 = generarArboles(coche10);

  let intervalo = setInterval(() => {
    coche1.mover(arboles1);
    coche2.mover(arboles2);
    coche3.mover(arboles3);
    coche4.mover(arboles4);
    coche5.mover(arboles5);
    coche6.mover(arboles6);
    coche7.mover(arboles7);
    coche8.mover(arboles8);
    coche9.mover(arboles9);
    coche10.mover(arboles10);

    console.clear();
    console.log(imprimirPista(arboles1, coche1));
    console.log(imprimirPista(arboles2, coche2));
    console.log(imprimirPista(arboles3, coche3));
    console.log(imprimirPista(arboles4, coche4));
    console.log(imprimirPista(arboles5, coche5));
    console.log(imprimirPista(arboles6, coche6));
    console.log(imprimirPista(arboles7, coche7));
    console.log(imprimirPista(arboles8, coche8));
    console.log(imprimirPista(arboles9, coche9));
    console.log(imprimirPista(arboles10, coche10));
    console.log("\n");

    if (
      coche1.posicion <= 0 ||
      coche2.posicion <= 0 ||
      coche3.posicion <= 0 ||
      coche4.posicion <= 0 ||
      coche5.posicion <= 0 ||
      coche6.posicion <= 0 ||
      coche7.posicion <= 0 ||
      coche8.posicion <= 0 ||
      coche9.posicion <= 0 ||
      coche10.posicion <= 0
    ) {
      clearInterval(intervalo);
      console.log(`🏁 ¡Ha finalizado la carrera! 🏁`);

      if (coche1.posicion <= 0) {
        console.log(`🚙 ¡El coche 1 ha ganado! 🚙`);
      } else if (coche2.posicion <= 0) {
        console.log(`🚗 ¡El coche 2 ha ganado! 🚗`);
      } else if (coche3.posicion <= 0) {
        console.log(`🚕 ¡El coche 3 ha ganado! 🚕`);
      } else if (coche4.posicion <= 0) {
        console.log(`🚛 ¡El coche 4 ha ganado! 🚛`);
      } else if (coche5.posicion <= 0) {
        console.log(`🚚 ¡El coche 5 ha ganado! 🚚`);
      } else if (coche6.posicion <= 0) {
        console.log(`🚓 ¡El coche 6 ha ganado! 🚓`);
      } else if (coche7.posicion <= 0) {
        console.log(`🚜 ¡El coche 7 ha ganado! 🚜`);
      } else if (coche8.posicion <= 0) {
        console.log(`🚒 ¡El coche 8 ha ganado! 🚒`);
      } else if (coche9.posicion <= 0) {
        console.log(`🚐 ¡El coche 9 ha ganado! 🚐`);
      } else if (coche10.posicion <= 0) {
        console.log(`🚘 ¡El coche 10 ha ganado! 🚘`);
      }
    }
  }, 100); // Se ejecuta cada 1000 ms (1 segundo)
};

juego();
