import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {
  source:string='INR';
  target:string='INR';
  Amount:number=0;
  show:Boolean=false;
  result:Number=0;
  constructor() { }

  ngOnInit(): void {
  }
calculate(){
  this.show=true;
  if(this.source==this.target)this.result=this.Amount;
  else if(this.source=="GBP" && this.target=="INR"){
    this.result=(79.677056/0.876893)*this.Amount;
  }
  else if(this.source=="INR" && this.target=="GBP"){
    this.result=(0.876893/79.677056)*this.Amount;
  }
  else if(this.source=="USD" && this.target=="INR"){
    this.result=(79.677056/1.126735)*this.Amount;
  }
   else if(this.source=="INR" && this.target=="USD"){
    this.result=(1.126735/79.677056)*this.Amount;
  }
  else if(this.source=="GBP" && this.target=='USD'){
    this.result=(1.126735/0.876893)*this.Amount;
  }
  else if(this.source=="USD" && this.target=='GBP'){
    this.result=(0.876893/1.126735)*this.Amount;
  }
}

}
