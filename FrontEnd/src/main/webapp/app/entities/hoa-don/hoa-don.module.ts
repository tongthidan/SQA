import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { HoaDonComponent } from './list/hoa-don.component';
import { HoaDonDetailComponent } from './detail/hoa-don-detail.component';
import { HoaDonUpdateComponent } from './update/hoa-don-update.component';
import { HoaDonDeleteDialogComponent } from './delete/hoa-don-delete-dialog.component';
import { HoaDonRoutingModule } from './route/hoa-don-routing.module';
import {CapNhatNuocComponent} from './cap-nhat-nuoc/cap-nhat-nuoc.component';

@NgModule({
  imports: [SharedModule,  HoaDonRoutingModule],
  declarations: [HoaDonComponent, HoaDonDetailComponent, HoaDonUpdateComponent, HoaDonDeleteDialogComponent, CapNhatNuocComponent],
  entryComponents: [HoaDonDeleteDialogComponent,HoaDonComponent],
})
export class HoaDonModule {}
