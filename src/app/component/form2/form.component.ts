import { Component, Input, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	FormGroupDirective,
	Validators,
} from '@angular/forms';

@Component({
	selector: 'app-form2',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
	@Input()
	formGroupName!: string;
	form!: FormGroup;

	constructor(private rootFormGroup: FormGroupDirective) {}

	ngOnInit(): void {
		this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
	}
}
