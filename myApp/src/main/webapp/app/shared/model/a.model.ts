import { IB } from 'app/shared/model/b.model';

export interface IA {
  id?: number;
  aa?: string | null;
  bs?: IB[] | null;
}

export const defaultValue: Readonly<IA> = {};
