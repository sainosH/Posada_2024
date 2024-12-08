import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowfallAnimationComponent } from './snowfall-animation.component';

describe('SnowfallAnimationComponent', () => {
  let component: SnowfallAnimationComponent;
  let fixture: ComponentFixture<SnowfallAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnowfallAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowfallAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
