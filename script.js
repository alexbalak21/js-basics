document.getElementById('inputDisp').addEventListener('click', dispIput)
document.getElementById('formDisp').addEventListener('click', dispForm)
document.getElementById('afterDisp').addEventListener('click', insertAfter)

function dispIput() {
  document.getElementById('disp').innerHTML = `
    <h2>INSTANT INPUT</h2>
    <input id="instant" type="text" />
    <br>
    <h4>Useful for a Search:</h4>
    `
  let input = document.getElementById('instant')
  input.addEventListener('input', () => {
    document.getElementById('output').innerHTML = `<h3>${input.value}</h3>`
  })
}

function dispForm() {
  document.getElementById('disp').innerHTML = `
  <form action="send.html" id="form">
  <label>Name:</label><br>
  <input type="text" name="name" id="name"><br>
  <p id='warn'></p>
  <input type="checkbox" id="checkbox" />
  <label>Agree</label><br />
  <input type="submit" value="Submit">
</form>
  `
  document.getElementById('name').value = 'Some name'
  document.getElementById('form').addEventListener('submit', checkForm)
}

function checkForm(event) {
  event.preventDefault()
  let input = document.getElementById('name').value
  let checkbox = document.getElementById('checkbox').checked
  if (input == '') document.getElementById('warn').innerHTML = 'IMPUT IS EMPTY'
  if (!checkbox) document.getElementById('warn').innerHTML += '<br>Checkbox is not Cheked'
  if (checkbox && input != '') document.getElementById('form').submit()
}

function insertAfter(event) {
  document.getElementById('disp').innerHTML = `
<h3>INSERT AFTER ID:</h3>
<form action="#" id="textForm">
  <label>ID to Insert After:</label><br />
  <input type="text" id="id" />
  <br />
  <label>Type, ex: p, div, h1...:</label><br />
  <input type="text" id="type" /><br />
  <label>Content:</label><br />
  <textarea id="text" cols="30" rows="10"></textarea><br />
  <input type="submit" value="Submit" />
</form>
<h3>Output</h3>
<div id="first">first</div>
<br />
<div id="second">second</div>
<br />
<div id="third">third</div>
`
  document.getElementById('textForm').addEventListener('submit', processForm)
}

function processForm(event) {
  event.preventDefault()
  let id = document.getElementById('id').value
  let type = document.getElementById('type').value
  let text = document.getElementById('text').value
  addAfetr(id, type, text)
}

function addAfetr(id, type, text) {
  let element = document.createElement(`${type}`)
  let content = document.createTextNode(text)
  element.append(content)
  let ref = document.getElementById(`${id}`)
  ref.parentNode.insertBefore(element, ref.nextElementSibling)
}

// function test(event) {
//   event.preventDefault()
//   let input = document.getElementsByName("name")[0].value
//   console.log(input)
//   document.getElementsByName("name")[0].value = "Max"
//   document.getElementById("form").submit()
