import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { NativeBiometric } from 'capacitor-native-biometric';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Browser } from '@capacitor/browser';
import { Share } from '@capacitor/share';

window.CapBridge = { Capacitor, LocalNotifications, NativeBiometric, Filesystem, Directory, Browser, Share };

