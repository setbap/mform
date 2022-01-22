import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-one',
	templateUrl: './one.component.html',
	styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
	myForm!: any;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.myForm = this.fb.group({
			form1: this.fb.group({
				name: ['Sammy', Validators.required],
				lastname: ['', Validators.required],
			}),
			form2: this.fb.group({
				name: ['asda', Validators.required],
				lastname: ['', Validators.required],
			}),
		});
	}
}
