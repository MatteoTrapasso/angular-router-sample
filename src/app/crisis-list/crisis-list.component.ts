import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {CrisisService} from '../crisis-center/crisis.service';

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
  ) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        // @ts-ignore
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      })
    );
  }
}
