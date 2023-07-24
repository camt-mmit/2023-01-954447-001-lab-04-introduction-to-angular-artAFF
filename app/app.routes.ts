import { Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyFriendComponent } from './my-friend/my-friend.component';
import { StatusWebComponent } from './status-web/status-web.component';

export const routes: Routes = [
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'my-friend', component: MyFriendComponent },
  { path: 'status-web', component: StatusWebComponent },
];
