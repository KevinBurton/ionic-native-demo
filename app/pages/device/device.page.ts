import { Component } from '@angular/core';
import { Device } from 'ionic-native';

import{ DeviceInfo } from '../../models/deviceinfo'

@Component({
  templateUrl: 'build/pages/device/device.page.html',
})
export class DevicePage {
  deviceInfo:DeviceInfo;

  constructor() {
    this.deviceInfo = new DeviceInfo();
  }
}
