import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class UsuarioService {
  urlAPI = 'https://api.mercadolibre.com/sites/MCO/';
  constructor(private http: Http) {}

  Search_product(product: string):Observable<any>{
    return this.http.get(this.urlAPI+'?search='+product).map(result => {return result})
  }

}