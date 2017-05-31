import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
{
    name: 'FilterCodLocation',
})

export class FilterCodLocation implements PipeTransform
{
    transform(locations, text)
    {
        return locations.filter( location => location.codLocation.toLowerCase().includes(text.toLowerCase() ) );
    }
}