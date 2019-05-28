import React,{Component} from "react"

import Slides from "../components/slides"
import Section from "../components/section"
import Header from "../components/header"

export default class Index extends Component{
  render(){
    return(
      <Slides>
        <Header location={this.props.location}/>
        <Section classNames = "whiteSlide">
          <div className="fix-10-12 left">
            <h1 className="ae-1 center">О Байкальском клубе</h1>
            <p className="ae-2">Байкальский клуб основан 30 сентября 2017 года.</p>
            <p className="ae-3">Миссия - обеспечение действенной связи Байкальского региона с любящими и ценящими его людьми через реализацию инициатив и проектов, направленных на устойчивое развитие территории, сохранение уникальной экосистемы, повышение качества жизни нынешнего и будущих поколений.</p>
            <h2 className="ae-4 center">Байкальский клуб:</h2>
            <p className="ae-5">-  содействует в проработке, экспертизе и реализации конкретных проектов, направленных на улучшение экономики и экологии Байкальского региона</p>
            <p className="ae-6">- проводит стратегические сессии, тематические встречи, выездные мероприятия в регионы</p>
            <p className="ae-7">- взаимодействует с Точками кипения в Иркутске и Чите</p>
            <p className="ae-8">- обеспечивает деятельность Проектного офиса для внутренней и внешней координации работы</p>
            <p className="ae-9">- взаимодействует с общественными организациями Байкальского региона  («Деловая Россия», Клуб «Байкальские стратегии»)</p>
          </div>
        </Section>
      </Slides>
    )
  }
}
