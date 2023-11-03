const Portfolio = () => {

  return (
    <div className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/Fi1imon/how-to-learn" target="_blank" rel="noreferrer">
            <p className="portfolio__link-text portfolio__link-text_left">Статичный сайт</p>
            <p className="portfolio__link-text portfolio__link-text_right">↗</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/Fi1imon/russian-travel" target="_blank" rel="noreferrer">
            <p className="portfolio__link-text portfolio__link-text_left">Адаптивный сайт</p>
            <p className="portfolio__link-text portfolio__link-text_right">↗</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/Fi1imon/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
            <p className="portfolio__link-text portfolio__link-text_left">Одностраничное приложение</p>
            <p className="portfolio__link-text portfolio__link-text_right">↗</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
