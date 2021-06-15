import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './about-item.component.html',
  styleUrls: ['./about-item.component.css'],
})
export class AboutItemComponent implements OnInit {
  id: any;
  paramSub: any;
  public SelectedTr: string;
  constructor(private activateRoute: ActivatedRoute) {}

  public ngOnInit() {
    this.paramSub = this.activateRoute.params.subscribe((params) => {
      this.SelectedTr = params['id'];
    });
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }
}
