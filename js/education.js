const tabLinks = document.querySelectorAll('.tab__links')
const tabContents = document.querySelectorAll('.tab__contents')

const opentab = (tabname, element) => {
    tabLinks.forEach(link => link.classList.remove('active__link'))
    tabContents.forEach(content => content.classList.remove('active__tab'))

    element.classList.add('active__link')
    document.getElementById(tabname).classList.add('active__tab')
}

tabLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        opentab(link.dataset.tab, event.currentTarget)
    })
})
