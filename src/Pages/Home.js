import React from "react";
import { Container, Divider, Header, Segment } from "semantic-ui-react";

const Home = () => {
    return (
        <Container>
            <Segment>
                <Header as='h1' dividing textAlign="center" color='grey'>Welcome to the ESP8266</Header>
                <Header as='h2'>About</Header>
                <p>ESP8266 is a wifi SOC (system on a chip) produced by Espressif Systems.
                    It is an highly integrated chip designed to provide full internet connectivity in a small package.</p>
                <Divider />
                <Header as='h2'>Why ESP8266</Header>
                <p>ESP8266 can be used as an external Wifi module, using the standard AT Command set Firmware by connecting it to any microcontroller using the serial UART, or directly serve as a Wifi-enabled micro controller, by programming a new firmware using the provided SDK.

                    The GPIO pins allow Analog and Digital IO, plus PWM, SPI, I2C, etc.

                    This board has been around for almost a year now, and has been used mostly in IoT contexts, where we want to add connectivity for example to an Arduino project. A wide adoption has been facilitated by the very modest price, ranging from 2.50 to 10 USD depending on the features offered by the manufacturers.

                    Some example projects:
                    <ul>
                        <li>Temperature logging and Web UI</li>
                        <li>Retro Web Browser</li>
                        <li>Internet Enabled Smoke alarm</li>
                    </ul>
                </p>
                <Divider />
                <Header as='h2'>Features</Header>
            </Segment>
        </Container>
    );
}

export default Home;