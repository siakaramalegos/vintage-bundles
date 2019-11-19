window.onload = () => {
  const node = document.getElementById('loading')
  node.addEventListener('click', () => {
    node.innerHTML = ''
    window.setTimeout(() => {
      node.innerHTML = 'User experience!'
    }, 7500)
  })
}
