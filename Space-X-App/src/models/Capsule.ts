 export interface Capsule {
    id: string;
    name: string;
    type: string;
    active: boolean;
    crew_capacity: number;
    sidewall_angle_deg: number;
    orbit_duration_yr: number;
    heat_shield: Heatshield;
    thrusters: Thruster[];
    launch_payload_mass: Launchpayloadmass;
    launch_payload_vol: Launchpayloadvol;
    return_payload_mass: Launchpayloadmass;
    return_payload_vol: Launchpayloadvol;
    pressurized_capsule: Pressurizedcapsule;
    trunk: Trunk;
    height_w_trunk: Heightwtrunk;
    diameter: Heightwtrunk;
    capsule_serial: string;
    capsule_id: string;
    status: string;
    original_launch: string;
    missions: string[];
    landings: number;
    details?: string;
  }
  
  
 export interface Heightwtrunk {
    meters: number;
    feet: number;
  }
  
  export interface Trunk {
    trunk_volume: Launchpayloadvol;
    cargo: Cargo;
  }
  
  export interface Cargo {
    solar_array: number;
    unpressurized_cargo: boolean;
  }
  
  export interface Pressurizedcapsule {
    payload_volume: Launchpayloadvol;
  }
  
  export interface Launchpayloadvol {
    cubic_meters: number;
    cubic_feet: number;
  }
  
  export interface Launchpayloadmass {
    kg: number;
    lb: number;
  }
  
  export interface Thruster {
    type: string;
    amount: number;
    pods: number;
    fuel_1: string;
    fuel_2: string;
    thrust: Thrust;
  }
  
  export interface Thrust {
    kN: number;
    lbf: number;
  }
  
  export interface Heatshield {
    material: string;
    size_meters: number;
    temp_degrees: number;
    dev_partner: string;
  }
  export interface CapsuleDetail {
    capsule_serial: string;
    capsule_id: string;
    status: string;
    original_launch?: string;
    missions: string[];
    landings: number;
    type: string;
    details?: string;
  }