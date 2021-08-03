import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-mapa',
  templateUrl: './dialog-mapa.component.html',
  styleUrls: ['./dialog-mapa.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogMapaComponent implements OnInit {

  sigla:string;
  title:string;

  smart:boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogMapaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
  ) { 
    this.sigla = '';
    this.title = '';
    this.smart = false;
  }

  onNoClick(val?:boolean): void {
    this.dialogRef.close(val);
  }

  ngOnInit(): void {
    this.sigla = this.data['sigla'];
    this.title = this.data['title'];

    this.smart = this.data['smart'];
  }

}
