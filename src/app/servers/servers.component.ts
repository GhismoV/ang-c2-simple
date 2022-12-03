import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer:boolean = false
  newServerName:string = ''
  err:string = ''

  servers: Array<string> = ['Primo', 'Secondo']


  constructor() {
    setTimeout( () => {this.allowAddServer = true}, 2000 )
  }

  ngOnInit(): void {
  }

  onAddServer = () : void => {
    if(this.servers.includes(this.newServerName)) {
      this.err = this.newServerName + ' is already present'
      setTimeout( () => {this.err = ''}, 2000 )
    } else {
      this.err = ''
      this.servers.push(this.newServerName)
    }
    this.newServerName = ''
  }

  onUpdateServerName = (event : Event) : void => {
    this.newServerName = (<HTMLInputElement>event.target).value
    //console.log(event)
  }

}
