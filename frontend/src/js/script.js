// Carregamento da Foto
  const fotoInput = document.getElementById('foto');
  const previewContainer = document.getElementById('preview');

  fotoInput.addEventListener('change', function () {
    const file = this.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        previewContainer.innerHTML = ''; // limpa
        const img = document.createElement('img');
        img.src = e.target.result;
        previewContainer.appendChild(img);
      };

      reader.readAsDataURL(file);
    } else {
      previewContainer.innerHTML = '<span>Sem imagem</span>';
    }
  });

