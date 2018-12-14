import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import 'rxjs/add/observable/throw';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import 'rxjs/add/operator/map';
import { AuthGuard } from './auth.guard';
import { HttpModule } from '@angular/http';

describe('Logged in guard should', () => {
  let authGuard: AuthGuard;
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule, HttpModule],
      providers: [AuthGuard, { provide: Router, useValue: router }]
    }).compileComponents();
  }));

  beforeEach(() => {
    authGuard = TestBed.get(AuthGuard);
    route = TestBed.get(ActivatedRouteSnapshot);
    state = TestBed.get(RouterStateSnapshot);
  });

  it('be able to hit route when user is logged in', () => {
    localStorage.setItem('currentUser', 'mock');
    expect(authGuard.canActivate(route, state)).toBe(true);
  });

  it('not be able to hit route when user is not logged in', () => {
    localStorage.removeItem('currentUser');
    expect(authGuard.canActivate(route, state)).toBe(false);
  });
});
