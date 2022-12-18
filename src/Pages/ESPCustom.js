/* eslint-disable react/prop-types */
import React from "react";
import { useEffect, useState } from "react";
import { Form, Grid, Segment } from "semantic-ui-react";
import { getComponentsListApi, sendComponentCallbackApi } from "../Api/ApiRequests";
import CustomButton from "../Helpers/CustomButton";
import CustomCheckBox from "../Helpers/CustomCheckbox";
import CustomInput from "../Helpers/CustomInput";


const ESPCustom = () => {

    const [componentList, getComponentList] = useState([]);


    useEffect(() => {
        getComponentsListApi().then((resp) => {
            const complist = resp.data.components;
            getComponentList([...complist]);
        })
    }, []);

    const onHandleComponent = (event, data) => {
        const callback = {
            id: data.id,
        };
        if (data.type === 'text') {
            callback["value"] = data.value;
        } else if (data.type === 'checkbox') {
            callback["checked"] = data.checked;
        }
        sendComponentCallbackApi(callback);
        console.log(callback);
    };

    const mapPropsToComponent = () => {
        const components = [];

        componentList.forEach(item => {
            if (item.component) {
                const { component, ...props } = item;
                switch (component) {
                    case "CustomInput":
                        components.push({
                            ...props,
                            Component: CustomInput,
                            onChange: onHandleComponent
                        });
                        break;
                    case "CustomCheckbox":
                        components.push({
                            ...props,
                            Component: CustomCheckBox,
                            onChange: onHandleComponent
                        });
                        break;
                    case "CustomButton":
                        components.push({
                            ...props,
                            Component: CustomButton,
                            onClick: onHandleComponent
                        });
                        break;
                }
            }
        });

        return components;
    };

    const CustomComponents = () => {

        const components = mapPropsToComponent();

        return (
            components.map((item) => {
                const { Component, ...props } = item;
                return (
                    <Form.Field key={props.name}>
                        <Component {...props} />
                    </Form.Field>
                );
            })
        );
    };

    return (
        <Grid columns={2} padded>
            <Grid.Column>
                <Segment>
                    <Form>
                        <CustomComponents />
                    </Form>
                </Segment>
            </Grid.Column>

        </Grid>
    );
}

export default ESPCustom;