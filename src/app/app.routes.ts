import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MinionsComponent } from './minions/minions.component';
import { InfoMinionComponent } from './info-minion/info-minion.component';
import { InfoMinionChildrenComponent } from './info-minion-children/info-minion-children.component';
import { AddMinionComponent } from './add-minion/add-minion.component';
import { EditMinionComponent } from './edit-minion/edit-minion.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'minions',component:MinionsComponent,
        children:[
            {path:'infoMinionChildren/:id',component:InfoMinionChildrenComponent},
        ]
    },
    {path:'infoMinion/:id',component:InfoMinionComponent},
    {path:'editMinion/:id',component:EditMinionComponent},
    {path:'addMinion',component:AddMinionComponent},
    {path:'**',component:NotfoundComponent}
];
