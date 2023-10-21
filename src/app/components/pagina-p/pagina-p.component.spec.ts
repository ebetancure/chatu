import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPComponent } from './pagina-p.component';

describe('PaginaPComponent', () => {
  let component: PaginaPComponent;
  let fixture: ComponentFixture<PaginaPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPComponent]
    });
    fixture = TestBed.createComponent(PaginaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
