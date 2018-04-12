## simple-rc-slidepanel

Accessible and simple Slidepanel component for React.JS

### Instalition

> $ npm install simple-rc-slidepanel

### Code example

import React, { Component } from 'react';
  import Slidepanel from 'simple-rc-slidepanel';

  export class App extends Component {
      constructor(props) {
          super(props);

          this.state = {
              isPanelOpen: false
          };

          this.openPanel = this.openPanel.bind(this);
          this.closePanel = this.closePanel.bind(this);
          this.setWrapperRef = this.setWrapperRef.bind(this);
          this.handleClickOutside = this.handleClickOutside.bind(this);
      }

      componentDidMount() {
          document.addEventListener('click', this.handleClickOutside, true);
      }

      componentWillUnmount() {
          document.removeEventListener('click', this.handleClickOutside, true);
      }

      setWrapperRef(node) {
          this.wrapperRef = node;
      }

      handleClickOutside(event) {
          if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
              this.closePanel();
          }
      }

      openPanel() {
          this.setState({ isPanelOpen: true });
      }

      closePanel() {
          this.setState({ isPanelOpen: false });
      }

      render() {
          const { isPanelOpen } = this.state;

          return (
              <div className="app">
                  <div className="container">
                      <button
                          className="btn_open"
                          onClick = {this.openPanel}
                      >
                          Open left Slidepanel
                      </button>
                  </div>
                  <Slidepanel
                      setWrapperRef = { this.setWrapperRef }
                      closePanel = { this.closePanel }
                      isPanelOpen = { isPanelOpen }
                      left
                      width = { "35%" }
                      height = { "100%" }
                      bgColor = { "#FFFAF0" }
                  >
                      <h3 className="title_child_comp">Children element</h3>
                  </Slidepanel>
              </div>
          );
      }
  }