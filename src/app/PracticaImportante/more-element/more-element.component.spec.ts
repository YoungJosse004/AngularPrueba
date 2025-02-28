import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreElementComponent } from './more-element.component';

describe('MoreElementComponent', () => {
  let component: MoreElementComponent;
  let fixture: ComponentFixture<MoreElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
