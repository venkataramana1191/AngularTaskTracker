import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastItemComponent } from './tast-item.component';

describe('TastItemComponent', () => {
  let component: TastItemComponent;
  let fixture: ComponentFixture<TastItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TastItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
