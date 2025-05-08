let etapaAtual = 0;
    const etapas = document.querySelectorAll('.etapa');

    function mostrarEtapa(index) {
      etapas.forEach((etapa, i) => {
        etapa.classList.toggle('ativa', i === index);
      });
    }

    function proximaEtapa() {
      if (etapaAtual < etapas.length - 1) {
        etapaAtual++;
        mostrarEtapa(etapaAtual);
      }
    }

    function voltarEtapa() {
      if (etapaAtual > 0) {
        etapaAtual--;
        mostrarEtapa(etapaAtual);
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      mostrarEtapa(etapaAtual);
    });


//.........Verifica se os campos obrigatorios estao preenchidos para salvar.............//


// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.querySelector('form');
//   const btnSalvar = document.getElementById('btnSalvar');

//   function verificarCamposObrigatorios() {
//     const camposObrigatorios = form.querySelectorAll('input[required], select[required], textarea[required]');
//     for (let campo of camposObrigatorios) {
//       if (!campo.value.trim()) {
//         btnSalvar.disabled = true;
//         return;
//       }
//     }
//     btnSalvar.disabled = false;
//   }

//   form.addEventListener('input', verificarCamposObrigatorios);
// });

//.....................................................................................//

function telaInicial() {
  window.location.href = '../../index.html'; // Ajuste este caminho conforme necessário
}