import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomFormService } from 'src/app/custom-form.service';

@Component({
	selector: 'app-one',
	templateUrl: './one.component.html',
	styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
	myForm!: any;

	constructor(private fb: FormBuilder, private customForm: CustomFormService) {}

	ngOnInit() {
		this.myForm = this.fb.group({
			form1: this.customForm.form,
			form2: this.customForm.form,
		});

		this.myForm.controls.form1.valueChanges.subscribe((value: any) => {
			console.log(value.name);
		});
	}
}
