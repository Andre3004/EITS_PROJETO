import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
{
    name: 'filterNameEquipment',
})

export class FilterNameEquipment implements PipeTransform
{
    transform(equipments, text)
    {
        return equipments.filter( equipment => equipment.name.toLowerCase().includes(text.toLowerCase() ) );
    }
}