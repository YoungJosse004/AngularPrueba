import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulantesComponent } from './formulantes.component';

describe('FormulantesComponent', () => {
  let component: FormulantesComponent;
  let fixture: ComponentFixture<FormulantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
