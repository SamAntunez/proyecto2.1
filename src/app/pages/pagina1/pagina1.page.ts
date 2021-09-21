import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  constructor(private router:Router,private alertController: AlertController) { }

  ngOnInit() {
    this.listar();
    
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  //MENSAJE ALERTA ELIMINAR
  async AlertaConfirmarEliminar(rut:String) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ELIMINAR',
      message: 'Esta seguro que desea eliminar '+ rut + ' </strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirmo!');
            this.eliminar(rut);
          }
        }
      ]
    });

    await alert.present();
  }

  lista_personas = [
    {
      rut : 1,
      nombre: "juan",
      edad:3333

    },{
      rut : 2,
      nombre: "maria",
      edad:33333

    },{
      rut : 3,
      nombre: "json",
      edad:3333
    }

  ];
  eliminar(rut:String){
    alert('selecciono eliminar '+rut);
    var datos= localStorage.getItem('misdatos');
    
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    datos = datos.split('},{').join('};{');
    //alert(datos);

    var arreglo_temp = datos.split(";");
    var  per;
    var lista_temporal= new Array();

    for (let index = 0; index < arreglo_temp.length; index++) {
      var registro = arreglo_temp[index];
      var la_persona = JSON.parse(registro);
      per={
        rut: la_persona.rut,
        nombre: la_persona.nombre,
        edad: la_persona.edad
      };
      if (la_persona.rut != rut){
      lista_temporal.push(per);
      }
    }
    this.lista_personas= lista_temporal;
    localStorage.setItem('misdatos',JSON.stringify(lista_temporal));

  }
  actualizar(rut:String){
    alert('selecciono actualizar '+rut);
    this.router.navigate(['/pagina2',rut])

  }
  listar(){
    var datos= localStorage.getItem('misdatos');
    
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    datos = datos.split('},{').join('};{');
    alert(datos);

    var arreglo_temp = datos.split(";");
    var  per;
    var lista_temporal= new Array();

    for (let index = 0; index < arreglo_temp.length; index++) {
      var registro = arreglo_temp[index];
      var la_persona = JSON.parse(registro);
      per={
        rut: la_persona.rut,
        nombre: la_persona.nombre
      };
      lista_temporal.push(per);
    }
    this.lista_personas=lista_temporal;
  }
}
