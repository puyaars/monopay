import { Driver as BaseDriver } from './driver';
import { Sadad } from './drivers/sadad';
import * as SadadAPI from './drivers/sadad/api';
import { Saman } from './drivers/saman';
import * as SamanAPI from './drivers/saman/api';
import { Zarinpal } from './drivers/zarinpal';
import * as ZarinpalAPI from './drivers/zarinpal/api';
import { Zibal } from './drivers/zibal';
import * as ZibalAPI from './drivers/zibal/api';

interface ConfigMap {
  zarinpal: ZarinpalAPI.Config;
  zibal: ZibalAPI.Config;
  saman: SamanAPI.Config;
  sadad: SadadAPI.Config;
}

export type ConfigObject = Partial<ConfigMap>;

const drivers = {
  zarinpal: Zarinpal,
  zibal: Zibal,
  saman: Saman,
  sadad: Sadad,
};

export const getPaymentDriver = <Driver extends BaseDriver>(
  driverName: keyof ConfigMap,
  config: Parameters<Driver['setConfig']>[0]
): Driver => {
  if (!drivers[driverName]) {
    throw Error(`This driver is not supported, supported drivers: ${Object.keys(drivers).join(', ')}`);
  }

  return (new drivers[driverName](config) as unknown) as Driver;
};