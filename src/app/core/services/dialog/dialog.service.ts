import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from 'src/app/core/models/DialogData';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) { }

  openDialogCustom(data: DialogData){
    this.matDialog.open(DialogComponent, { data } );
  }
}
