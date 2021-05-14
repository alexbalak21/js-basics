document.getElementById('input').addEventListener('click', dispIput)

function dispIput(event) {
  event.preventDefault()
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
