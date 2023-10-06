const reposData = JSON.parse(localStorage.getItem('reposData'));

if (Array.isArray(reposData)) {
    const ul = document.querySelector('ul');

    reposData.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `<h3>${item.name.toUpperCase()}</h3><a href="${item.html_url}">URL: ${item.html_url}</a>`;
        ul.appendChild(li);
    });
} else {
    console.log('Nenhum dado de repositório disponível.');
}