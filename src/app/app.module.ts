import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';
import { JogoLotofacilComponent } from './componentes/jogo-lotofacil/jogo-lotofacil.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalhesComponent,
    JogoLotofacilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
