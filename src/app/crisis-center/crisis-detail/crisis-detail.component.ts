import {switchMap} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {CrisisService} from '../crisis.service';
import {Crisis} from '../crisis';
import {HeroService} from '../../heroes/hero.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {
    // @ts-ignore

    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        // @ts-ignore
        this.service.getCrisis(params.get('id')))
    );
  }

  ngOnInit(): void {
  }

  gotoCrises(crisis: Crisis): void {
    const crisisId = crisis ? crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisList component can select that crisis.
    // Include a junk 'foo' property for fun.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }
}
