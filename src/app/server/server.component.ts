import { Component, Input, OnInit } from '@angular/core';

@Component({
  //selector: 'app-server', // lo si richima via tag (element)
  //selector: '[app-server]', // se metto il selettore tra [] lo si richima come attributo per esempio di <div>
  selector: '.app-server', // se metto il . iniziale lo si richima come classe per esempio di <div>
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  static readonly ON : string = 'online'
  static readonly OFF : string = 'offline'


  @Input() serverName: string
  @Input() serverIdx: number
  serverId: number = 10
  serverStatus: string = ServerComponent.OFF

  constructor() {
    this.serverId = Math.random()
    this.serverStatus = this.serverId > 0.5 ? ServerComponent.ON : ServerComponent.OFF
  }

  ngOnInit(): void {
  }

  changeStatus= ():void => {
    this.serverStatus = (this.serverStatus === ServerComponent.OFF) ? ServerComponent.ON : ServerComponent.OFF
  }

  isOnline = () : boolean => this.serverStatus === ServerComponent.ON
  getBkColor = () : string => this.isOnline() ? 'blue' : 'red'

}
