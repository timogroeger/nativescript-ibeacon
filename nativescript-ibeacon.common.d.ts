import { Observable } from 'data/observable';
export interface BeaconCallback {
    onBeaconManagerReady(): void;
    didRangeBeaconsInRegion(region: BeaconRegion, beacons: Beacon[]): void;
    didFailRangingBeaconsInRegion(region: BeaconRegion, errorCode: number, errorDescription: string): void;
    didEnterRegion?(region: BeaconRegion): void;
    didExitRegion?(region: BeaconRegion): void;
}
export declare enum BeaconLocationOptionsIOSAuthType {
    Always = 0,
    WhenInUse = 1,
}
export declare enum BeaconLocationOptionsAndroidAuthType {
    Coarse = 0,
    Fine = 1,
}
export interface BeaconLocationOptions {
    iOSAuthorisationType: BeaconLocationOptionsIOSAuthType;
    androidAuthorisationType: BeaconLocationOptionsAndroidAuthType;
    androidAuthorisationDescription: string;
}
export declare class Common extends Observable {
    protected options: BeaconLocationOptions;
    constructor(beaconCallback: BeaconCallback, options?: BeaconLocationOptions);
    requestAuthorization(): Promise<any>;
    isAuthorised(): boolean;
    bind(): void;
    unbind(): void;
    startRanging(beaconRegion: BeaconRegion): void;
    stopRanging(beaconRegion: BeaconRegion): void;
    startMonitoring(beaconRegion: BeaconRegion): void;
    stopMonitoring(beaconRegion: BeaconRegion): void;
}
export declare class BeaconRegion {
    identifier: string;
    proximityUUID: string;
    major?: number;
    minor?: number;
    constructor(identifier: string, proximityUUID: string, major?: number, minor?: number);
}
export declare class Beacon {
    proximityUUID: string;
    major: number;
    minor: number;
    distance_proximity: number;
    rssi: number;
    txPower_accuracy: number;
    constructor(proximityUUID: string, major: number, minor: number);
}
