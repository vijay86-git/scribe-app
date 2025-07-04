// lib/apiRoutes.ts

export const apiRoutes = {
  dashboard: `/dashboard`,
  patients: `/patients`,
  doctors: `/doctors`,
  logs: `/logs`,
  auth: {
    login: `/login`,
    register: `/register`,
    logout: `/logout`,
  },
  profile: '/user/profile',
  metadata: '/metadata',
  scribe: {
    upload: `/upload`
  },
  clinicDetails: '/clinic-details',
  updateClinicBasicDetails: '/update-clinic-basic-details',
  updateClinicOptionalDetails: '/update-clinic-business-details',

  histories: {
    getHistoryById: (id: string) => `/history/info/${id}`,
    list: `/history`
  },

  user: {
    getById: (id: string) => `/users/${id}`,
    list: `/users`,
  },
  contact: `/contact`
};
