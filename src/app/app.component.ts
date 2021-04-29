import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'code-star';

  constructor(private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.route.queryParamMap.subscribe(x => {
      console.log(x.get('test'));
    });
  }
}
