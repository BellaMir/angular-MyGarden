import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersDetailComponent } from './flowers-detail.component';

describe('FlowersDetailComponent', () => {
  let component: FlowersDetailComponent;
  let fixture: ComponentFixture<FlowersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
