import studentPhoto from '../../images/studentPhoto.png'

const AboutMe = () => {
  return (
    <section className="about-me" id="student">
      <h2 className="about-me__header main__header">Студент</h2>
      <div className="about-me__container">
        <h3 className="about-me__name">Виталий</h3>
        <h4 className="about-me__profession">Фронтенд-разработчик, 30 лет</h4>
        <p className="about-me__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании
          «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл
          с постоянной работы.
        </p>
        <a className="about-me__link" href="https://github.com/Fi1imon" target="_blank" rel="noreferrer">Github</a>
      </div>
      <img className="about-me__photo" src={studentPhoto} alt="student"/>
    </section>
  )
}

export default AboutMe
