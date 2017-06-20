export class PageRequest
{
    content: 
    [
    {
        id: Number,
        name: String,
        lastName: String,
        email: String,
        active: Boolean,
        sex: String,
        permission: String,
        valid: Boolean
    }
    ];
    last: Boolean;
    totalPages: Number;
    totalElements: Number;
    size: Number;
    number: Number;
    first: Boolean;
    numberOfElements: Number;
}