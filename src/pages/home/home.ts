import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuarios
  constructor(public navCtrl: NavController, public proveedor: ProveedorProvider) {}
  
  ionViewDidLoad(){
    this.proveedor.obtenerDatos()
    .subscribe(
      (data)=> { 
        this.usuarios = data; 
        console.log(data);
      },
      (error)=>{console.log(error);}
    )
  }
}
