export const animateById = (id, animation = 'fadeInLeft', duration = 500) => {
  const e = document.getElementById(id)
  e.classList.add('animated')
  e.classList.add('animation-default-config')
  e.classList.add(animation)
  setTimeout(() => {
    e.classList.remove('animated')
    e.classList.remove(animation)
  }, duration)
}
