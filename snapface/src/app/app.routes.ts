import { Routes } from '@angular/router';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { LandingPage } from './landing-page/landing-page';
import { SingleFaceSnapComponent } from './single-face-snap /single-face-snap';

export const routes: Routes = [
    {path:'facesnap/:id',component:SingleFaceSnapComponent},
    {path:'facesnap', component:FaceSnapList},
    {path:'',component:LandingPage}
];
