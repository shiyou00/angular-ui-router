import { Component, OnInit } from '@angular/core';
import { Transition, StateService } from "@uirouter/core";

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  constructor(
    public trans: Transition,
    private $state: StateService
  ) { }

  ngOnInit() {
    console.log(this.trans,this.$state);
  }

}
