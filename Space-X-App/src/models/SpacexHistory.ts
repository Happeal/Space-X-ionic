
export interface SpacexHistory {
  title: string;
  event_date_utc: string;
  event_date_unix: number;
  flight_number?: number;
  details: string;
  links: Links;
}

export interface Links {
  reddit?: string;
  article: string;
  wikipedia?: string;
}