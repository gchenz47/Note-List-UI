import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { DataProvider } from './providers/data/data';

const appRoutes: Routes = [
  { path: '',  component: ListComponent },
  { path: 'item/:id',  component: ItemComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule
  ],
  providers: [DataProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
