import { Component, OnInit } from '@angular/core';
import {Dialog, DialogRef} from '@angular/cdk/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public dialog: Dialog) { }

  ngOnInit(): void {
  }
  close(){
    this.dialog.closeAll();

  }

}
