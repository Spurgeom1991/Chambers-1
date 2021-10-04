import { ProfileService } from './../../services/profile/profile.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../types/Profile';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  profile$: Observable<Profile>;

  constructor(private profileService: ProfileService) {
    this.profile$ = this.profileService.getProfile$();
  }
}
