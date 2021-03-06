
    import { Injectable } from '@angular/core';
    import { Http, Response, Headers, RequestOptions } from '@angular/http';
    import 'rxjs/add/operator/map';
    import { Observable } from 'rxjs/Observable';
    import { Producto } from '../models/Producto'; 
    import { GLOBAL } from './global';
    
    @Injectable()
    export class ProductoService{
        public url: string;
    
        constructor(public _http:Http){
            this.url = GLOBAL.url;
        }
    
        getProductos(){
            console.log('fake API ' + this.url);
            return this._http.get(this.url + 'fake API ').map(res => {
                res.json();
            });
        }

        addProducto(producto: Producto) {
            let json = JSON.stringify(producto);
            let params = 'json=' +json;
            let headers = new Headers( { 'Content-Type': 'application/x-www-form-urlencoded'});

            return this._http.post(this.url + 'productos', params, {headers: headers}).map( 
                res => res.json()
                );
    }
    }
    