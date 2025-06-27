const ROUTES = {
  home: '/',
  signin: '/signin',
  dashboard: '/dashboard',
  patientsList: '/patients',
  addPatient: '/patient/create',
  profile: '/profile',
  settings: '/settings',
} as const;  // "as const" makes the object readonly and literal types

type RouteKeys = keyof typeof ROUTES;
type RouteValues = typeof ROUTES[RouteKeys];

export { ROUTES, RouteKeys, RouteValues };