import React, {Component} from "react"

import Slides from "../components/slides"
import Section from "../components/section"
import Header from "../components/header"

export default class IndexRoute extends Component{
  render(){
    return(
      <Slides>
        <Header location={this.props.location}/>
        <Section
          background="img/lake-baikal-9.jpg"
          title = "Главная"
          name = "main"
          >
          <div className="fix-8-12">
            <img className="bclogo margin-bottom-4" src="bc.png" alt="Байкальский клуб"/>
            <h1 className="uppercase">Байкальский клуб</h1>
            <p className="hero cropBottom margin-top-3"><span className="opacity-8">Сообщество людей, неравнодушных к развитию Байкальского региона, собравшихся для совместной реализации приоритетных инициатив</span></p>
          </div>
        </Section>

        <Section
          background="stock-photo-79222029.webm"
          title = "О клубе"
          name = "about"
          >
          <div className="fix-10-12 toCenter">
            <h1 className="ae-1">Байкальский клуб основан 30 сентября 2017 года</h1>
            <p className="ae-2"><span className="opacity-8">Миссия - обеспечение действенной связи Байкальского региона с любящими и ценящими его людьми через реализацию инициатив и проектов, направленных на устойчивое развитие территории, сохранение уникальной экосистемы, повышение качества жизни нынешнего и будущих поколений.</span></p>
          </div>
          <div className="fix-12-12 margin-top-4">
            <ul className="flex grid-49 later equal">
              <li className="col-4-12">
                <div className="fix-3-12">
                  <i className="material-icons ae-3 fromCenter">assignment</i>
                  <h3 className="equalElement ae-4">Проекты</h3>
                  <div className="ae-5">
                    <p className="tiny opacity-6">Содействуем в проработке, экспертизе и реализации конкретных проектов, направленных на улучшение экономики и экологии Байкальского региона</p>
                  </div>
                </div>
              </li>
              <li className="col-4-12">
                <div className="fix-3-12 ae-4 fromCenter">
                  <i className="material-icons">event_available</i>
                  <h3 className="equalElement ae-5">Мероприятия</h3>
                  <div className="ae-6">
                    <p className="tiny opacity-6">Проводим стратегические сессии, тематические встречи, выездные мероприятия в регионы</p>
                  </div>
                </div>
              </li>
              <li className="col-4-12">
                <div className="fix-3-12 ae-5 fromCenter">
                  <i className="material-icons">forum</i>
                  <h3 className="equalElement ae-6">Коммуникация</h3>
                  <div className="ae-7">
                    <p className="tiny opacity-6">Взаимодействуем с Точками кипения в Иркутске и Чите, а также с общественными организациями</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <button className="button small uppercase round stroke flat white margin-top-4 ae-8">О клубе</button>
        </Section>

        <Section
          background="stock-photo-151474665.webm"
          title = "Проекты"
          name = "projects"
          >
          <div className="fix-10-12 toCenter">
            <h1 className="ae-1">Сейчас в работе 4 проекта</h1>
            <p className="fix-9-12 ae-2"><span className="opacity-8">Приветствуем инициативу и поддерживаем проекты, которые развивают регион</span></p>
          </div>
          <div className="fix-12-12">
            <ul className="grid grid-77 later equal left">
              <li className="col-3-12">
                <a href="#" className="box-77 ae-3">
                  <div className="thumbnail-77">
                    <img src="derevnya.jpg" alt="Picture" className="wide"/>
                  </div>
                  <div className="details-77 equalElement">
                    <div className="table wide">
                      <div className="cell">
                        <h3>Ай! Байкальская деревня</h3>
                        <p className="tiny opacity-6 cropBottom">Создание деревни нового поколения</p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="col-3-12">
                <a className="box-77 ae-4">
                  <div className="thumbnail-77" data-popup-id="77-2">
                    <img src="img/baikalcamp.jpg" alt="Picture" className="wide"/>
                  </div>
                  <div className="details-77 equalElement">
                    <div className="table wide">
                      <div className="cell">
                        <h3>БайкалКэмп</h3>
                        <p className="tiny opacity-6 cropBottom">Платформа для совместного проведения научных исследований на озере Байкал</p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="col-3-12">
                <a href="#" className="box-77 ae-5">
                  <div className="thumbnail-77">
                    <img src="img/health.jpg" alt="Picture" className="wide"/>
                  </div>
                  <div className="details-77 equalElement">
                    <div className="table wide">
                      <div className="cell">
                        <h3>БайкалФинЗдрав</h3>
                        <p className="tiny opacity-6 cropBottom">Повышение финансовой грамотности и снижение уровня закредитованности жителей</p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="col-3-12">
                <a href="#" className="box-77 ae-6">
                  <div className="thumbnail-77">
                    <img src="img/office.jpg" alt="Picture" className="wide"/>
                  </div>
                  <div className="details-77 equalElement">
                    <div className="table wide">
                      <div className="cell">
                        <h3>Офис Байкала</h3>
                        <p className="tiny opacity-6 cropBottom">Единое представительство Байкальского региона в Москве</p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </Section>

        <Section
          background="img-99.jpg"
          title = "Новости"
          name = "news"
          >
          <div className="fix-12-12 ae-1">
            <div className="swiper-container-4">
              <div className="swiper-wrapper">
                <a href="#" className="box-99 swiper-slide cursorGrab">
                  <div className="thumbnail-99 disableSelect">
                    <img src="img1-99.png" alt="Picture" className="wide"/>
                    <p className="title-slide-99">Программа общего собрания клуба 6 апреля</p>
                    <p className="date-slide-99"><img src="time.png"/><span>31 Мар 2019</span></p>
                    <div className="blackout-sl-4"></div>
                  </div>
                </a>
                <a href="#" className="box-99 swiper-slide cursorGrab">
                  <div className="thumbnail-99 disableSelect">
                    <img src="img2-99.png" alt="Picture" className="wide"/>
                    <p className="title-slide-99">Стратегическая сессия Байкальского Клуба 31 марта 2018</p>
                    <p className="date-slide-99"><img src="time.png"/><span>6 Апр 2018</span></p>
                    <div className="blackout-sl-4"></div>
                  </div>
                </a>
                <a href="#" className="box-99 swiper-slide cursorGrab">
                  <div className="thumbnail-99 disableSelect">
                    <img src="img3-99.png" alt="Picture" className="wide"/>
                    <p className="title-slide-99">Стратегическая сессия Байкальского Клуба состоится 31 марта</p>
                    <p className="date-slide-99"><img src="time.png"/><span>22 Мар 2018</span></p>
                    <div className="blackout-sl-4"></div>
                  </div>
                </a>
                <a href="#" className="box-99 swiper-slide cursorGrab">
                  <div className="thumbnail-99 disableSelect">
                    <img src="img4-99.png" alt="Picture" className="wide"/>
                    <p className="title-slide-99">Байкал для нас - это и гордость, и наша особая ответственность!</p>
                    <p className="date-slide-99"><img src="time.png"/><span>5 Фев 2018</span></p>
                    <div className="blackout-sl-4"></div>
                  </div>
                </a>
              </div>
              <div className="swiper-pagination ae-3"></div>
            </div>
            <button className="button small uppercase round stroke flat white margin-top-4 ae-8">Все новости</button>
          </div>
        </Section>

        <Section
          background="img-97.jpg"
          title = "Мероприятия"
          name = "events"
          >
          <div className="fix-10-12 toCenter">
            <h1 className="ae-1">Предстоящие мероприятия</h1>
          </div>
          <div className="fix-12-12">
            <div className="frame-97 ae-3 padding-bottom-3 margin-top-2">
              <p className="white calendar-97 absolute"><span className="center uppercase block bold month">июнь</span><span className="number regular">31</span></p>
              <h2 className="small align-left cropBottom inline-block padding-top-1">
                <span className="light margin-left-10 margin-left-phablet-0 title-group">Стратегическая сессия</span>
                <span className="regular dislocation">Москва</span>
                <a href="https://leader-id.ru/event/7316/" target="_blank" className="button blue gradient button-buy-97">Регистрация</a>
              </h2>
            </div>
            <div className="frame-97 ae-4 padding-bottom-3 margin-top-2">
              <p className="white calendar-97 absolute"><span className="center uppercase block bold month">апр</span><span className="number regular">6</span></p>
              <h2 className="small align-left cropBottom inline-block padding-top-1">
                <span className="light margin-left-10 margin-left-phablet-0 title-group">Общее собрание</span>
                <span className="regular dislocation">Иркутск</span>
                <a href="https://leader-id.ru/event/18958/" target="_blank" className="button blue gradient button-buy-97">Регистрация</a>
              </h2>
            </div>
            <div className="frame-97 ae-3 padding-bottom-3 margin-top-2">
              <p className="white calendar-97 absolute"><span className="center uppercase block bold month">июнь</span><span className="number regular">31</span></p>
              <h2 className="small align-left cropBottom inline-block padding-top-1">
                <span className="light margin-left-10 margin-left-phablet-0 title-group">Стратегическая сессия</span>
                <span className="regular dislocation">Москва</span>
                <a href="https://leader-id.ru/event/7316/" target="_blank" className="button blue gradient button-buy-97">Регистрация</a>
              </h2>
            </div>
            <div className="frame-97 ae-4 padding-bottom-3 margin-top-2">
              <p className="white calendar-97 absolute"><span className="center uppercase block bold month">апр</span><span className="number regular">6</span></p>
              <h2 className="small align-left cropBottom inline-block padding-top-1">
                <span className="light margin-left-10 margin-left-phablet-0 title-group">Общее собрание</span>
                <span className="regular dislocation">Иркутск</span>
                <a href="https://leader-id.ru/event/18958/" target="_blank" className="button blue gradient button-buy-97">Регистрация</a>
              </h2>
            </div>
          </div>
          <button className="button small uppercase round stroke flat white margin-top-4 ae-8">Прошедшие мероприятия</button>
        </Section>

        <Section
          background="stock-photo-299481331.webm"
          title = "Контакты"
          name = "contacts"
          >
          <div className="fix-10-12">
            <h1 className="ae-1">Байкальский клуб уже объединяет 350 человек</h1>
            <p className="ae-2"><span className="opacity-8">Присоединяйтесь и Вы, если готовы приложить свои знания, опыт, энергию и другие ресурсы для реализации инициатив и проектов, направленных на развитие Байкальского региона!</span></p>
            <ul className="grid equal fixedSpaces margin-top-3">
              <li className="col-6-12 ae-4">
                <div className="fix-3-12 equalElement">
                  <h6 className="uppercase opacity-8 margin-top-3 margin-bottom-2">Хочу сделать регион лучше</h6>
                  <p className="tiny"><a className="opacity-8" href="mailto:info@baikal.club">info@baikal.club</a></p>
                </div>
                <div className="fix-3-12 equalElement">
                  <h6 className="uppercase opacity-8 margin-top-3 margin-bottom-2">Есть проект/инициатива</h6>
                  <p className="tiny"><a className="opacity-8" href="mailto:info@baikal.club">info@baikal.club</a></p>
                </div>
                <div className="fix-3-12 equalElement">
                  <h6 className="uppercase opacity-8 margin-top-3 margin-bottom-2">Есть конкретная проблема в регионе, нужна помощь</h6>
                  <p className="tiny"><a className="opacity-8" href="mailto:info@baikal.club">info@baikal.club</a></p>
                </div>
              </li>
              <li className="col-6-12 ae-5">
                <div className="fix-3-12 equalElement">
                  <h6 className="uppercase opacity-8 margin-top-3 margin-bottom-2">Контактный номер</h6>
                  <p className="tiny"><a className="opacity-8" href="tel:+79151804898">8(915)180-48-98</a></p>
                </div>
                <div className="fix-3-12 equalElement">
                  <h6 className="uppercase opacity-8 margin-top-3 margin-bottom-2">Социальные сети</h6>
                </div>
              </li>
            </ul>
          </div>
        </Section>
        <nav className="panel bottom">
          <div className="sections">
            <div className="left"></div>
            <div className="center"><span className="nextSlide"><i className="material-icons">keyboard_arrow_down</i></span></div>
            <div className="right"></div>
          </div>
        </nav>
      </Slides>
    )
  }
}
