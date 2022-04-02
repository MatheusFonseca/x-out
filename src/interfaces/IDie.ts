import { IColor } from './IColor';

export interface IDie {
  value: number;
  color: IColor | 'white';
}
