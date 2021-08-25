import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
  valor:string="hola mundo";

  constructor(private router: Router,private navControl: NavController, private menu: MenuController) {}

  irPagina2(){
    this.router.navigate(['/pagina2']);
  }
  irPagina3(){
    this.navControl.navigateForward(['/pagina3']);
  }

}
