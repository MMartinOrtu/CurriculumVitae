export class Main{
    constructor(){
        //Elementos del DOM
        this.iconoMenu = document.querySelector('.fa-bars')
        this.itemMenu = document.querySelector('#lista-menu')
        this.formContact = document.querySelector('#contacto')
        
        this.menu = document
        this.secciones =
        this.offsets = []
    }

    defineEventListener(){
        /* this.formContact.addEventListener('submit', ); */
        this.iconoMenu.addEventListener('click', this.addMenu)
        this.itemMenu.addEventListener('click', this.removeMenu)
        window.addEventListener('scroll', this.changeMenuStyle.bind(this))
    }

    addMenu(){
        
        document.querySelector('.menu-top').classList.add('hidden');
    }
    removeMenu(e){
        console.log(e);
        document.querySelector('.menu-top').classList.remove('hidden');
    }

    changeMenuStyle(e){



    }


}