import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
	providedIn: 'root',
})
export class CustomFormService {
	public form!: FormGroup;
	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			name: ['asda', Validators.required],
			lastname: ['', Validators.required],
			phone: ['', Validators.required],
		});

		this.form.valueChanges.subscribe((value) => {
			console.log(value);
		});
	}
}
