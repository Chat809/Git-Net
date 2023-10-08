let reposData = JSON.parse(localStorage.getItem('reposData'));
let userData = JSON.parse(localStorage.getItem('userData'));

if (reposData) {
    const ul = document.querySelector('ul');

    reposData.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `<h3>${item.name.toUpperCase()}</h3><a href="${item.html_url}">URL: ${item.html_url}</a>`;
        ul.appendChild(li);
    });
} else {
    console.log('Nenhum dado de repositório disponível.');
}

if (userData) {
    document.getElementById("imagem-perfil").src = userData.avatar_url;
    document.getElementById("urlUser").href = userData.html_url;
    document.getElementById("descricao").textContent = userData.bio || "Usuário do GitHub";
    document.getElementById("nomeUser").textContent = userData.login;
} else {
    console.log('Nenhum dado de usuário disponível.');
}