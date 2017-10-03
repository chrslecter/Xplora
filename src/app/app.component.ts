import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Xplora';
  lat: number = 51.678418;
  lng: number = 7.809007;
  screenH: any = null;
  screenW: any = null;
	
	constructor (){
		this.screenH=screen.height+"px";
		this.screenW=(screen.width-20)+"px";
    console.log(this.screenH);



   	}  

    ngAfterViewInit(){
      document.getElementById('body').setAttribute("width", this.screenW);
      document.getElementById('body').setAttribute("height", this.screenH );
      

        }

  
}

