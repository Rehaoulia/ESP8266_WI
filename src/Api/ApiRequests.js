import axios from "axios";
import { API_BASE_URL } from "../Helpers/HelperConstants";

export const AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const readWifiStatusApi = async () => {
    try {
        const response = await AxiosInstance.get('/api/testWifi');
        return response;
    } catch (error) {
        console.error(error.message);
    }
};

export const scanNetworksApi = async () => {
    try {
        const response = await AxiosInstance.get('/api/scanNetworks');
        return response;
    } catch (error) {
        console.error(error.message);
    }
};

export const listNetworksApi = async () => {
    try {
        const response = await AxiosInstance.get('/api/listNetworks');
        return response;
    } catch (error) {
        console.error(error.message);
    }
};

export const readSettingsApi = async () => {
    try {
        const response = await AxiosInstance.get('/api/apsettings');
        return response;
    } catch (error) {
        console.error(error.message);
    }
};

export const connectToNetworkApi = async (wifiCredentials) => {
    try {
        const response = await AxiosInstance.post('/api/wifiSetup', wifiCredentials);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const createAccessPointApi = async (networkSettings) => {
    try {
        const response = await AxiosInstance.post('/api/apSetup', networkSettings);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const getDateTimeApi = async () => {
    try {
        const response = await AxiosInstance.get('/api/getCurrentTime');
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const changeTimeSettingsApi = async (timeSetitngs) => {
    try {
        const response = await AxiosInstance.post('/api/changeTimeSettings', timeSetitngs);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const getComponentsListApi = async () => {
    try {
        const response = await AxiosInstance.get('/api/getComponentsList');
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const sendComponentCallbackApi = async (componentCallback) => {
    try {
        const response = await AxiosInstance.post('/api/componentCallback', componentCallback);
        return response;
    } catch (error) {
        console.error(error);
    }
}