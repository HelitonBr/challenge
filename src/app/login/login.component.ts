import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  formulario: FormGroup;
  formBuilder: FormBuilder;

  constructor( private _formBuilder: FormBuilder ) 
              { this.formBuilder = _formBuilder;}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nomeUsuario: [null, Validators.required],
      senha: [null, Validators.required]
    })
  }
  

}
