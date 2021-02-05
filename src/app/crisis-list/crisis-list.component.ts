import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// @ts-ignore
import {CrisisService} from '../crisis.service';
// @ts-ignore
import {Crisis} from '../crisis';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})

export class CrisisListComponent implements OnInit {
  // @ts-ignore
  crises$: Observable<Crisis[]>;
  // @ts-ignore
  selectedId: number;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {  // @ts-ignore
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        // @ts-ignore
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      })
    );
  }
}
