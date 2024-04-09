document.getElementById('message').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do botão enviar (submit)

    // Oculta o formulário
    document.getElementById('my_form').style.display = 'none';

    // Exibe a mensagem de sucesso
    document.querySelector('.show_message').style.display = 'block';
});

const opcoes = document.querySelectorAll('.option');

opcoes.forEach(opcao => {
    opcao.addEventListener('click', () => {
        opcoes.forEach(o => o.classList.remove('selecionado'));
        console.log("teste")
        opcao.classList.add('selecionado');
    });
});