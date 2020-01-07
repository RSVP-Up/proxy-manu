import React from 'react';

import {
  Header,
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
          <Header as="h3" content="Details" />
          <Segment basic compact vertical>
            The stranger officiates the meal.
          </Segment>
          <Segment basic compact vertical>
            Sometimes, all you need to do is completely make a fool of yourself
              and laugh it off to realize that life is not so bad after all.
          </Segment>
          <Segment basic compact vertical>
            You don't need to have a flame in order to get married.
          </Segment>
          <Segment basic compact vertical>
            Quit milk.
          </Segment>
          <Segment basic compact vertical>
            If you have any questions feel free to reach out to our team at <a href="http://inspirobot.me">insiprobot.me</a>
          </Segment>
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
