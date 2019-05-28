import React,{Component} from "react"

import Slides from "../components/slides"
import Section from "../components/section"

export default class Index extends Component{
  render(){
    return(
      <Slides>
        <Section>
          <h1 className="ae-1 huge">Страница не найдена!</h1>
          <p className="ae-2">Что-то вы не так ввели</p>
        </Section>
      </Slides>
    )
  }
}
