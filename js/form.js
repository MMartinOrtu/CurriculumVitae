export class Form {
    constructor(){
        //Elemento del DOM del formulario
        this.formContact = document.querySelector('#form-contacto');
        this.name= document.querySelector('#name');
        this.email= document.querySelector('#email');
        this.phone= document.querySelector('#phone');
        this.conocido= document.querySelector('#listado');
        this.otros= document.querySelector('#otros');
        this.textArea= document.querySelector('#message');
        
        this.datosForm ={
            name: '',
            email:'',
            phone:'',
            conocidoPor: '',
            otros:'',
            message:''        
          }   
       
    }
   

    guardarDatos(){
        console.log('guardando datos')
        this.datosForm ={
            name: this.name.value,
            email:this.email.value,
            phone:this.phone.value,
            conocidoPor: this.conocido.value,
            otros: this.otros.value,
            message:this.textArea.value
            
        }  
        console.dir(this.datosForm)
        this.formContact.reset();
    }
}
