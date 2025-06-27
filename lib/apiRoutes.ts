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
    profile: `/profile`,
  },

  scribe: {
    upload: `/upload`
  },

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
