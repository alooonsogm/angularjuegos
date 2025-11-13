import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadornombreComponent } from './jugadornombre.component';

describe('JugadornombreComponent', () => {
  let component: JugadornombreComponent;
  let fixture: ComponentFixture<JugadornombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JugadornombreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadornombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
