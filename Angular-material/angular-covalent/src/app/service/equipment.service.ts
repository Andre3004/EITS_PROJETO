import { Equipment } from './../model/Equipment';
import { PageRequest } from './../model/PageRequest';

import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EquipmentService {

  /*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
  /**
   * 
   */
  headers: Headers;
  /**
   * 
   */
  headersFile: Headers;
  /**
   * 
   */
  url: String = '/projeto/api/equipment/';

  /*-------------------------------------------------------------------
	 * 		 					CONSTRUCTOR
	 *-------------------------------------------------------------------*/
  /**
   * 
   * @param http 
   */
  constructor(public http: Http) 
  { 
    this.headers = new Headers();
    this.headersFile = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headersFile.append('Content-Type', 'multipart/form-data');
  }

  /*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/
  /**
   * 
   * @param id 
   */
  clearFileEquipment(id: Number)
  {
    return this.http.delete(this.url + 'clearFileEquipment/' + id);
  }
  /**
   * 
   * @param equipment 
   */
  insertEquipment(equipment: Equipment): Observable<Response>
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
  /**
   * 
   * @param page 
   * @param size 
   * @param property 
   * @param order 
   * @param filter 
   * @param id 
   */
  listSubEquipmentByFilter(page: number, size: number, property: String, order: String, filter: String, id: Number): Observable<PageRequest>
  {
    return this.http.get(this.url + 'listSubEquipmentByFilter/' + page + '/' + size + '/' + property + '/' + order + '/' + filter + '/'+ id).map(res => res.json());
  }
  /**
   * 
   * @param id 
   */
  downloadFile(id: Number)
  {
    return this.http.get(this.url + 'downloadFile/' + id);
  }
  /**
   * 
   * @param file 
   * @param id 
   */
  updateFile(file: FormData, id: Number): Observable<Response>
  {
    return this.http.post(this.url + 'uploadFile/' + id, file);
  }
  /**
   * 
   * @param equipment 
   */
  deleteEquipment(equipment: Equipment): Observable<Response>
  {
    return this.http.delete(this.url + 'deleteEquipment/' + equipment.id);
  }
  /**
   * 
   * @param id 
   */
  findEquipmentbyId(id: Number): Observable<Equipment>
  {
    return this.http.get(this.url + 'findEquipmentById/' + id).map(res => res.json());;
  }
  /**
   * 
   * @param page 
   * @param size 
   * @param property 
   * @param order 
   * @param filter 
   */
  listMainEquipmentsByFilters(page: Number, size: Number, property: String, order: String, filter: String): Observable<PageRequest>
  {
    return this.http.get(this.url + 'listMainEquipmentsByFilters/'+ page + '/' + size + '/' + property + '/' + order + '/' + filter).map(res => res.json());
  }
  /**
   * 
   * @param id 
   * @param filter 
   */
  ListNonAssociatedEquipmentByFilter(page : Number, size: Number, property: String, order : String, id: Number, filter: String ): Observable<PageRequest>
  {
      if (!id)
      {
        id = 0;
      }
      return this.http.get(this.url + 'ListNonAssociatedEquipmentByFilter/'+ page + '/' + size + '/' + property + '/' + order + '/' + id + '/' + filter ).map(res => res.json()); 
  }
  /**
   * 
   * @param equipment 
   */
  disassociateEquipment(equipment: Equipment): Observable<Response>
  { 
      return this.http.patch(this.url + 'disassociateEquipment/' + equipment.id, { headers: this.headers });
  }
}