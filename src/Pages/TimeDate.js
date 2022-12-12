/* eslint-disable no-unused-vars */
import React from "react";
import { Timezones } from "../Helpers/HelperConstants";
import {
    Container,
    Grid,
    Input,
    Header,
    Segment,
    Button,
    Dropdown,
    Checkbox,
} from "semantic-ui-react";
import { useState } from "react";
import { getDateTimeApi } from "../Api/ApiRequests";
import { useEffect } from "react";

const TimeDate = () => {
    const [dateTime, setDateTime] = useState({});
    const [dstValue, setDSTValue] = useState(false);
    const [utcOffsetValue, setUTCOffsetValue] = useState(0);

    const getDateTime = () => {
        getDateTimeApi().then((resp) => {
            console.log(resp);
            const dateTimevar = resp.data.currentTime;
            setDateTime(dateTimevar);
        })
    }

    useEffect(() => {
        getDateTime();
    });

    const onUpdate = () => {
        const dateTimechanges = {
            dst: dstValue,
            utcOffset: utcOffsetValue
        };
        console.log(dateTimechanges);
    }

    return (
        <Container>
            <Segment raise padded="very">
                <Grid centered padded>
                    <Segment circular color="blue" size="huge">
                        <Header size="large">{dateTime.day}</Header>

                    </Segment>
                    <Grid.Row centered columns={3}>
                        <Grid.Column>
                            <Input fluid size="huge" disabled label="Hours" value={dateTime.hours} />
                        </Grid.Column>
                        <Grid.Column>
                            <Input fluid size="huge" disabled label="Minutes" value={dateTime.minutes} />
                        </Grid.Column>
                        <Grid.Column>
                            <Input fluid size="huge" disabled label="Seconds" value={dateTime.seconds} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign="center">
                            <Checkbox onChange={(e, data) => setDSTValue(data.checked)} label="Day Time Saving" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign="center">
                            <Dropdown selection options={Timezones.timezones} defaultValue={0} onChange={(e, data) => setUTCOffsetValue(data.value)}></Dropdown>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign="center">
                            <Button size="big" primary onClick={onUpdate}> Update</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Segment>
        </Container >
    );
}

export default TimeDate;