/* eslint-disable no-unused-vars */
import React from "react";
import {
    Container,
    Segment,
    Header,
    Divider,
    Form,
    Grid,
    List,
    Icon,
    Label,
    Dimmer,
    Loader,
    Popup,
    Modal,
    Button
} from "semantic-ui-react";
import { useState } from "react";
import { readWifiStatusApi, connectToNetworkApi, listNetworksApi, scanNetworksApi } from "../Api/ApiRequests";
import { LIST_TIMEOUT } from "../Helpers/HelperConstants";
import { useEffect } from "react";
import { WiFiEncryptionType } from "../Helpers/NetworkClasses";

let tries = 0;

const Wifi = () => {

    const [wifiList, getWifiList] = useState([]);

    const [modalOpen, setModalOpen] = useState(false)

    const [wifiConfig, setWifiConfig] = useState({
        ssid: "",
        password: ""
    });

    const [scannerStatus, setScannerStatus] = useState({
        started: false,
        done: false
    });

    const [wifiStatus, setWifiStatus] = useState("");


    useEffect(() => {
        scanNetworks();
        readWifiStatusApi().then((resp) => {
            setWifiStatus(resp.data);
        });
        let fetched = true;
        if (fetched) { listNetworks(); }
        return () => fetched = false;
    }, []);



    const listNetworks = () => {
        listNetworksApi().then((resp) => {
            if (resp.status == 202 && tries < 20) {
                tries++;
                setTimeout(listNetworks, LIST_TIMEOUT);
                throw Error("Retrying in: " + LIST_TIMEOUT);
            }
            else if (resp.status == 200 && wifiList.length == 0) {
                const networks = resp.data.networks;
                getWifiList([...networks]);
                console.log(wifiList);
                return;
            } else {
                throw Error("Cannot fetch wifi list");
            }
        });
    };

    const scanNetworks = () => {
        setScannerStatus({
            started: true,
            done: false
        });

        scanNetworksApi().then((resp) => {
            console.log(resp);
            setScannerStatus({
                started: true,
                done: true
            });
        });
    };

    const connectToNetwork = () => {
        connectToNetworkApi(wifiConfig).then(resp => {
            setWifiStatus(resp.statusText);
        });
    };

    const onWifiSelected = (selectedSsid) => {
        const newWifiConfig = {
            ssid: selectedSsid,
            password: ""
        };

        setWifiConfig(newWifiConfig);
    };


    const onPasswordChange = (event) => {
        const newWifiConfig = wifiConfig;
        newWifiConfig.password = event.target.value;
        setWifiConfig(newWifiConfig);
    };

    const onSsidChange = (event) => {
        const newWifiConfig = wifiConfig;
        newWifiConfig.ssid = event.target.value;
        setWifiConfig(newWifiConfig);
    };

    const renderWifiList = () => {
        return (
            wifiList.map((network, index) =>
                <Popup
                    trigger={
                        < List.Item as="a" onClick={() => onWifiSelected(network.ssid)} key={index}>
                            {console.log(network)}
                            <List.Icon name="wifi" />
                            <List.Content>
                                <List.Header>{network.ssid}</List.Header>
                                <List.Description>{network.rssi}% - {WiFiEncryptionType[network.encryption_type]}</List.Description>
                            </List.Content>
                        </List.Item >
                    }
                    content={< Form.Input

                        size="large"
                        label='Password'
                        placeholder='Enter the password'
                        id='password' type="password"
                    >
                        <input maxLength={63} onChange={onPasswordChange} />
                    </Form.Input >}
                    on='click'
                    pinned
                    key={index} />)

        );
    };

    const displayWifiStatus = () => {
        if (scannerStatus.started && !scannerStatus.done) {
            return (
                <Grid.Column textAlign="center">
                    <Dimmer active>
                        <Loader size='huge'>Scanning</Loader>
                    </Dimmer>
                </Grid.Column>
            );
        } else {
            return (
                <Grid.Column textAlign="center">
                    <Icon name="wifi" size="huge" circular inverted />
                    <br /><br />
                    {wifiStatus === "Connected" ? <Label color="green">Connected</Label> : <Label color="red">Not Connected</Label>}
                </Grid.Column>
            );
        }
    }

    return (
        <Container>
            <Segment>
                <Header as='h2'>Network List</Header>
                <Divider />
                <Grid container columns={2} padded>
                    <Grid.Column>
                        <Form onSubmit={connectToNetwork}>
                            <Form.Input
                                fluid
                                size="large"
                                label='SSID'
                                placeholder='Enter the name of your access point'
                                id='ssid'
                                required>
                                <input name="ssid" maxLength={31} onChange={onSsidChange} />
                            </Form.Input>
                            <Form.Input
                                fluid
                                size="large"
                                label='Password'
                                placeholder='Enter the password of your access point'
                                id='password' type="password">
                                <input name="password" maxLength={63} onChange={onPasswordChange} />
                            </Form.Input>
                            <Form.Button content='Connect' type="submit" />
                        </Form>
                        <Divider horizontal>OR</Divider>
                        <Modal
                            open={modalOpen}
                            onClose={() => setModalOpen(false)}
                            onOpen={() => setModalOpen(true)}
                            trigger={<Button >Scan networks</Button>}
                        >
                            <Modal.Header>Available Networks</Modal.Header>
                            <Modal.Content scrolling>
                                <List link divided verticalAlign='middle'>
                                    {renderWifiList()}
                                </List>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button
                                    onClick={() => {
                                        setModalOpen(false);
                                        connectToNetwork();
                                    }}
                                    primary>
                                    Connect <Icon name='chevron right' />
                                </Button>
                            </Modal.Actions>
                        </Modal>
                    </Grid.Column>
                    {displayWifiStatus()}
                </Grid>
            </Segment>
        </Container>
    );
}

export default Wifi;