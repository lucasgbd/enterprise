import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NotasFiscaisComponent } from './notasfiscais/notasfiscais.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ClientesComponent,
    NotasFiscaisComponent,
    HomeComponent,
    LoginComponent,
    FormDebugComponent,
    CampoControlErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
