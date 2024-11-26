import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInvComponent } from './registro-inv.component';

describe('RegistroInvComponent', () => {
  let component: RegistroInvComponent;
  let fixture: ComponentFixture<RegistroInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroInvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
