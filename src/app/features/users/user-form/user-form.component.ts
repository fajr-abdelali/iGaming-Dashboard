import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService,private router:Router) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.apiService
        .addUser(this.userForm.value)
        .subscribe((msg) => {
          console.log(msg)
          this.router.navigate([''])
        });
    }
  }
}
