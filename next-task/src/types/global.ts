import { SxProps, Theme } from '@mui/material';

export type Style = SxProps<Theme>;

export interface IStyles {
  [key: string]: Style;
}

export type ILocalStorageKeys = 'AUTH_TOKEN' | 'REFRESH_TOKEN';
