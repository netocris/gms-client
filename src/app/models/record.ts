import { IBaseEntity } from './i-base-entity';

export interface Record extends IBaseEntity {
  _timestamp: number;
  value: number;
  notes?: string;
}
