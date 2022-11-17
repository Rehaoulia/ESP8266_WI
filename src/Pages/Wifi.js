import React from "react";
import {
    Container,
    Segment,
    Header,
    Divider,
    Form,
    Grid,
    Icon,
    Label
} from "semantic-ui-react";

const Wifi = () => {
    return (
        <Container>
            <Segment>
                <Header as='h2'>Connect To A Network</Header>
                <Divider />
                <Grid container columns={2} padded>
                    <Grid.Column>
                        <Form>
                            <Form.Input
                                fluid
                                size="large"
                                label='SSID'
                                placeholder='Enter the name of Network to connect to'
                                id='ssid'
                                required>
                                <input maxLength={31} />
                            </Form.Input>
                            <Form.Input
                                fluid
                                size="large"
                                label='Password'
                                placeholder='Enter the password of the network'
                                id='password' type="password">
                                <input maxLength={63} />
                            </Form.Input>
                            <Form.Button content='Connect' type="submit" />
                        </Form>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Icon name="wifi" size="huge" circular inverted />
                        <br /><br />
                        <Label color="green">Connected</Label>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
    );
}

export default Wifi;