import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulantesAnidadosComponent } from './formulantes-anidados.component';

describe('FormulantesAnidadosComponent', () => {
  let component: FormulantesAnidadosComponent;
  let fixture: ComponentFixture<FormulantesAnidadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulantesAnidadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulantesAnidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
