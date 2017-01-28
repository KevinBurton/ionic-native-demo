import { Device } from 'ionic-native';

export class DeviceInfo {
  constructor() {
    this.cordova = Device.device.cordova;
    this.model = Device.device.model;
    this.platform = Device.device.platform;
    this.uuid = Device.device.uuid;
    this.version = Device.device.version;
    this.manufacturer = Device.device.manufacturer
  }
  cordova:string;
  model:string;
  platform:string;
  uuid:string;
  version:string;
  manufacturer:string;
}
