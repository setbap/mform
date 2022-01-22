import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'mform';
	myForm!: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.myForm = this.fb.group({
			name: ['Sammy', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			message: ['', [Validators.required, Validators.minLength(15)]],
		});
	}
}
