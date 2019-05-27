import React from "react"

export default props =>(
  <section data-title={props.title} data-name={props.name} className="slide fade-6 kenBurns">
    <div className="content">
      <div className="container">
        <div className="wrap">
          {props.children}
        </div>
      </div>
    </div>
    <div className="background" style={{backgroundImage:`url(${props.background})`}}></div>
  </section>
)
