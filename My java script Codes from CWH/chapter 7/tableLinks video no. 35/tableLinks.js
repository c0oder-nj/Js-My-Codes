let t = document.body.firstElementChild.firstElementChild
console.log(t)

// now methods of table links 
// first table.rows
//t.rows will give me all the rows of my table in the form of html collection
console.log(t.rows)


// table.captions // will return me caption of the table
console.log(t.caption)

console.log(t.tHead)
console.log(t.tFoot) // our table does not have tfoot

console.log(t.tBodies) // return html collectiom of tbody elements
// let tBodies = t.tBodies
// console.log(tBodies.trows)
// console.log(tBodies.rows)

// tr = t.rows
// console.log(tr.cells)


console.log(typeof document, typeof window)