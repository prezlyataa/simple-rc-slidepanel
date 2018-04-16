# simple-rc-slidepanel

Accessible and simple slide panel component for React.JS

### Table of Contents

* [Instalition](https://www.npmjs.com/package/simple-rc-slidepanel#instalition)
* [Demo](https://www.npmjs.com/package/simple-rc-slidepanel#demo)
* [Usage](https://www.npmjs.com/package/simple-rc-slidepanel#usage)
* [Props](https://www.npmjs.com/package/simple-rc-slidepanel#props)
* [Code example](https://www.npmjs.com/package/simple-rc-slidepanel#code-example)

### Instalition

    $ npm install simple-rc-slidepanel

### Demo
You can find demo [here](https://codesandbox.io/s/kx193k3p37).

### Usage
```js
<Slidepanel
	setWrapperRef = { this.setWrapperRef }
	closePanel = { this.closePanel }
	isPanelOpen = { isPanelOpen }
	left
	width = { "35%" }
	height = { "100%" }
	bgColor = { "#FFFAF0" }
>
	<h3>Children element</h3>
</Slidepanel>
```

### Props

| Name        | Type            | Description
| ----------- |:---------------:|---------------|
| left        | -               | panel position
| right       | -               | panel position
| top         | -               | panel position
| bottom      | -               | panel position
| width       | string          | panel width
| height      | string          | panel height
| bgColor     | string          | panel background color


### Code example

```javascript
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
              <div>
                  <button onClick = { this.openPanel }>Open left Slidepanel</button>
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
                  <h3>Children element</h3>
              </Slidepanel>
          </div>
      );
  }
}
```