import React,{Component} from "react"

import Slides from "../components/slides"
import Section from "../components/section"
import Header from "../components/header"

export default class Baikal extends Component{
  render(){
    return(
      <Slides>
        <Header location={this.props.location}/>
        <Section  classNames = "whiteSlide">
          <h1 className="ae-1 huge">О регионе</h1>
          <p className="ae-2">Написать текст</p>
        </Section>
      </Slides>
    )
  }
}
