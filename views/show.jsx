const React = require('react')
const Default = require('./layouts/Default')

function Show({ bread, index }) {
  // Confirm we are getting our bread data in the terminal.
  // console.log(bread.name)
  return (
    <Default>
      <h3 style={{textAlign : "center"}}>{bread.name}</h3>
      <img src={bread.image} alt={bread.name} />
      <p style={{textAlign : "center"}}> {bread.getBakedBy()} and it
        {
          bread.hasGluten
            ? <span> does </span>
            : <span> does NOT </span>
        }
        have gluten.
      </p>
      <li style={{textAlign : "center"}}>
        <a href="/breads" >Go home</a>
      </li>
      <div style={{display : "flex", justifyContent: "center"}}>
        <a href={`/breads/${bread.id}/edit`}>
          <button style={{marginRight : ".5em" }}>
            Edit
          </button>
        </a>
        <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
          <input type='submit' value="DELETE" />
        </form>
      </div>
    </Default>
  )
}


module.exports = Show
