import { User } from './User';

export class Location
{
	id: number; 
	codLocation: String;
	responsible: User;
	viceResponsible: User;
    location: Location;
}