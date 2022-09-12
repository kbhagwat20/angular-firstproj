import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproj';
  name= "Krupali"
  disable= false;
  anyname: any;
  getValue(){
    return "Get Function VAl"
  }
  getName(){
    alert("function call")
  }
  getPara(name:any,secondName:String){
    alert(name);
    alert(secondName);
  }
  displayVal:String='';
  getData(val:String){
    console.warn(val)
    this.displayVal= val
  }
  
  count=0
  counter(type:String)
  {
    type==='add' ? this.count++:this.count--;

  }

  show=false
  color="red"
  users= ['Anil','Krupali','Pawan','Arti']
  userDetails=[
    {name:'Aman',email:'aman@gmail.com',phone:'4444'},
    {name:'Vinod',email:'vinod@gmail.com',phone:'4422'},
    {name:'Gauri',email:'gauri@gmail.com',phone:'6666'},
    {name:'Manisha',email:'manisha@gmail.com',phone:'9999'},
  ];

  userInfo=[
    {name:'Aman',email:'aman@gmail.com',socialAccounts:['facebook','insta','gmail']},
    {name:'Vinod',email:'vinod@gmail.com',socialAccounts:['youtube','insta','linkedin']},
    {name:'Gauri',email:'gauri@gmail.com',socialAccounts:['yahoo','facebook','gmail']},
    {name:'Manisha',email:'manisha@gmail.com',socialAccounts:['linkedin','insta','gmail']},
  ];

  
}
