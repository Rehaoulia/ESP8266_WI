/* eslint-disable react/prop-types */
import React from "react";
import { Container, Input } from "semantic-ui-react";

const CustomInput = ({ ...compProps }) => (
    <Container>
        <Input id={compProps.name} label={compProps.label} placeholder={compProps.placeholder} onChange={compProps.onChange} />
    </Container>
);

export default CustomInput;