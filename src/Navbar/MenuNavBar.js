import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
//import { Link } from 'react-router-dom';

export default class MenuNavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed="top" inverted>
        <Menu.Item
          as={NavLink} exact to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <Icon name='microchip' />
          ESP8266
        </Menu.Item>
        <Dropdown item text='Network'>
          <Dropdown.Menu>
            <Dropdown.Item
              icon='wifi'
              text='Connect to WIFI'
              as={NavLink} exact to='wifi' />
            <Dropdown.Item
              icon='edit'
              text='Create Access Point'
              as={NavLink} to='accesspoint' />
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          as={NavLink} exact to="/datetime"
          name='dateTime'
          active={activeItem === 'dateTime'}
          onClick={this.handleItemClick}
        >
          Time and Date
        </Menu.Item>
        <Menu.Item
          as={NavLink} exact to="/espplus"
          name='espPlus'
          active={activeItem === 'espPlus'}
          onClick={this.handleItemClick}
        >
          ESP +
        </Menu.Item>
      </Menu>
    );
  }
}