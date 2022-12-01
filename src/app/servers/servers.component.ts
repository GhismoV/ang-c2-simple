import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer:boolean = false
  newServerName:string = ''

  constructor() {
    setTimeout( () => { this.allowAddServer = true}, 2000 )
  }

  ngOnInit(): void {
  }

  onAddServer = () : void => {
    this.newServerName = ''
  }

  onUpdateServerName = (event : Event) : void => {
    this.newServerName = (<HTMLInputElement>event.target).value
    //console.log(event)
  }

}
