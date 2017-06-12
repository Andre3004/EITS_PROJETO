import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
{
    name: 'filterName',
})

export class FilterName implements PipeTransform
{
    transform(users, text)
    {
        return users.filter( user => user.name.toLowerCase().includes(text.toLowerCase() ) );
    }
}