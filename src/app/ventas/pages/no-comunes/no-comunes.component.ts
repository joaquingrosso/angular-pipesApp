import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

    nombre: string = 'Fernando';   //Susana
    genero: string = 'masculino'; //femenino

    invitacionMapping = {
      'masculino' : 'invitarlo',
      'femenino'  : 'invitarla'
    };


    clientes: string[] = ['Maria','Pablo','Juan','Hugo','Luciana'];
    clientesMapping = {
      '=0' : 'no tenemos ningun cliente esperando.',
      '=1' : 'tenemos 1 cliente esperando.',
      'other' : 'tenemos # clientes esperando.'
    }


    cambiarPersona(){
      if(this.genero == 'masculino'){
        this.nombre='Susana';
        this.genero = 'femenino';
      }else {
        this.nombre='Fernando';
        this.genero = 'masculino'
      }
    }

    borrarCliente(){
      this.clientes.pop();
    }

    persona = {
      nombre : "Joaquin",
      edad : "22",
      direccion : "La Plata, Buenos Aires"
    };

}
