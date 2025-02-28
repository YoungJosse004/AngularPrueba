import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListitaComponent } from './listita.component';

describe('ListitaComponent', () => {
  let component: ListitaComponent;
  let fixture: ComponentFixture<ListitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
