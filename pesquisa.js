const botao = document.getElementById("btnClick");
const select = document.getElementById('pesquisa');

botao.addEventListener("click", function requestApi() {
    let usuarioSelecionado = select.value;

    if (usuarioSelecionado == "placeholder-select") {
        alert("Selecione o usuário");
    } else {
        const apiUrl = `https://api.github.com/users/${usuarioSelecionado}/repos`;

        fetch(apiUrl)
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();

            localStorage.setItem('reposData', JSON.stringify(data));

            window.location.href = "git.html";
        })
        .catch(e => console.log(e));
    }
});
