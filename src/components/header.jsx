import React, {Component} from "react"
import {withPrefix} from "gatsby"

import Sidebar from "../components/sidebar"
import SideNav from "../components/sideNav"

export default class Header extends Component{
  constructor(props) {
  super(props);
  this.state = {sidebarShown:false};
  }

  onToggleSidebar = () => {
    this.setState(()=>{
      return{
        sidebarShown:!this.state.sidebarShown
        };
    });
  };

  render(){
    const html = document.documentElement;
    if (this.state.sidebarShown){
      html.classList.add('sidebarShown');
    }else{
      html.classList.remove('sidebarShown');
    }
    const isHomepage = this.props.location.pathname === withPrefix("/");
    return(
      <React.Fragment>
        {isHomepage && <SideNav/>}
        <nav className="panel top hideOnScroll">
          <div className="sections desktop">
            <div className="left"><a href="#"></a></div>
            <div className="center">
              <ul className="menu">

              </ul>
            </div>
            <div className="right"><span className="button actionButton" onClick={this.onToggleSidebar}><i className="material-icons">menu</i></span></div>
          </div>
          <div className="sections compact hidden">
            <div className="left"></div>
            <div className="right"><span className="button actionButton" onClick={this.onToggleSidebar}><i className="material-icons">menu</i></span></div>
          </div>
        </nav>
        <Sidebar
          onToggle={this.onToggleSidebar}
          visible={this.state.sidebarShown}
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
            {href:"/about", text:"О клубе"},
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
