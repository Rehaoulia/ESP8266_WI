/* eslint-disable react/prop-types */
import React from "react";
import { Button, Container } from "semantic-ui-react";

const CustomButton = ({ ...compProps }) => (
    <Container>
        <Button onClick={compProps.onClick} id={compProps.name} >
            {compProps.label}
        </Button>
    </Container>
);

export default CustomButton;