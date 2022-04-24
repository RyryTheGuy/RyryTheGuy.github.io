const projectSection = document.getElementById('projects');
projectSection.style.setProperty('--originalHeight', `${projectSection.scrollHeight}px`);

document.getElementById('expandToggle').addEventListener('click', function () {
  projectSection.classList.toggle('expand');
})