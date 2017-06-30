import { Equipment } from './../model/Equipment';
import { PageRequest } from './../model/PageRequest';

import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EquipmentService {

  headers: Headers;
  headersFile: Headers;
  url: String = '/projeto/equipment/';

  constructor(public http: Http) 
  { 
    this.headers = new Headers();
    this.headersFile = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headersFile.append('Content-Type', 'multipart/form-data');
  }

  insertEquipment(equipment): Observable<Response>
  {
    if(equipment.id != undefined )
    {
       return this.http.put(this.url + 'updateEquipment', JSON.stringify(equipment), { headers: this.headers });
    }
    else
    {
       return this.http.post(this.url + 'insertEquipment', JSON.stringify(equipment), { headers: this.headers });
    }
  }
  downloadFile(id)
  {
    return this.http.get(this.url + 'downloadFile/' + id);
  }
  updateFile(file, id): Observable<Response>
  {
    console.log('Teste: ',file);
    console.log('id: ', id)
    return this.http.post(this.url + 'uploadFile/' + id, file);
  }
  listAllEquipment(): Observable<Equipment[]>
  {
    return this.http.get(this.url + 'listAllEquipment').map(res => res.json());
  }
  listAllSubEquipment(id): Observable<Equipment[]>
  {
    return this.http.get(this.url + 'listAllSubEquipment/' + id).map(res => res.json());
  }  
  deleteEquipment(equipment): Observable<Response>
  {
    return this.http.delete(this.url + 'deleteEquipment/' + equipment.id);
  }
  findEquipmentbyId(id): Observable<Equipment>
  {
    return this.http.get(this.url + 'findEquipmentById/' + id).map(res => res.json());;
  }
  listEquipmentsByFilters(page: number, size: number, property: String, order: String, filter: String): Observable<PageRequest>
  {
    return this.http.get(this.url + 'listEquipmentsByFilters/'+ page + '/' + size + '/' + property + '/' + order + '/' + filter).map(res => res.json());
  }
  listEquipments(page: number, size: number, property: String, order: String): Observable<PageRequest>
  {
    return this.http.get(this.url + 'listEquipments/'+ page + '/' + size + '/' + property + '/' + order ).map(res => res.json());
  }
}