const menuLinks = document.querySelectorAll('.menu a')

//IntersectionObserver serve para observar quando um elemento sai e entra na tela,
//coloquei isso para ir mudando o menu toda vez que entra 50% de uma section na tela
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const link = document.querySelector(`.menu a[href="#${entry.target.id}"]`)

        if (entry.isIntersecting) {
            menuLinks.forEach(l => l.classList.remove('active'))
            link.classList.add('active')
        }
    })
}, {
    threshold: 0.5
})

document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section)
})


//envia o formulário para o meu email, teve que ser feito dessa forma
//pq por padrão o formspree abre uma página com anunicio deles, ai foi
//tirado o comportamento padrão e.preventDefault() e caso desse certo
//só mostra um icone de correto

const form = document.getElementById("contact__form")
const formStatus = document.getElementById("form__status")

//função async pq tem que esperar a resposta do servidor para então
//dar continuidade no tratamento da informação
form.addEventListener("submit", async e => {
    e.preventDefault()

    const formtURL = "https://formspree.io/f/mgvzbonv"

    try {
        const formData = new FormData(form)

        const response = await fetch(formtURL, {
            method: 'POST',
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })

        if(response.ok){
            const icon = document.createElement("i")
            icon.classList.add("fa-solid", "fa-check")
            formStatus.replaceWith(icon)
            form.reset()
        }else{
            const icon = document.createElement("i")
            icon.classList.add("fa-solid", "fa-xmark")
            formStatus.replaceWith(icon)
            form.reset()
        }
    } catch (error) {
        const icon = document.createElement("i")
        icon.classList.add("fa-solid", "fa-xmark")
        formStatus.replaceWith(icon)
        form.reset()
        console.error("Erro", error)
    }
})


// cria uma função para copiar as informações de contato quando clicadas
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copiado: " + text)
    }).catch(err => {
        console.error("Erro ao copiar: ", err)
    })
}