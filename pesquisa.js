const botao = document.getElementById("btnClick");
const input = document.getElementById('pesquisa');

botao.addEventListener("click", function requestApi() {
    let usuarioSelecionado = input.value
    if (usuarioSelecionado == "") {
        alert("Selecione o usuário");
    } else {
        const apiUrlRepos = `https://api.github.com/users/${usuarioSelecionado}/repos`;
        const apiUrlUser = `https://api.github.com/users/${usuarioSelecionado}`;

        fetch(apiUrlRepos)
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();

            localStorage.setItem('reposData', JSON.stringify(data));

            window.location.href = "git.html";
        })
        .catch(e => console.log(e));

        fetch(apiUrlUser)
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let dataUser = await res.json();

            localStorage.setItem('userData', JSON.stringify(dataUser));
        })
        .catch(e => console.log(e));
    }
});
