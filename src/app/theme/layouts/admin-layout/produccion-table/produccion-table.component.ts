// File: src/app/produccion-table/produccion-table.component.ts
import { Component, OnInit } from '@angular/core';
import { ProduccionService, Produccion } from './service/produccion.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

// Correctly initialize pdfMake.vfs
pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs;

@Component({
  selector: 'app-produccion-table',
  templateUrl: './produccion-table.component.html',
  styleUrls: ['./produccion-table.component.scss']
})
export class ProduccionTableComponent implements OnInit {
  produccion: Produccion[] = [];
  navCollapsed: boolean = false; // Initialize navCollapsed
  navCollapsedMob: boolean = false; // Initialize navCollapsedMob
  displayedColumns: string[] = ['id_produccion', 'rut', 'fecha_hora', 'id_producto', 'kilogramos_producidos']; // Define displayedColumns

  constructor(private produccionService: ProduccionService) {}

  ngOnInit(): void {
    this.produccionService.getProduccion().subscribe(
      data => {
        this.produccion = data;
        console.log('Produccion data:', this.produccion); // Debugging line
      },
      error => {
        console.error('Error fetching produccion data:', error); // Debugging line
      }
    );
  }

  navMobClick() {
    this.navCollapsedMob = !this.navCollapsedMob;
  }

  generatePDF() {
    const documentDefinition = {
      content: [
        { text: 'Producción', style: 'header' },
        this.getTableDefinition()
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      }
    };
  
    pdfMake.createPdf(documentDefinition).download('produccion.pdf');
  }

  getTableDefinition() {
    return {
      table: {
        headerRows: 1,
        widths: ['*', '*', '*', '*', '*'],
        body: [
          [
            { text: 'ID Producción', style: 'tableHeader' },
            { text: 'RUT', style: 'tableHeader' },
            { text: 'Fecha y Hora', style: 'tableHeader' },
            { text: 'ID Producto', style: 'tableHeader' },
            { text: 'Kilogramos Producidos', style: 'tableHeader' }
          ],
          ...this.produccion.map(item => [
            item.id_produccion,
            item.rut,
            new Date(item.fecha_hora).toLocaleString(),
            item.id_producto,
            item.kilogramos_producidos
          ])
        ]
      }
    };
  }
}