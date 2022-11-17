import React, { useState } from "react";
import NumberInput from 'semantic-ui-react-numberinput';
import {
    Container,
    Divider,
    Header,
    Segment,
    Grid,
    Form,
    Accordion,
    Checkbox
} from "semantic-ui-react";


const AccessPoint = () => {

    const [networkChannelValue, changeChannelValue] = useState(1);
    const [maxConnection, changeMaxConnection] = useState(4);


    const AccordionContent = (
        <Container>
            <Form.Field>
                <label>Network Channel</label>
                <NumberInput value={networkChannelValue} onChange={changeChannelValue} minValue={1} maxValue={13} />
            </Form.Field>
            <Form.Field>
                <label>Number of simultaneous connections</label>
                <NumberInput value={maxConnection} onChange={changeMaxConnection} minValue={0} maxValue={8} />
            </Form.Field>
            <Checkbox label="Hidden" />
        </Container>
    )

    const panels = [
        {
            key: 'advancedSettings',
            title: 'Advanced Settings',
            content:
                { content: AccordionContent }
        },]

    return (
        <Container>
            <Segment>
                <Header as='h2'>Create an Access Point</Header>
                <Divider />
                <Grid container columns={2} padded>
                    <Grid.Column>
                        <Form>
                            <Form.Input
                                fluid
                                size="large"
                                label='SSID'
                                placeholder='Enter the name of your access point'
                                id='ssid'
                                required>
                                <input maxLength={31} />
                            </Form.Input>
                            <Form.Input
                                fluid
                                size="large"
                                label='Password'
                                placeholder='Enter the password of your access point'
                                id='password' type="password">
                                <input maxLength={63} />
                            </Form.Input>
                            <Accordion as={Form.Field} panels={panels} />
                            <Form.Button content='Create' type="submit" />
                        </Form>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
    );
}

export default AccessPoint;