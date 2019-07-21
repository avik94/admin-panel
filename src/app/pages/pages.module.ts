import { NgModule } from '@angular/core';
import { NbMenuModule, NbInputModule, NbDatepickerModule, NbSelectModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';
// my component
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
import { SplashScreenComponent } from './event-admin/splash-screen/splash-screen.component';
import { UploadPhotoComponent } from './event-admin/upload-photo/upload-photo.component';
import { MessageCenterComponent } from './event-admin/message-center/message-center.component';
import { SelectEventComponent } from './event-admin/select-event/select-event.component';
import { CreateEventComponent } from './event-setup/create-event/create-event.component';
import { EditEventDetailsComponent } from './event-setup/edit-event-details/edit-event-details.component';
import { EditEventNameComponent } from './event-setup/edit-event-name/edit-event-name.component';
import { CreateSponsorComponent } from './sponsor/create-sponsor/create-sponsor.component';
import { UpdateSponsorComponent } from './sponsor/update-sponsor/update-sponsor.component';
import { SponsorSummaryComponent } from './sponsor/sponsor-summary/sponsor-summary.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

// end

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    // my use module
    NbCardModule,
    NbTabsetModule,
    NbInputModule,
    NbButtonModule,
    NbDatepickerModule,    
    NbSelectModule,
    Ng2SmartTableModule,
    // end
  ],
  declarations: [
    PagesComponent,
    EventAdminComponent,
    EventSetupComponent,
    SponsorComponent,
    TeamComponent,
    LocationComponent,
    ParticipantComponent,
    QrCreationComponent,
    ResetEventComponent,
    StatisticsComponent,
    InvitationComponent,
    CategoryComponent,
    DifficultyLevelComponent,
    GameQuestionComponent,
    SplashScreenComponent,
    UploadPhotoComponent,
    MessageCenterComponent,
    SelectEventComponent,
    CreateEventComponent,
    EditEventDetailsComponent,
    EditEventNameComponent,
    CreateSponsorComponent,
    UpdateSponsorComponent,
    SponsorSummaryComponent,
  ],
})
export class PagesModule {
}
