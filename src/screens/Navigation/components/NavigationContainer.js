import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

class NavigationContainer extends React.Component {
  state = {
    options: [
      {
        text: 'Jenny Hess',
        value: 'Jenny Hess',
      },
      {
        text: 'Jenny John',
        value: 'Jenny John',
      }
    ]
  }
  render () {
    return (
      <span>
        Show me posts by{' '}
        <Dropdown inline options={this.state.options} defaultValue={this.state.options[0].value} />
        sorted by{' '}
        <Dropdown inline options={this.state.options} defaultValue={this.state.options[0].value} />
      </span>
    );
  }
}

export default NavigationContainer;