(function () {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("init");

    const containerBtns = document.querySelector("#containerBtns");

    const btnPedra = containerBtns.querySelector("#btnPedra");
    const btnPapel = containerBtns.querySelector("#btnPapel");
    const btnTesoura = containerBtns.querySelector("#btnTesoura");

    const computador = document.querySelector("#escolhaComputador");
    const usuario = document.querySelector("#escolhaUsuario");
    const vencedor = document.querySelector("#mostrarVencedor");

    if (
      !btnPedra ||
      !btnPapel ||
      !btnTesoura ||
      !computador ||
      !usuario ||
      !vencedor
    ) {
      return;
    }

    const escolhaComputador = () => {
      let valorEscolhaComputador = Math.random();

      if (valorEscolhaComputador < 0.33) {
        computadorEscolha = "pedra";
      } else if (valorEscolhaComputador <= 0.66) {
        computadorEscolha = "papel";
      } else {
        computadorEscolha = "tesoura";
      }
    };

    const compare = (escolha_usuario, escolha_computador) => {
      if (escolha_usuario === escolha_computador) {
        return "Empate!";
      } else if (escolha_usuario === "pedra") {
        if (escolha_computador === "tesoura") {
          return "Pedra vence";
        } else {
          return "Papel vence";
        }
      } else if (escolha_usuario === "papel") {
        if (escolha_computador === "pedra") {
          return "papel vence";
        } else {
          return "tesoura vence";
        }
      } else if (escolha_usuario === "tesoura") {
        if (escolha_computador === "pedra") {
          return "pedra vence";
        } else {
          return "tesoura vence";
        }
      }
    };

    const mostrar_vencedor = (
      escolhaUsuario,
      escolhaComputador,
      escolhaVencedor
    ) => {
      computador.innerHTML = escolhaComputador;
      usuario.innerHTML = escolhaUsuario;
      vencedor.innerHTML = escolhaVencedor;
    };

    btnPedra.addEventListener("click", (event) => {
      event.preventDefault();

      escolhaComputador();
      mostrar_vencedor(
        "pedra",
        computadorEscolha,
        compare("pedra", computadorEscolha)
      );
    });

    btnPapel.addEventListener("click", (event) => {
      event.preventDefault();
      escolhaComputador();
      mostrar_vencedor(
        "papel",
        computadorEscolha,
        compare("pedra", computadorEscolha)
      );
    });

    btnTesoura.addEventListener("click", (event) => {
      event.preventDefault();
      escolhaComputador();
      mostrar_vencedor(
        "tesoura",
        computadorEscolha,
        compare("pedra", computadorEscolha)
      );
    });
  });
})();
