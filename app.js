const projectSection = document.getElementById('projects');
const expandIcon = document.getElementById('expandToggle').children.item(0);
console.log('Icon', expandIcon);

projectSection.style.setProperty('--originalHeight', `${projectSection.scrollHeight}px`);

document.getElementById('expandToggle').addEventListener('click', function () {
  projectSection.classList.toggle('expand');
  expandIcon.classList.toggle('fa-chevron-up');  
  expandIcon.classList.toggle('fa-chevron-down');  
})