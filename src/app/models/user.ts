import { IBaseEntity } from './i-base-entity';

export interface User extends IBaseEntity {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
}
