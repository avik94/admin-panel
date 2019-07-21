import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
// my-component
  
import { EventAdminComponent } from './event-admin/event-admin.component';
import { EventSetupComponent } from './event-setup/event-setup.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { TeamComponent } from './team/team.component';
import { LocationComponent } from './location/location.component';
import { ParticipantComponent } from './participant/participant.component';
import { QrCreationComponent } from './qr-creation/qr-creation.component';
import { ResetEventComponent } from './reset-event/reset-event.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { InvitationComponent } from './invitation/invitation.component';
import { CategoryComponent } from './category/category.component';
import { DifficultyLevelComponent } from './difficulty-level/difficulty-level.component';
import { GameQuestionComponent } from './game-question/game-question.component';

// end


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [

    // my-routes
    {
      path: 'event-admin',
      component: EventAdminComponent,
    },
    {
      path: 'event-setup',
      component: EventSetupComponent,
    },
    {
      path: 'sponsor',
      component: SponsorComponent,
    },
    {
      path: 'team',
      component: TeamComponent,
    },
    {
      path: 'location',
      component: LocationComponent,
    },
    {
      path: 'participant',
      component: ParticipantComponent,
    },
    {
      path: 'qr-creation',
      component: QrCreationComponent,
    },
    {
      path: 'reset-event',
      component: ResetEventComponent,
    },
    {
      path: 'statistics',
      component: StatisticsComponent,
    },
    {
      path: 'app-invitation',
      component: InvitationComponent,
    },
    {
      path: 'question/category',
      component: CategoryComponent,
    },   
    {
      path: 'question/difficulty-level',
      component: DifficultyLevelComponent,
    },  
    {
      path: 'question/game-question',
      component: GameQuestionComponent,
    },  

    // end
    
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: '',
      redirectTo: 'event-admin',
      pathMatch: 'full',
    },
    // {
    //   path: '**',
    //   component: NotFoundComponent,
    // },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
