// ====== Navegação ativa ======
// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.navlist a')

// Função para adicionar a classe 'active' no link clicado
function activeLink(){
    navLinks.forEach(item => item.classList.remove('active'))
    this.classList.add('active');
}

// Adiciona um evento de clique no link de navegação

navLinks.forEach(item => item.addEventListener('click', activeLink));
