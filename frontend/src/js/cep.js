function buscarcep() {
    let cep = document.getElementById("cep").value;
    if (cep !== "") {
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;

        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        req.onload = function () {
            if (req.status === 200) {
                let endereco = JSON.parse(req.response);
                document.getElementById("rua").value = endereco.street;
                document.getElementById("bairro").value = endereco.neighborhood;
                document.getElementById("cidade").value = endereco.city;
                document.getElementById("uf").value = endereco.state;
            }
            else if (req.status === 400) {
                alert("CEP inválido");
            }
            else{
                alert("Erro ao fazer a requisição");
            }

        }
    }
}

window.onload = function(){
    let cep = document.getElementById("cep");
    cep.addEventListener("blur", buscarcep);
}