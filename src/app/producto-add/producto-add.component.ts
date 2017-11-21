import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; 

import { Producto} from '../models/Producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.css'],
  providers: [ProductoService]
})
export class ProductoAddComponent implements OnInit {
  public titulo : string;
  public producto : Producto;

  constructor(private _productoService : ProductoService,
              private _route: ActivatedRoute, 
              private _router:Router) { 
    this.producto = new Producto('Victor Torres','Developer', 'Full stack developer');
    this.titulo = 'Crear un nuevo producto'
  }

  ngOnInit() {
    console.log('producto-add encontrado');
  }

  onSubmit(){
    console.log(this.producto);
    this._productoService.addProducto(this.producto).subscribe(
      response => {
        if(response.code == 200){
          this._router.navigate(['/productos'])
        }else{
          console.log(response);
        }
      }, error => {
        console.log( <any> error );
      }
    )};

}
