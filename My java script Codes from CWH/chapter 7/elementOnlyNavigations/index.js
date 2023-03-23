let b = document.body
console.log("First child of b is ",b.firstChild)
console.log('First element child of b is ',b.firstElementChild)
console.log()
console.log('Last element child of b is ',b.lastElementChild)
console.log('Last child of b is ',b.lastChild)

const changeBg= (color) =>{
    document.body.style.background = color
}

changeBg('wheat')

const styleForNav = (nav) =>{
    nav.style.display = 'flex'
}

styleForNav(b.firstElementChild)