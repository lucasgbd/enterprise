import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasfiscaisComponent } from './notasfiscais.component';

describe('NotasfiscaisComponent', () => {
  let component: NotasfiscaisComponent;
  let fixture: ComponentFixture<NotasfiscaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasfiscaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasfiscaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
