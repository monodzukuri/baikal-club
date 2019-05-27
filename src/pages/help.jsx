import React,{Component} from "react"

import Slides from "../components/slides"
import Section from "../components/section"
import Header from "../components/header"

export default class Index extends Component{
  render(){
    return(
        <Slides>
          <Header location={this.props.location}/>
          <Section>
            <h1 className="ae-1 huge">Помочь региону</h1>
            <p className="ae-2">Здесь что-то написать</p>
          </Section>
        </Slides>
    )
  }
}
