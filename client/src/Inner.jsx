import React from 'react';

import {
  Container,
  Image,
  Grid,
  Segment,
  Item,
} from 'semantic-ui-react';

const Inner = () => (
  <div>
    <Segment vertical style={{ padding: '2em 3em' }}>
      <Grid container columns={2} verticalAlign="middle">
        <Grid.Column>
          <Image src="https://source.unsplash.com/random/600x337" />
          {/* Other components */}
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Item>
              <Item.Image size="tiny" src="https://source.unsplash.com/random" />
            </Item>
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  </div>
);

export default Inner;
