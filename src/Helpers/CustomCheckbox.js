/* eslint-disable react/prop-types */
import React from "react";
import { Checkbox, Container } from "semantic-ui-react";

const CustomCheckBox = ({ ...compProps }) => (
    <Container>
        <Checkbox label={compProps.label} id={compProps.name} name={compProps.name} onChange={compProps.onChange} key={compProps.name} />
    </Container>
);

export default CustomCheckBox;