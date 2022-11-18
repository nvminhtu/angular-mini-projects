import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipListViewComponent } from './tooltip-list-view.component';

describe('TooltipListViewComponent', () => {
  let component: TooltipListViewComponent;
  let fixture: ComponentFixture<TooltipListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
