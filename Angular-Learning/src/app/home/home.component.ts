import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }

  goToProfile() {
    this.router.navigate(['profile'], { queryParams: { name: 'Atikul', age: '25', email: 'atikul@gmail.com' } })
  }

  users = [
    {
      id: 1,
      name: 'Mainuddin',
      age: 24,
      email: 'main@gmail.com'
    },
    {
      id: 2,
      name: 'Atikul',
      age: 34,
      email: 'atikul@gmail.com'
    },
    {
      id: 3,
      name: 'Sifat',
      age: 44,
      email: 'sifat@gmail.com'
    },
    {
      id: 4,
      name: 'Rafi',
      age: 40,
      email: 'rafi@gmail.com'
    }

  ]
}
