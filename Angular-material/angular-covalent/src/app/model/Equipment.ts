import { Location } from './Location';

/**
 * Model Equipment
 */
export class Equipment
{
	id: number; 
    name: String ;
	description: String ;
    location: Location;
    equipment: Equipment;
    filePath: String ;

}