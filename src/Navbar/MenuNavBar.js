import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';

const MenuNavBar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(name);


  return (
    <Menu fixed="top" inverted>
      <Menu.Item
        as={NavLink} to="/"
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
      >
        <Icon name='microchip' />
        ESP8266
      </Menu.Item>
      <Dropdown item text='Network'>
        <Dropdown.Menu>
          <Dropdown.Item
            icon='wifi'
            text='Connect to WIFI'
            as={NavLink} to='wifi' />
          <Dropdown.Item
            icon='edit'
            text='Create Access Point'
            as={NavLink} to='ap' />
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item
        as={NavLink} to="/datetime"
        name='dateTime'
        active={activeItem === 'dateTime'}
        onClick={handleItemClick}
      >
        Time and Date
      </Menu.Item>
      <Menu.Item
        as={NavLink} to="/customPage"
        name='customPage'
        active={activeItem === 'customPage'}
        onClick={handleItemClick}
      >
        ESP Custom
      </Menu.Item>
    </Menu>
  );
}

export default MenuNavBar;