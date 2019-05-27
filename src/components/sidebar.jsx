import React, {Component} from "react"
import { Link, withPrefix } from "gatsby"

export default class Sidebar extends Component{

    render(){
      const isHomepage = this.props.location.pathname === withPrefix("/")
      const bottom = this.props.bottom;
      const top = isHomepage ? this.props.topMain : this.props.top;
      let mainMenu = "";
      let subMenu = "";

      if (top) {
        mainMenu = top.map((item) =>
          <TopSideNavItem key={item.text} href={item.href} text={item.text} />
          );
      }
      if (bottom){
        subMenu = bottom.map((item) =>
          <SideNavItem key={item.text} href={item.href} text={item.text} />
          )
      }
      function TopSideNavItem(props) {
        if (isHomepage){
          return <li><a href={props.href}>{props.text}</a></li>;
        }else{
          return <li><Link to={props.href}>{props.text}</Link></li>;
        }
      }
      function SideNavItem(props) {
        return <li><Link to={props.href}>{props.text}</Link></li>;
      }

      return(
        <nav className="sidebar" data-sidebar-id="1">
          <div className="close"><i className="material-icons">close</i></div>
          <div className="content">
            <ul className="mainMenu margin-top-3">
              {mainMenu}
            </ul>
            <ul className="subMenu small opacity-8">
              {subMenu}
            </ul>
          </div>
        </nav>
      )
    }
}
