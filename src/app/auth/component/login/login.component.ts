import { Component, OnInit } from '@angular/core';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(public dialog: Dialog, private fb: FormBuilder, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      PassWord: ['', Validators.required]
    })

  }
  close() {
    this.dialog.closeAll();

  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.toastrService.success('Message Success!', 'Title Success!');

  }

}
