document.getElementById('message').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do botão enviar (submit)

    // Oculta o formulário
    var myForm = document.getElementById('my_form');
    myForm.style.display = 'none';
    myForm.style.opacity = '0';
    myForm.style.visibility = 'hidden';

    // Exibe a mensagem de sucesso
    document.querySelector('.show_message').style.display = 'block';
    sessionStorage.setItem('formHidden', 'true');
});

document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o valor indicando que o formulário deve permanecer oculto está presente no sessionStorage
    var formHidden = sessionStorage.getItem('formHidden');

    if (formHidden) {
        // Manter o formulário oculto
        document.getElementById('my_form').style.display = 'none';
        document.querySelector('.show_message').style.display = 'block';
    }
});


const opcoes = document.querySelectorAll('.option');

opcoes.forEach(opcao => {
    opcao.addEventListener('click', (event) => {
        event.preventDefault()
        opcoes.forEach(o => o.classList.remove('selecionado'));
        opcao.classList.add('selecionado');
    });
});

