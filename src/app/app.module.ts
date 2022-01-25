import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './pages/one/one.component';
import { TwoComponent } from './pages/two/two.component';
import { FormComponent } from './component/form/form.component';
import { FormComponent as FormComponent2 } from './component/form2/form.component';

@NgModule({
	declarations: [
		AppComponent,
		OneComponent,
		TwoComponent,
		FormComponent,
		FormComponent2,
	],
	imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
	providers: [],

	bootstrap: [AppComponent],
})
export class AppModule {}
