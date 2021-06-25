const SkillItem = (props) => {
  return (
    <div className={props.class + " skills__item"}>
      {props.text}
    </div>
  )
}

export default SkillItem
