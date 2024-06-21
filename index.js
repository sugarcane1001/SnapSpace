// `@expo/metro-runtime` MUST be the first import to ensure Fast Refresh works on web
import '@expo/metro-runtime';

import { registerRootComponent } from 'expo';

import App from './App';

registerRootComponent(App);