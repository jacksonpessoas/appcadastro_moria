// const filhosSim = document.getElementById('filhosSim');
//   const filhosNao = document.getElementById('filhosNao');
//   const dadosFilhos = document.getElementById('dadosFilhos');
//   const quantidadeFilhos = document.getElementById('quantidadeFilhos');
//   const nomesFilhos = document.getElementById('nomesFilhos');

//   function toggleDadosFilhos() {
//     if (filhosSim.checked) {
//       dadosFilhos.style.display = 'block';
//       quantidadeFilhos.required = true;
//       nomesFilhos.required = true;
//     } else {
//       dadosFilhos.style.display = 'none';
//       quantidadeFilhos.required = false;
//       nomesFilhos.required = false;
//     }
//   }

//   filhosSim.addEventListener('change', toggleDadosFilhos);
//   filhosNao.addEventListener('change', toggleDadosFilhos);



const filhosSim = document.getElementById('filhosSim');
  const filhosNao = document.getElementById('filhosNao');
  const quantidadeFilhos = document.getElementById('quantidadeFilhos');
  const nomesFilhos = document.getElementById('nomesFilhos');

  function toggleCamposFilhos() {
    const habilitar = filhosSim.checked;
    quantidadeFilhos.disabled = !habilitar;
    nomesFilhos.disabled = !habilitar;

    // Define os campos como obrigatórios apenas se habilitados
    quantidadeFilhos.required = habilitar;
    nomesFilhos.required = habilitar;
  }

  filhosSim.addEventListener('change', toggleCamposFilhos);
  filhosNao.addEventListener('change', toggleCamposFilhos);

  // Inicializa o estado dos campos ao carregar a página
  window.addEventListener('DOMContentLoaded', toggleCamposFilhos);



