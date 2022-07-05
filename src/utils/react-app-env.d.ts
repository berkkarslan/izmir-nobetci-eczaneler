/// <reference types="react-scripts" />

interface IService {
  init: () => PVoid;
}
type Services = Record<string, IService>;

interface IStore {
  hydrate?: () => PVoid;
}

interface EczaneObject {
  Tarih: Date;
  LokasyonY: string;
  LokasyonX: string;
  BolgeAciklama: string;
  Adi: string;
  Telefon: string;
  Adres: string;
  BolgeId: number;
  Bolge: string;
  UzaklikMetre?: any;
  EczaneId: number;
  IlceId: number;
}

type PVoid = Promise<void>;
type AnyObj = Record<string, unknown>;
type PureFunc = () => void;