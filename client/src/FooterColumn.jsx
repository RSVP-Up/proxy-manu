import React from 'react';
import { Header, List, Icon } from 'semantic-ui-react';
// receives and array of items
const FooterColumn = ({ items }) => {
  // example
  return (
    <div>
      <Header inverted as="h4" content="Follow us" />
      <List horizontal link inverted>
        <List.Item as="a">
          <Icon name="facebook official" />
        </List.Item>
        <List.Item as="a">
          <Icon name="twitter" />
        </List.Item>
        <List.Item as="a">
          <Icon name="youtube" />
        </List.Item>
        <List.Item as="a">
          <Icon name="instagram" />
        </List.Item>
        <List.Item as="a">
          <Icon name="instagram" />
        </List.Item>
        <List.Item as="a">
          <Icon name="medium" />
        </List.Item>
      </List>
    </div>
  )
};

export default FooterColumn;
