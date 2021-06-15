import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../User';
import { UserservService } from '../userserv.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  user: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userServ: UserservService
  ) {
    this.user = new User();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.userServ.save(this.user).subscribe((result) => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
