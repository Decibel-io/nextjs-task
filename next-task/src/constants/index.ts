import { ICredentials } from '@/types/api';

export const END_POINT = 'https://frontend-test-api.aircall.io';

export const AUTH_CREDENTIALS = {
  username: 'HASEEB',
  password: '12345',
} satisfies ICredentials;

export const CALLS_COLUMNS = [
  'Call Type',
  'Direction',
  'Duration',
  'From',
  'To',
  'Via',
  'Created At',
  'Status',
  'Actions',
];

export const API_KEYS = {
  GET_CALLS: 'calls',
  LOGIN: 'login',
  REFRESH_TOKEN: 'refresh token',
  ARCHIVE_CALL: 'archive call',
  ADD_NOTE: 'Add note',
};
