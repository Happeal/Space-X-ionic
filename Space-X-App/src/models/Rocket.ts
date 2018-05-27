export interface Rocket {
  id: string;
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  height: Height;
  diameter: Height;
  mass: Mass;
  payload_weights: Payloadweight[];
  first_stage: Firststage;
  second_stage: Secondstage;
  engines: Engines;
  landing_legs: Landinglegs;
  description: string;
}

export interface Landinglegs {
  number: number;
  material?: string;
}

export interface Engines {
  number: number;
  type: string;
  version: string;
  layout: string;
  engine_loss_max: number;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: Thrustsealevel;
  thrust_vacuum: Thrustsealevel;
  thrust_to_weight: number;
}

export interface Secondstage {
  engines: number;
  fuel_amount_tons?: number;
  burn_time_sec: number;
  thrust: Thrustsealevel;
  payloads: Payloads;
}

export interface Payloads {
  option_1: string;
  composite_fairing: Compositefairing;
  option_2?: string;
}

export interface Compositefairing {
  height: Height;
  diameter: Height;
}

export interface Firststage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust_sea_level: Thrustsealevel;
  thrust_vacuum: Thrustsealevel;
  cores?: number;
}

export interface Thrustsealevel {
  kN: number;
  lbf: number;
}

export interface Payloadweight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

export interface Mass {
  kg: number;
  lb: number;
}

export interface Height {
  meters: number;
  feet: number;
}