import React from 'react';
import {
  Menu,
  Image,
  Icon,
  Segment,
} from 'semantic-ui-react';
import styled from 'styled-components';

const StyledMenuItem = styled(Menu.Item)`
  &:hover {
    color: rgb(0, 152, 171) !important;
  }
`;

const options = ['Explore', 'Messages', 'Notifications'];

const Navbar = () => (
  <Menu secondary pointing stackable style={{ marginBottom: '0' }}>
    <Menu.Item as="a">
      <Image src="logo.svg" style={{ height: '44px' }} />
    </Menu.Item>
    <Menu.Menu position="right">
      <Segment basic style={{ margin: '0', padding: '0' }}>
        <Menu.Menu position="right">
          <Menu.Item
            header
            style={{ paddingRight: '0' }}
          >
            <Segment
              basic
              compact
              textAlign="center"
              style={{
                margin: '0',
                padding: '0 16px',
                color: '#00A2C7',
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: 'rgba(46, 62, 72, 0.12)',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '2',
              }}
            >
                Start a new group
                <br />
                30% OFF
            </Segment>
          </Menu.Item>
          {options.map(option => (
            <Segment basic compact style={{ margin: '10px 0px 0px 0px', padding: '14px 0px' }}>
              <StyledMenuItem
                key={option}
                name={option}
                style={{ color: '#757575' }}
              />
            </Segment>
          ))}
          <Menu.Item>
            <Segment basic compact style={{ margin: '0' }}>
              <Image src="http://placecorgi.com/50" avatar />
              <span>
                <Icon color="grey" name="dropdown" />
              </span>
            </Segment>
          </Menu.Item>
        </Menu.Menu>
      </Segment>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
