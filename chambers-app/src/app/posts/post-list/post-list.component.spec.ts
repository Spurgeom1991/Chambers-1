import { MaterialModule } from './../../material/material.module';
import { UsersService } from './../../shared/services/users/users.service';
import { PostsService } from './../../shared/services/posts/posts.service';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  const mockPostsService = {
    getPosts$: () =>
      of([
        {
          id: '615b6484bad3c600c23d654a',
          title: 'excepteur enim pariatur voluptate',
          content:
            'Magna ea fugiat magna quis nulla duis laborum veniam incididunt incididunt non. Irure et et proident reprehenderit dolore ad enim sint dolor. Deserunt quis et in non et do id deserunt ut nostrud Lorem tempor. Ea reprehenderit ut incididunt irure aliquip labore veniam exercitation ipsum sint.\r\nCillum est anim id culpa minim sint ea. Adipisicing culpa ad deserunt nostrud excepteur non ex occaecat velit Lorem. Incididunt officia culpa ullamco anim labore irure esse magna. Mollit id ipsum ullamco Lorem minim est cupidatat occaecat reprehenderit elit ullamco ex reprehenderit excepteur. Deserunt sunt fugiat labore in cillum ex reprehenderit in enim qui. Tempor adipisicing reprehenderit tempor labore aute. Id veniam mollit incididunt duis aute sunt culpa in dolore dolor commodo elit do.\r\nQui officia adipisicing proident sunt esse veniam fugiat fugiat eu ut in consequat cupidatat. Voluptate mollit sit ullamco veniam pariatur. Dolor excepteur ullamco quis eiusmod est esse mollit. Ipsum cillum enim voluptate veniam do exercitation ut mollit sunt nisi aliquip sit. Irure minim nostrud sint ad non voluptate laboris nisi labore id consectetur exercitation velit.\r\n',
          user: '615b6484ba9c525f3b7e3065',
        },
        {
          id: '615b6484eb495d03d2b9f2c8',
          title: 'consequat aliquip anim incididunt',
          content:
            'Cupidatat adipisicing nostrud anim irure exercitation sunt cupidatat cillum ut ea. Est ea officia culpa ea nisi in proident aliqua eu qui fugiat adipisicing. Reprehenderit enim magna irure nulla amet nulla ipsum occaecat sit qui. Et elit incididunt laboris elit elit deserunt in esse anim anim eiusmod proident. Non amet excepteur aliqua culpa Lorem enim aliqua elit. Et fugiat ipsum irure duis esse. Minim elit aliquip cupidatat laboris dolor enim id.\r\nEiusmod tempor et incididunt elit occaecat cillum. Cillum est et exercitation ullamco pariatur tempor esse tempor culpa ex minim excepteur incididunt. Sunt duis incididunt incididunt dolore dolore qui Lorem reprehenderit.\r\nIn officia ad ut cupidatat sit pariatur. Dolore esse fugiat ipsum incididunt tempor ut qui occaecat enim. Esse Lorem amet tempor excepteur aute quis reprehenderit non sint dolor. Amet pariatur nisi aliquip ut occaecat labore et exercitation nostrud commodo dolor velit nulla.\r\n',
          user: '615b64846ea2261958562933',
        },
      ]),
  };
  const mockUsersService = {
    getUsers$: () =>
      of([
        {
          id: '615b64846ea2261958562933',
          username: 'elit',
          name: 'Nichole Sanchez',
          company: 'ENOMEN',
          email: 'nicholesanchez@enomen.com',
        },
        {
          id: '615b6484a71abc673645a0ff',
          username: 'nulla',
          name: 'Stanton Duncan',
          company: 'MAZUDA',
          email: 'stantonduncan@mazuda.com',
        },
      ]),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: PostsService, useValue: mockPostsService },
        { provide: UsersService, useValue: mockUsersService },
      ],
      declarations: [PostListComponent],
      imports: [MaterialModule],
    }).compileComponents();
  });

  beforeEach(
    waitForAsync(() => {
      fixture = TestBed.createComponent(PostListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should join user to a post in an array',
    waitForAsync(() => {
      component.list$.pipe(take(1)).subscribe((r) => {
        expect(r).toEqual([
          {
            post: {
              id: '615b6484bad3c600c23d654a',
              title: 'excepteur enim pariatur voluptate',
              content:
                'Magna ea fugiat magna quis nulla duis laborum veniam incididunt incididunt non. Irure et et proident reprehenderit dolore ad enim sint dolor. Deserunt quis et in non et do id deserunt ut nostrud Lorem tempor. Ea reprehenderit ut incididunt irure aliquip labore veniam exercitation ipsum sint.\r\nCillum est anim id culpa minim sint ea. Adipisicing culpa ad deserunt nostrud excepteur non ex occaecat velit Lorem. Incididunt officia culpa ullamco anim labore irure esse magna. Mollit id ipsum ullamco Lorem minim est cupidatat occaecat reprehenderit elit ullamco ex reprehenderit excepteur. Deserunt sunt fugiat labore in cillum ex reprehenderit in enim qui. Tempor adipisicing reprehenderit tempor labore aute. Id veniam mollit incididunt duis aute sunt culpa in dolore dolor commodo elit do.\r\nQui officia adipisicing proident sunt esse veniam fugiat fugiat eu ut in consequat cupidatat. Voluptate mollit sit ullamco veniam pariatur. Dolor excepteur ullamco quis eiusmod est esse mollit. Ipsum cillum enim voluptate veniam do exercitation ut mollit sunt nisi aliquip sit. Irure minim nostrud sint ad non voluptate laboris nisi labore id consectetur exercitation velit.\r\n',
              user: '615b6484ba9c525f3b7e3065',
            },
            user: null,
          },
          {
            post: {
              id: '615b6484eb495d03d2b9f2c8',
              title: 'consequat aliquip anim incididunt',
              content:
                'Cupidatat adipisicing nostrud anim irure exercitation sunt cupidatat cillum ut ea. Est ea officia culpa ea nisi in proident aliqua eu qui fugiat adipisicing. Reprehenderit enim magna irure nulla amet nulla ipsum occaecat sit qui. Et elit incididunt laboris elit elit deserunt in esse anim anim eiusmod proident. Non amet excepteur aliqua culpa Lorem enim aliqua elit. Et fugiat ipsum irure duis esse. Minim elit aliquip cupidatat laboris dolor enim id.\r\nEiusmod tempor et incididunt elit occaecat cillum. Cillum est et exercitation ullamco pariatur tempor esse tempor culpa ex minim excepteur incididunt. Sunt duis incididunt incididunt dolore dolore qui Lorem reprehenderit.\r\nIn officia ad ut cupidatat sit pariatur. Dolore esse fugiat ipsum incididunt tempor ut qui occaecat enim. Esse Lorem amet tempor excepteur aute quis reprehenderit non sint dolor. Amet pariatur nisi aliquip ut occaecat labore et exercitation nostrud commodo dolor velit nulla.\r\n',
              user: '615b64846ea2261958562933',
            },
            user: {
              id: '615b64846ea2261958562933',
              username: 'elit',
              name: 'Nichole Sanchez',
              company: 'ENOMEN',
              email: 'nicholesanchez@enomen.com',
            },
          },
        ]);
      });
    })
  );
});
