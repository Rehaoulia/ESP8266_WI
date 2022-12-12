import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";

const Home = () => {
    return (
        <Container>
            <Segment>
                <Header as='h1' dividing textAlign="center" color='grey'>Welcome to the ESP8266</Header>
                <Header as='h2'>About</Header>
                <p>This is a web interface that serves to configure ESP8266 devices. This website offers four pages each for configuring a
                    different feature of the microcontroller.</p>
                <ul>
                    <li>Connecting to a WiFi station.</li>
                    <li>Creating an Access Point.</li>
                    <li>Configuring Time and Date.</li>
                    <li>Creating an application specific page.</li>
                </ul>
                <br />
                <p>
                    Enjoy using it and happy hacking!
                </p>
            </Segment>
        </Container>
    );
}

export default Home;