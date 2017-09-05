export class Flight {
  public id: number;
  public flightName: string;
  public scheduleDate: string;
  public flightDirection: string;
  public flightNumber: number;
  public prefixIATA: string;
  public prefixICAO: string;
  public scheduleTime: string;
  public serviceType: string;
  public mainFlight: string;
  public codeshares: Codeshares;
  public estimatedLandingTime: string;
  public actualLandingTime: string;
  public publicEstimatedOffBlockTime?: any;
  public actualOffBlockTime?: any;
  public publicFlightState: PublicFlightState;
  public route: Route;
  public terminal: number;
  public gate: string;
  public baggageClaim: BaggageClaim;
  public expectedTimeOnBelt: string;
  public checkinAllocations?: any;
  public transferPositions?: any;
  public aircraftType: AircraftType;
  public aircraftRegistration: string;
  public airlineCode: number;
  public expectedTimeGateOpen?: any;
  public expectedTimeBoarding?: any;
  public expectedTimeGateClosing?: any;
  public schemaVersion: string;
}
export interface Codeshares {
  codeshares: string[];
}

export interface PublicFlightState {
  flightStates: string[];
}

export interface Route {
  destinations: string[];
}

export interface BaggageClaim {
  belts: string[];
}

export interface AircraftType {
  iatamain: string;
  iatasub: string;
}
