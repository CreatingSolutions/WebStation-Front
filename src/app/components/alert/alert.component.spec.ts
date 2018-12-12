import {AlertComponent} from './alert.component';
import {ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';

describe('HomeComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [AlertComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
