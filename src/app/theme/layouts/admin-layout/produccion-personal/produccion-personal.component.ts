import { Component, OnInit } from '@angular/core';
import { ProduccionPersonalService } from './service/produccion-personal.service';
import { AuthService } from 'src/auth.service'; // Adjust the path if necessary
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs;


interface ProduccionPersonal {
  id_produccion: number;
  rut: string;
  fecha_hora: Date;
  id_producto: number;
  kilogramos_producidos: number;
}

@Component({
  selector: 'app-produccion-personal',
  templateUrl: './produccion-personal.component.html',
  styleUrls: ['./produccion-personal.component.scss']
})
export class ProduccionPersonalComponent implements OnInit {
  produccionPersonal: ProduccionPersonal[] = [];
  currentUserRut: string | null = null;
  navCollapsed: boolean = false; // Initialize navCollapsed
  navCollapsedMob: boolean = false; // Initialize navCollapsedMob
  displayedColumns: string[] = ['id_produccion', 'rut', 'fecha_hora', 'id_producto', 'kilogramos_producidos']; // Define displayedColumns

  constructor(
    private produccionPersonalService: ProduccionPersonalService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUserRut = this.authService.getRutFromToken();
    if (this.currentUserRut) {
      this.loadProduccionPersonal();
    } else {
      console.error('No user RUT found in token');
    }
  }

  navMobClick() {
    if (this.navCollapsedMob && !document.querySelector('app-navigation.pc-sidebar')?.classList.contains('mob-open')) {
      this.navCollapsedMob = !this.navCollapsedMob;
      setTimeout(() => {
        this.navCollapsedMob = !this.navCollapsedMob;
      }, 100);
    } else {
      this.navCollapsedMob = !this.navCollapsedMob;
    }
    if (document.querySelector('app-navigation.pc-sidebar')?.classList.contains('navbar-collapsed')) {
      document.querySelector('app-navigation.pc-sidebar')?.classList.remove('navbar-collapsed');
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }

  closeMenu() {
    if (document.querySelector('app-navigation.pc-sidebar')?.classList.contains('mob-open')) {
      document.querySelector('app-navigation.pc-sidebar')?.classList.remove('mob-open');
    }
  }

  loadProduccionPersonal(): void {
    if (this.currentUserRut) {
      this.produccionPersonalService.getProduccionPersonal(this.currentUserRut).subscribe(data => {
        this.produccionPersonal = data;
      }, error => {
        console.error('Error fetching production data:', error);
      });
    }
  }

  generatePDF() {
    const documentDefinition = {
      content: [
        { text: 'Producción Personal', style: 'header' },
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
  
    pdfMake.createPdf(documentDefinition).download('produccion_personal.pdf');
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
          ...this.produccionPersonal.map(item => [
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