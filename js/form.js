export class Form {
    constructor(){
        //Elemento del DOM del formulario
        this.name= document.querySelector('#name');
        this.email= document.querySelector('#email');
        this.phone= document.querySelector('#phone');
        this.opciones= document.querySelectorAll('#opciones');
        this.otros= document.querySelector('#opcion-otros');
        this.message= document.querySelector('#message');
        this.btnForm= document.querySelector('btnForm');
        
        this.datosForm ={
            name: '',
            email:'',
            phone:'',
            conocido: '',
            otros:'',
            message:''
        }
        
       
    }
   
    guardarDatos(){
        console.log('guardando datos')
    }

}