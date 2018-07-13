import {Form} from "./form.js"

export class Main{
    constructor(){
        //Elementos del DOM
        this.iconoMenu = document.querySelector('.fa-bars');
        this.itemMenu = document.querySelector('#lista-menu');
        this.formContact = document.querySelector('#contacto');
        this.menu = document.querySelectorAll('nav.menu-top a');
        this.secciones = document.querySelectorAll('.secciones');
        
        this.offsets = [];
        this.prepararNavegacion();

        this.opciones= document.querySelector('#listado');
        this.otros= document.querySelector('#otros');
     
    }

    defineEventListener(){
        this.formContact.addEventListener('submit', this.readContact);
        this.iconoMenu.addEventListener('click', this.addMenu);
       /*  this.iconoMenu.addEventListener('touch', this.addMenu); */
        this.itemMenu.addEventListener('click', this.removeMenu);
        this.opciones.addEventListener('change', this.selectOption.bind(this));
        window.addEventListener('scroll', this.changeMenuStyle.bind(this));

    }

    addMenu(){
        
        document.querySelector('.menu-top').classList.add('hidden');
    }
    removeMenu(e){
        console.log(e);
        document.querySelector('.menu-top').classList.remove('hidden');
    }

   changeMenuStyle(){       
     let pageOffset = window.pageYOffset;
     let menuItem = 0    
    
        if(pageOffset>=this.offsets['#sobre-mi'] && pageOffset<this.offsets['#formacion']){
            menuItem= 0;            
        }else if(pageOffset>=this.offsets['#formacion'] && pageOffset<this.offsets['#experiencia']){
            menuItem= 1;    
        }else if(pageOffset>=this.offsets['#experiencia'] && pageOffset<this.offsets['#contacto']){
            menuItem= 2;
        }else if(pageOffset>=this.offsets['#contacto']){
            menuItem= 3;
        }
        
        this.menu.forEach(
            (item) => item.classList.remove('active')
        )
        this.menu[menuItem].classList.add('active')       
    }

    prepararNavegacion() {         
         this.secciones.forEach(
            (item) => {
                let sectionoffSet =item.offsetTop;                
                this.offsets['#'+item.id] = sectionoffSet;
            }
        ) 
    }

    readContact(e){
        e.preventDefault();
        let form = new Form();
        form.guardarDatos();

    }
    selectOption(e){
        console.log(this.otros)
        if(e.target.value=="Otros"){
            this.otros.classList.remove('input-hidden')
        }
    }

}