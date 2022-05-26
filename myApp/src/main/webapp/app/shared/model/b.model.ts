import { IA } from 'app/shared/model/a.model';

export interface IB {
  id?: number;
  bb?: string | null;
  a?: IA | null;
}

export const defaultValue: Readonly<IB> = {};
