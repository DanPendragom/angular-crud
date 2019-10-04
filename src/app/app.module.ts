import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SomarModule } from './somar/somar.module';

@NgModule({
  // Aqui importamos componentes diretivas e meta-dados (informação sobre a informação)
  declarations: [
    AppComponent,
  ],
  // Aqui importamos modulos 
  imports: [
    BrowserModule,
    FormsModule,
    SomarModule,
    HttpModule
  ],
  // Aqui importamos serviços de escopo global da aplicação (verficiação, rotas...)
  providers: [],
  // Componente que é instanciando ao iniciar a aplicação 
  // (Container dos demais components/ comp-principal/ view-port)
  bootstrap: [AppComponent]
})
export class AppModule { }
