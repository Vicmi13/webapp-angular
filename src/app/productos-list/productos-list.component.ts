import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; 
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css'],
  providers:[ProductoService]
})
export class ProductosListComponent implements OnInit {
  public titulo : string;
  constructor(private _route:ActivatedRoute, 
              private _router: Router,
              private _productoService:ProductoService) 
              { 
    this.titulo = "Listado de productos"
  }

  ngOnInit() {
    console.log('Productos.list.component cargados')
    alert(this._productoService.getProductos());
  }

}
