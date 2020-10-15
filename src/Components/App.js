import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Home from "./Home";
import Skills from "./Skills";
import Footer from "./Footer";
import ProjectCards from "./ProjectCards";
import { Tab } from "./constants";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      onDisplay: Tab.HOME,
    };
    this.handleTab = this.handleTab.bind(this);
  }

  renderTabContent() {
    switch (this.state.onDisplay) {
      case Tab.PROJECTS:
        return <ProjectCards />;
      case Tab.SKILLS:
        return <Skills />;
      default:
        return <Home />;
    }
  }

  handleTab(tab) {
    this.setState({ onDisplay: tab });
  }

  render() {
    return (
      <div className="main-app">
        <div className="wrapper">
          <Header />
          <Menu handleTab={this.handleTab} state={this.state.onDisplay} tab />
          {this.renderTabContent()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
