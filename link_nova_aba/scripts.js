const url = 'https://www.google.com'
const btn = document.querySelector('#btn')

function openInNewTab(url){
    const janela = window.open(url, '_blank')
    janela.focus()
}

btn.addEventListener('click', () => {
    openInNewTab(url)
})