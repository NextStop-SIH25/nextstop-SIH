export interface BusLocation {
  lat: number;
  lng: number;
}

export interface Bus {
  busId: string;
  busNumber: string;
  currentLocation: BusLocation;
  nextStop: string;
  etaMinutes: number;
}

export interface Route {
  routeId: string;
  routeName: string;
  buses: Bus[];
  stops: string[];
  schedule: string[];
}

export interface BusData {
  routes: Route[];
}

export const busRoutes: BusData = {
  "routes": [
    {
      "routeId": "R1",
      "routeName": "Mhammednagar → Nashik Road",
      "buses": [
        {
          "busId": "B101",
          "busNumber": "1A",
          "currentLocation": { "lat": 20.0110, "lng": 73.7900 },
          "nextStop": "College Road",
          "etaMinutes": 5
        }
      ],
      "stops": ["Mhammednagar", "College Road", "Indira Nagar", "Nashik Road"],
      "schedule": ["06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM"]
    },
    {
      "routeId": "R2",
      "routeName": "Shivaji Chowk → Gangapur Road",
      "buses": [
        {
          "busId": "B201",
          "busNumber": "2B",
          "currentLocation": { "lat": 19.9970, "lng": 73.7880 },
          "nextStop": "Shivaji Chowk",
          "etaMinutes": 3
        }
      ],
      "stops": ["Shivaji Chowk", "New Nashik Market", "Gangapur Road"],
      "schedule": ["06:30 AM", "07:30 AM", "08:30 AM"]
    }
  ]
};

export default busRoutes;