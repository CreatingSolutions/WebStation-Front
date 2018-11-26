import {HeaderComponent} from './header.component';
import {ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FlagImage} from '../model';

describe('HomeComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let valueDebug: DebugElement;
  let valueElement: HTMLElement;
  let expectedLanguage; FlagImage;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    valueDebug = fixture.debugElement.query(By.css('dropdown-item'));
    valueElement = valueDebug.nativeElement;

    expectedLanguage = [{name: 'FR', url: 'mock'}];
    component.languages = expectedLanguage;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should header language', () => {
    const expectedPipedName = expectedHero.name.toUpperCase();
    expect(heroEl.textContent).toContain(expectedPipedName);
  });
});
