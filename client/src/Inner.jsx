import React from 'react';

import {
  Header,
  Image,
  Grid,
  Segment,
  Container,
  Button,
} from 'semantic-ui-react';

import Info from './Info';
import Comment from './Comment';

const Inner = () => (
  <div style={{ backgroundColor: '#F6F7F8' }}>
    <Segment vertical stackable style={{ padding: '2em 20%' }}>
      {/* Container not be necessary */}
      <Grid columns="equal">
        <Grid.Column width={10} style={{ paddingLeft: '0' }}>
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
          <Container fluid id="attendees" />
          <div>
            <Header as="h3" content="Photos" />
            <Button basic fluid>Add photos</Button>
          </div>
          <div style={{ paddingTop: '40px' }}>
            <Header as="h3" content="Comments" />
            <Comment />
          </div>
        </Grid.Column>
        <Grid.Column width={2}>
          <Info />
        </Grid.Column>
      </Grid>
      <div>
        {/* Similar events component*/}
      </div>
    </Segment>
  </div>
);

export default Inner;
