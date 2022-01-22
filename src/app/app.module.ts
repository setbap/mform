import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './pages/one/one.component';
import { TwoComponent } from './pages/two/two.component';
import { FormComponent } from './component/form/form.component';

@NgModule({
	declarations: [AppComponent, OneComponent, TwoComponent, FormComponent],
	imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
	providers: [],

	bootstrap: [AppComponent],
})
export class AppModule {}
