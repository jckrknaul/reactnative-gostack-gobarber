import axios from 'axios';

/**
 *
 * Ha algumas formas diferentes de usar a BaseURL, conforme abaixo:
 *
 * IOS com Emulador: Localhost
 * IOS com Disp Físico: IP da Maquina
 * Android com Emulador: Localhost (adb reverse tcp:3333 tcp:3333)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com Disp Físico: IP da Maquina
 *
 */

const api = axios.create({
  baseURL: 'http://192.168.100.6:3333',
});

export default api;
