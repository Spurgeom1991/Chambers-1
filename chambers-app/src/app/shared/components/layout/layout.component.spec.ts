import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from './../../../material/material.module';
import { ProfileService } from './../../services/profile/profile.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  const mockProfileService = {
    getProfile$: () => of({}),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provides: ProfileService, useValue: mockProfileService }],
      declarations: [LayoutComponent],
      imports: [MaterialModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
//ran out of time on unit tests
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
