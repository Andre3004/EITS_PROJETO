import { User } from './User';

/**
 * MODEL Location
 */
export class Location
{
	id: number; 
	codLocation: String;
	responsible: User;
	viceResponsible: User;
    location: Location;
}