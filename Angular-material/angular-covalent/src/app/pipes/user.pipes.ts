import { UserService } from './../service/user.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
{
    name: 'filterName',
})

export class FilterName implements PipeTransform
{
    constructor (userService: UserService){}
    transform(users, text)
    {
        return users.content.filter( user => user.name.toLowerCase().includes(text.toLowerCase() ) );
    }
}