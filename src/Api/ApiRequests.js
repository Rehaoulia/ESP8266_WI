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
        const response = await AxiosInstance.get('/testWifi');
        return response;
    } catch (error) {
        console.error(error.message);
    }
};

export const scanNetworksApi = async () => {
    try {
        const response = await AxiosInstance.get('/scanNetworks');
        return response;
    } catch (error) {
        console.error(error.message);
    }
};

export const listNetworksApi = async () => {
    try {
        const response = await AxiosInstance.get('/listNetworks');
        return response;
    } catch (error) {
        console.error(error.message);
    }
};

export const readSettingsApi = async () => {
    try {
        const response = await AxiosInstance.get('/apsettings');
        return response;
    } catch (error) {
        console.error(error.message);
    }
};

export const connectToNetworkApi = async (wifiCredentials) => {
    try {
        const response = await AxiosInstance.post('/wifiSetup', wifiCredentials);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const createAccessPointApi = async (networkSettings) => {
    try {
        const response = await AxiosInstance.post('/apSetup', networkSettings);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const getDateTimeApi = async () => {
    try {
        const response = await AxiosInstance.get('/getCurrentTime');
        return response;
    } catch (error) {
        console.error(error);
    }
};