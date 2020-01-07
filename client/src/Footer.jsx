import React from 'react';

import {
  Segment,
  Container,
  Grid,
  List,
  Divider,
  Header,
  Icon,
  Image,
} from 'semantic-ui-react';

const Footer = () => (
  <div>
    <Segment style={{ margin: '5em 0em', padding: '5em 0em' }} vertical style={{ background: '#353E48' }}>
      <Container text>
        <Grid columns="equal" stackable>
          <Grid.Row>
            <Grid.Column>
              <a href="#" style={{ textDecoration: 'underline', color: '#fff' }}>Start a new group</a>
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Grid.Column>
              <Header inverted as="h4" content="Your Account" />
              <List link inverted>
                <List.Item as="a">Settings</List.Item>
                <List.Item as="a">Log Out</List.Item>
                <List.Item as="a">Help</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as="h4" content="Discover" />
              <List link inverted>
                <List.Item as="a">Groups</List.Item>
                <List.Item as="a">Calendar</List.Item>
                <List.Item as="a">Topics</List.Item>
                <List.Item as="a">Cities</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as="h4" content="Meetup" />
              <List link inverted>
                <List.Item as="a">About</List.Item>
                <List.Item as="a">Meetup Pro</List.Item>
                <List.Item as="a">Careers</List.Item>
                <List.Item as="a">Apps</List.Item>
                <List.Item as="a">API</List.Item>
                <List.Item as="a">Accessibility</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
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
                  <Icon name="medium" />
                </List.Item>
              </List>
              <List horizontal inverted>
                <List.Item>
                  <Image size="tiny" src="download-on-the-app-store-apple.svg" />
                </List.Item>
                <List.Item>
                  <Image size="tiny" src="google-play-badge.svg" />
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    <Segment style={{ margin: '5em 0em', padding: '5em 0em' }} vertical style={{ background: '#2F363F' }}>
      <Container text inverted>
        <List horizontal inverted link size="small">
          <List.Item>
            <Icon name="copyright outline" />
            Meetup 2020
          </List.Item>
          <List.Item>
          •
          </List.Item>
          <List.Item>
            Meetup is a wholly owned subsidiary of WeWork Companies Inc.
          </List.Item>
        </List>
      </Container>
      <br />
      <Container text inverted>
        <List horizontal inverted link size="small">
          <List.Item as="a" href="#">
            Terms of Service
          </List.Item>
          <List.Item>
          •
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
          <List.Item>
          •
          </List.Item>
          <List.Item as="a" href="#">
            Cookie Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>

);

export default Footer;
