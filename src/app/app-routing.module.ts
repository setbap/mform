import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './pages/one/one.component';
import { TwoComponent } from './pages/two/two.component';

const routes: Routes = [
	{ path: 'one', component: OneComponent },
	{ path: 'two', component: TwoComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: 'one', component: OneComponent },
			{ path: 'two', component: TwoComponent },
		]),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
