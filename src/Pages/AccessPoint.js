import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
import { createAccessPointApi, readSettingsApi } from "../Api/ApiRequests";


const AccessPoint = () => {

    const { register, handleSubmit } = useForm();
    const [networkChannelValue, changeChannelValue] = useState(1);
    const [maxConnection, changeMaxConnection] = useState(4);
    const [hidden, setHidden] = useState(false);
    const [networkSettings, setNetworkSettings] = useState({});


    const saveNetworkSettings = (data) => {
        const networkSettings = {
            ssid: data.ssid,
            password: data.password,
            networkChannel: networkChannelValue,
            SimulConnections: maxConnection,
            hidden: hidden
        };
        console.log(networkSettings);
        createAccessPointApi(networkSettings).then(() => {
            alert("API Created");
        })
    };

    const loadAPSettings = () => {
        readSettingsApi().then((resp) => {
            const apSettings = resp.data["accessPoint"];
            setNetworkSettings([...apSettings]);
        });

    }

    const AccordionContent = (
        <Container>
            <Form.Field>
                <label>Network Channel</label>
                <NumberInput value={networkChannelValue} onChange={changeChannelValue} minValue={1} maxValue={14} />
            </Form.Field>
            <Form.Field>
                <label>Number of simultaneous connections</label>
                <NumberInput value={maxConnection} onChange={changeMaxConnection} minValue={0} maxValue={8} />
            </Form.Field>
            <Form.Field>
                <Checkbox name="hidden" label="Hidden" onChange={(e, data) => setHidden(data.checked)} />
            </Form.Field>
        </Container>
    );

    const panels = [
        {
            key: 'advancedSettings',
            title: 'Advanced Settings',
            content:
                { content: AccordionContent }
        },];

    return (
        <Container>
            <Segment>
                <Header as='h2'>Create an Access Point</Header>
                <Divider />
                <Grid container columns={2} padded>
                    <Grid.Column>
                        <Form onSubmit={handleSubmit(saveNetworkSettings)}>
                            <Form.Input
                                fluid
                                size="large"
                                label='SSID'
                                placeholder='Enter the name of your access point'
                                id='ssid'
                                required>
                                <input name="ssid" maxLength={31} {...register('ssid')} value={networkSettings.ssid} />
                            </Form.Input>
                            <Form.Input
                                fluid
                                size="large"
                                label='Password'
                                placeholder='Enter the password of your access point'
                                id='password' type="password">
                                <input name="password" maxLength={63} {...register('password')} value={networkSettings.password} />
                            </Form.Input>
                            <Accordion as={Form.Field} panels={panels} />
                            <Container textAlign="center" >
                                <Form.Button content='Load' onClick={loadAPSettings} />
                                <Form.Button content='Create' type="submit" />
                            </Container>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
    );
};

export default AccessPoint;