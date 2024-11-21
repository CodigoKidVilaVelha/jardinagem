
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
       
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('.form-contato').addEventListener('submit',function(e) {
    e.preventDefault();

const nome = document.getElementById('nome').value;
const email = document.getElementById('E-mail').value;
const mensagem = document.getElementById('mensagem').value;
 
let isValid = true
let errorMessage = "";
 if (nome.trim()===""){
    errorMessage += "nome é obrigatório. /n";
    isValid = false;
 }
 const emailregex  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (email.trim()===""|| !emailregex.test(email)){
    errorMessage += "Por favor, insira um e-mail válido.\n";
    isValid = false;
}
if (mensagem.trim()===""){
    errorMessage += "mensagem nao pode estar em branco.\n";
    isValid = false;
}
if (isValid) {
    alert("Formulário enviado com sucesso!");
    // Aqui você pode incluir o código para enviar o formulário via Ajax, por exemplo.
} else {
    alert(errorMessage);
}
});
document.querySelectorAll('.product').forEach(product =>{
    product.addEventListener('mouseenter',function(){
        this.style.transform = "scale(1.1)";
        this.style.transition = 'transform 0.3s ease-in-out';
    });
    product.addEventListener('mouseleave',function(){
        this.style.transform = "scale(1)";
    });
});