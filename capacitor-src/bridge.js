import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { NativeBiometric } from 'capacitor-native-biometric';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Browser } from '@capacitor/browser';

window.CapBridge = { Capacitor, LocalNotifications, NativeBiometric, Filesystem, Directory, Browser };

