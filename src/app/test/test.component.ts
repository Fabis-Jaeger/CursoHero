import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  title = 'Interpolación';
  lista = []
  listafuture = []
  loading = false
  load = false
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.GetInfo()  
      this.loading = true
    }, 3000);
    setTimeout(() => {
      this.GetInfo2()
      this.load = true
    }, 5000);
  }
  
  GetInfo (){
    this.lista = []    
    const owo = [{
    titulo: 'Spiderman',
    fecha: new Date(),
    precio: 1500
    },
    {
      titulo: 'Batman',
      fecha: new Date(),
      precio: 1900
    }]
    this.lista.push(/*delete []*/...owo) // push a una estrucutra de datos
   //this.lista.pop() // borra el ultimo elemento
   //this.lista.shift() //borra el ultimo elemento 
   this.lista.unshift({ // agerga un O/A a la esructura de datos al pirncipio 
    titulo: 'Venom',
    fecha: new Date(),
    precio: 1880
   })
   let filter = this.lista.filter(x => x.precio > 1000 ) // Filtra uno o varios objetos objetos 
   console.log("🚀 ~ file: test.component.ts ~ line 48 ~ TestComponent ~ GetInfo ~ filter", filter)
   let find = this.lista.find(x => x.titulo === 'Batman') // busca solo un objeto 
   console.log("🚀 ~ file: test.component.ts ~ line 50 ~ TestComponent ~ GetInfo ~ find", find)
   let every = this.lista.every(x => x.precio > 1000) // true si todos lo objetos cumplen la condicion y false cuando no
   console.log("🚀 ~ file: test.component.ts ~ line 52 ~ TestComponent ~ GetInfo ~ every", every)
   let some = this.lista.some(x => x.precio > 1500)// true si al menos un objeto cumple la condicion y false si ninguno la cumple
   console.log("🚀 ~ file: test.component.ts ~ line 54 ~ TestComponent ~ GetInfo ~ some", some)
   this.lista.reverse() // Reverse a los objetos del arreglo
   let dd = this.lista.includes(x => x.precio === 1500) // verifica un elemento 
   var cuenta: string = "cuenta";
   let cuentamnumerca: number = 34
   let cuentaact: boolean = false
   var mitupla = ["string", 123]
   mitupla[0] = "ola"
   mitupla[1] = 1
   let cuentas: Array<boolean> =[true, false]
   cuentas[0] = false;
   console.log(cuenta)
   enum color {
     emp,
     ad,
     ass
   }
   let res = color.emp
   console.log("🚀 ~ file: test.component.ts ~ line 72 ~ TestComponent ~ GetInfo ~ res", res)
   var uwu: any  = "string"
   uwu = 112
   uwu = []
   let datovoid: void = null;
   let item: string[] | string
   item = ['Hola', 'Mundo']
   item = "Hola Mundo"
   var Array : Array<string | number | []>
  }
GetInfo2(){
  this.listafuture = []
  const owo = [{
    titulo: 'Blabe',
    fecha: new Date(),
    precio: 1500
    },
    {
      titulo: 'Superman',
      fecha: new Date(),
      precio: 1900
    }]
    this.listafuture.push(...owo)
}


  duplicar(valor: number): number {
    return valor * 2;
  }

}
