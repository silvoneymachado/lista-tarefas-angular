import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './view/task-list/task-list.component';

const Components = [AppComponent, TaskListComponent];
const Modules = [BrowserModule, AppRoutingModule, FormsModule];
const Providers = [];

@NgModule({
  declarations: [...Components],
  imports: [...Modules],
  providers: [...Providers],
  bootstrap: [AppComponent]
})
export class AppModule {}
