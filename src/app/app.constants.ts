export const API_URLS = {
  base: 'hello',
  auth: {
    base: () => '/auth',
    login: () => '/auth/login',
    signup: () => '/auth/signup',
    verify_otp: () => '/otp/verify',
    regenerate_otp: () => '/otp/regenerate',
    forgot_password: () => '/auth/password/forgot',
    change_password: () => '/auth/password/change',
  },
  tags: {
    get_all: () => '/tags',
    get_one: (tag_id: string | number) => `/tags/${tag_id}` as const,
    create: () => '/tags/create',
  },
  events: {
    event_types: () => '/event/types',
  },
};

export const REGEX = {
  PASSWORD: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]/,
};

export const COOKIES = {
  AUTH: 'xx-event-wave-auth-xx-y204',
};
