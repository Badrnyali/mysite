// Skill Section Animation
let skills = document.querySelector(".skills");

window.onscroll = function(){

  // SkillOffste Top
  let skillOffsteTop = skills.offsetTop;

  // Skill OuterHeight
  let skillOuterHeight = skills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  //Window scroll top
  let windowScrollTop = this.scrollY;

  if (windowScrollTop >= skillOffsteTop + skillOuterHeight - windowHeight) {

  let allSkills = document.querySelectorAll(".skill-progress span");

  allSkills.forEach(skill => {

    skill.style.width = skill.dataset.progress;

  });
}
}
