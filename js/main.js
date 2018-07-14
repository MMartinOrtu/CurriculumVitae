import {Form} from "./form.js"

export class Main{
    constructor(){
        //Elementos del DOM
        this.iconoMenu = document.querySelector('.fa-bars');
        this.itemMenu = document.querySelector('#lista-menu');
        this.menu = document.querySelectorAll('nav.menu-top a');
        this.secciones = document.querySelectorAll('.secciones');
        
        //Elementos del DOM del formulario
        this.formContact = document.querySelector('#form-contacto');
        this.conocido= document.querySelector('#listado');
        this.otros= document.querySelector('#otros');
        this.textArea= document.querySelector('#message');

        //Array para guardar los offsetTop del formulario
        this.offsets = [];
        //Función que se utiliza para clacular los offsetTop de las secciones
        this.prepararNavegacion();
    }

    defineEventListener(){
        //Evento que maneja el envío del formulario
        this.formContact.addEventListener('submit', this.readContact.bind(this));

        //Evento para quitar y poner el menú de navegación oculto
        this.iconoMenu.addEventListener('click', this.addMenu);
        this.itemMenu.addEventListener('click', this.removeMenu);

        //Evento para hacer aparecer un campo de texto al marcar la opción "otros" del formulario
        this.conocido.addEventListener('change', this.selectOption.bind(this));

        //Evento que valida el número de palabras del campo textArea del formulario
        this.textArea.addEventListener('change', this.comprobarLongitudTextArea.bind(this))

        //Evento para cambiar la apariencia del menú de navegación con el scroll
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
     
        if (this.formContact.checkValidity()){ 
        form.guardarDatos();}
       
               

    }
    selectOption(e){
        console.dir(this.otros)
        console.dir(this.conocido)
        if(e.target.value=="Otros"){
            this.otros.classList.remove('input-hidden')
        }
    }

   comprobarLongitudTextArea(e){
        let cadenaTextArea = e.target.value;          
        let totalPalabras = this.contarPalabras(cadenaTextArea);
        let palabrasSobrantes= totalPalabras - 150;
        console.log(totalPalabras)
        if (totalPalabras > 150){
            this.textArea.setCustomValidity(`Este campo tiene${ totalPalabras} palabras y no puede contener más de 150, debes quitar, al menos, ${palabrasSobrantes} palabras`);               
        }else{
            this.textArea.setCustomValidity('');
        }     
    }

    contarPalabras(cadena){
        //Expresiones regulares para quitar espacios y signos de puntuación a la cadena de texto
        let signos = /[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/g;
        let primerBlanco = /^ /;
        let ultimoBlanco = / $/;
        let variosBlanco = /[ ]+/g;
        //Operaciones sobre la cadena de texto        
        var cadena = cadena.replace(signos, "");
        var cadena = cadena.replace(variosBlanco, " ");
        var cadena = cadena.replace(primerBlanco, "");
        var cadena = cadena.replace(ultimoBlanco, "");
        //Convierto la cadena texto sin signos de puntuación y espacios de más en un array
        let textoTroceado = cadena.split(" ");
       //Cuento el número de elementos del array que será el número de palabras de la cadena
        let numeroPalabras = textoTroceado.length;
        return numeroPalabras; 
    }
}