const Techs = () => {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__header main__header ">Технологии</h2>
      <h3 className="techs__sub-header">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
        <ul className="techs__container">
          <li className="techs__tech">HTML</li>
          <li className="techs__tech">CSS</li>
          <li className="techs__tech">JS</li>
          <li className="techs__tech">React</li>
          <li className="techs__tech">Git</li>
          <li className="techs__tech">Express.js</li>
          <li className="techs__tech">MongoDB</li>
        </ul>
    </section>
  )
}

export default Techs
