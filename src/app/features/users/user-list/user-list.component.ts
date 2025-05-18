import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/core/services/api.service';

export interface User {
  id: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource = new MatTableDataSource<User>();
  constructor(private apiService: ApiService) {
    this.apiService.getUsers().subscribe((users: User[]) => {
      this.dataSource.data = users;
    });
  }
}
