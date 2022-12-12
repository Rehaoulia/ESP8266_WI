
export class WifiNetwork {
    constructor(rssi, ssid, bssid, channel, encryption_type) {
        this.rssi = rssi;
        this.ssid = ssid;
        this.bssid = bssid;
        this.channel = channel;
        this.encryption_type = encryption_type;
    }
}

export const WiFiEncryptionType = {
    WIFI_AUTH_OPEN: 0,
    WIFI_AUTH_WEP: 1,
    WIFI_AUTH_WEP_PSK: 2,
    WIFI_AUTH_WEP2_PSK: 3,
    WIFI_AUTH_WPA_WPA2_PSK: 4,
    WIFI_AUTH_WPA2_ENTERPRISE: 5
}

