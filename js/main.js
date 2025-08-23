const menuLinks = document.querySelectorAll('.menu a')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const link = document.querySelector(`.menu a[href="#${entry.target.id}"]`)

        if (entry.isIntersecting) {
            menuLinks.forEach(l => l.classList.remove('active'))
            link.classList.add('active')
        }
    })
}, {
    threshold: 0.5 // Ativa quando 50% da seção estiver visível
})

document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section)
})


const form = document.getElementById("contact__form")
const formStatus = document.getElementById("form__status")

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


function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copiado: " + text);
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
    });
}