import React, {Component} from "react"

import Sidebar from "../components/sidebar"

export default class Header extends Component{
  render(){
    return(
      <React.Fragment>
        <nav className="side line left">
          <div className="navigation">
            <ul></ul>
          </div>
        </nav>
        <nav className="panel top hideOnScroll">
          <div className="sections desktop">
            <div className="left"><a href="#"></a></div>
            <div className="center">
              <ul className="menu">

              </ul>
            </div>
            <div className="right"><span className="button actionButton sidebarTrigger" data-sidebar-id="1"><i className="material-icons">menu</i></span></div>
          </div>
          <div className="sections compact hidden">
            <div className="left"></div>
            <div className="right"><span className="button actionButton sidebarTrigger" data-sidebar-id="1"><i className="material-icons">menu</i></span></div>
          </div>
        </nav>
        <Sidebar
          location={this.props.location}
          topMain={[
            {href:"#about", text:"О клубе"},
            {href:"#projects", text:"Проекты"},
            {href:"#news", text:"Блог"},
            {href:"#events", text:"События"},
            {href:"#contacts", text:"Контакты"}
          ]}
          top={[
            {href:"/", text:"На главную"},
            {href:"/#events", text:"События"},
            {href:"/#news", text:"Блог"}
          ]}
          bottom={[
            {href:"/join", text:"Вступить в клуб"},
            {href:"/help", text:"Помочь региону"},
            {href:"/blog", text:"Блог"},
            {href:"/events", text:"События"}
          ]}
        />
      </React.Fragment>
    )

  }
}
