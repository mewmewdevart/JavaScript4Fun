import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent {
  username:string = "Larissa"
  serverName: string = "Server02";
  serverCreated = false;

  allowNewServer = false;
  serverCreationStatus = 'No server was created!'

  constructor(){
    setTimeout( () => {
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer (){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created!';
  }

  /* nome: string = "larissa";

  idade: number = 28;
  mensagem: string = `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;

  constructor() {
    console.log(this.mensagem);
  } */
}

