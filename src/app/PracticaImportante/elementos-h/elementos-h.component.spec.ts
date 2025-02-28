import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosHComponent } from './elementos-h.component';

describe('ElementosHComponent', () => {
  let component: ElementosHComponent;
  let fixture: ComponentFixture<ElementosHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementosHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementosHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
