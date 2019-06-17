import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  showTemplate : boolean = false;
  public shared: SharedService;

  isCollapsed = true;

  constructor() {
    this.shared = SharedService.getInstance();
   }

  ngOnInit() {
    console.log(this.shared.showTemplate)
  }

  closeCollapse(){
    this.isCollapsed = true;
  }
}
