

const AboutProject = () => {

  return (
    <div className="about-project" id="about-project">
      <h2 className="about-project__header main__header grid-block">О проекте</h2>
      <h3 className="about-project__sub-header about-project__sub-header_left grid-block">
        Дипломный проект включал 5 этапов
      </h3>
      <p className="about-project__text about-project__text_left grid-block">
        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
      </p>
      <h3 className="about-project__sub-header about-project__sub-header_right grid-block">
        На выполнение диплома ушло 5 недель
      </h3>
      <p className="about-project__text about-project__text_right grid-block">
        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
      </p>
      <div className="about-project__progress about-project__progress_left grid-block">1 неделя</div>
      <div className="about-project__progress about-project__progress_right grid-block">4 недели</div>
      <p className="about-project__caption about-project__caption_left grid-block">Back-end</p>
      <p className="about-project__caption about-project__caption_right grid-block">Front-end</p>
    </div>
  )
}

export default AboutProject
