import SkillItem from './SkillItem'

const Skills = () => {
  return (
    <section class="skills">
      <div class="skills__container">
        <SkillItem class={"code"} text={"React"} />
        <SkillItem class={"code"} text={"Next.js"} />
        <SkillItem class={"code"} text={"NPM"} />
        <SkillItem class={"code"} text={"Javascript ES6"} />
        <SkillItem class={"code"} text={"HTML5"} />
        <SkillItem class={"code"} text={"Sass/SCSS"} />
        <SkillItem class={"code"} text={"CSS3"} />
        <SkillItem class={"code"} text={"PHP"} />
        <SkillItem class={"code"} text={"MySQL"} />
        <SkillItem class={"code"} text={"Github"} />
        <SkillItem class={"design"} text={"Adobe Illustrator"} />
        <SkillItem class={"design"} text={"Adobe Photoshop"} />
        <SkillItem class={"design"} text={"Adobe InDesign"} />
      </div>
    </section>
  )
}

export default Skills
