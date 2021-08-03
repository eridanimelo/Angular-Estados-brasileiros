import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Estado } from '../core/models/estado';
import { DialogMapaComponent } from '../dialog-mapa/dialog-mapa.component';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit{
  
  
  @Input() deviceXs: boolean = true;
  topVal = 0;

  estados:Estado[] = [];
  estadosFilter:Estado[] = [];

  constructor(
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    let e01:Estado = new Estado();
    e01.nome='Acre';
    e01.sigla='AC';
    e01.capital='Rio Branco';
    e01.regiao='Norte';
    e01.descricao=`O estado do ${e01.nome} está localizado na região ${e01.regiao} do brasil e sua capital é ${e01.capital}.`;
    e01.img='/assets/bandeiras/Acre.png';

    let e02:Estado = new Estado();
    e02.nome='Alagoas';
    e02.sigla='AL';
    e02.capital='Maceió';
    e02.regiao='Nordeste';
    e02.descricao=`O estado de ${e02.nome} está localizado na região ${e02.regiao} do brasil e sua capital é ${e02.capital}.`;
    e02.img='/assets/bandeiras/Alagoas.png';

    let e03:Estado = new Estado();
    e03.nome='Amapá';
    e03.sigla='AP';
    e03.capital='Macapá';
    e03.regiao='Norte';
    e03.descricao=`O estado do ${e03.nome} está localizado na região ${e03.regiao} do brasil e sua capital é ${e03.capital}.`;
    e03.img='/assets/bandeiras/Amapa.png';

    let e04:Estado = new Estado();
    e04.nome='Amazonas';
    e04.sigla='AM';
    e04.capital='Manaus';
    e04.regiao='Norte';
    e04.descricao=`O estado de ${e04.nome} está localizado na região ${e04.regiao} do brasil e sua capital é ${e04.capital}.`;
    e04.img='/assets/bandeiras/Amazonas.png';

    let e05:Estado = new Estado();
    e05.nome='Bahia';
    e05.sigla='BA';
    e05.capital='Salvador';
    e05.regiao='Nordeste';
    e05.descricao=`O estado da ${e05.nome} está localizado na região ${e05.regiao} do brasil e sua capital é ${e05.capital}.`;
    e05.img='/assets/bandeiras/Bahia.png';

    let e06:Estado = new Estado();
    e06.nome='Ceará';
    e06.sigla='CE';
    e06.capital='Fortaleza';
    e06.regiao='Nordeste';
    e06.descricao=`O estado de ${e06.nome} está localizado na região ${e06.regiao} do brasil e sua capital é ${e06.capital}.`;
    e06.img='/assets/bandeiras/Ceara.png';

    let e07:Estado = new Estado();
    e07.nome='Distrito Federal';
    e07.sigla='DF';
    e07.capital='Brasília';
    e07.regiao='Centro-Oeste';
    e07.descricao=`O estado do ${e07.nome} está localizado na região ${e07.regiao} do brasil e sua capital é ${e07.capital}. Braília é a capital do Brasil`;
    e07.img='/assets/bandeiras/Brasilia.png';

    let e08:Estado = new Estado();
    e08.nome='Espírito Santo';
    e08.sigla='ES';
    e08.regiao='Sudeste';
    e08.capital='Vitória';
    e08.descricao=`O estado do ${e08.nome} está localizado na região ${e08.regiao} do brasil e sua capital é ${e08.capital}.`;
    e08.img='/assets/bandeiras/espiritosanto.png';

    let e09:Estado = new Estado();
    e09.nome='Goiás';
    e09.sigla='GO';
    e09.capital='Goiânia';
    e09.capital='Centro-Oeste';
    e09.descricao=`O estado do ${e01.nome} está localizado na região ${e09.regiao} do brasil e sua capital é ${e09.capital}.`;
    e09.img='/assets/bandeiras/Goias.png';

    let e10:Estado = new Estado();
    e10.nome='Maranhão';
    e10.sigla='MA';
    e10.capital='São Luís';
    e10.regiao='Nordeste';
    e10.descricao=`O estado do ${e10.nome} está localizado na região ${e10.regiao} do brasil e sua capital é ${e10.capital}.`;
    e10.img='/assets/bandeiras/Maranhao.png';

    let e11:Estado = new Estado();
    e11.nome='Mato Grosso';
    e11.sigla='MT';
    e11.capital='Cuiabá';
    e11.regiao='Centro-Oeste';
    e11.descricao=`O estado do ${e11.nome} está localizado na região ${e11.regiao} do brasil e sua capital é ${e11.capital}.`;
    e11.img='/assets/bandeiras/MatoGrosso.png';

    let e12:Estado = new Estado();
    e12.nome='Mato Grosso do Sul';
    e12.sigla='MS';
    e12.capital='Campo Grande';
    e12.regiao='Centro-Oeste';
    e12.descricao=`O estado do ${e12.nome} está localizado na região ${e12.regiao} do brasil e sua capital é ${e12.capital}.`;
    e12.img='/assets/bandeiras/MatoGrossoDoSul.png';

    let e13:Estado = new Estado();
    e13.nome='Minas Gerais';
    e13.sigla='MG';
    e13.capital='Belo Horizonte';
    e13.regiao='Sudeste';
    e13.descricao=`O estado de ${e13.nome} está localizado na região ${e13.regiao} do brasil e sua capital é ${e13.capital}.`;
    e13.img='/assets/bandeiras/MinasGerais.png';

    let e14:Estado = new Estado();
    e14.nome='Pará';
    e14.sigla='PA';
    e14.capital='Belém';
    e14.regiao='Norte';
    e14.descricao=`O estado do ${e14.nome} está localizado na região ${e14.regiao} do brasil e sua capital é ${e14.capital}.`;
    e14.img='/assets/bandeiras/Para.png';

    let e15:Estado = new Estado();
    e15.nome='Paraíba';
    e15.sigla='PB';
    e15.capital='João Pessoa';
    e15.descricao=`O estado da ${e15.nome} está localizado na região ${e15.regiao} do brasil e sua capital é ${e15.capital}.`;
    e15.img='/assets/bandeiras/Paraiba.png';

    let e16:Estado = new Estado();
    e16.nome='Paraná';
    e16.sigla='PR';
    e16.capital='Curitiba';
    e16.regiao='Sul';
    e16.descricao=`O estado do ${e16.nome} está localizado na região ${e16.regiao} do brasil e sua capital é ${e16.capital}.`;
    e16.img='/assets/bandeiras/Parana.png';

    let e17:Estado = new Estado();
    e17.nome='Pernambuco';
    e17.sigla='PE';
    e17.capital='Recife';
    e17.regiao='Nordeste';
    e17.descricao=`O estado de ${e17.nome} está localizado na região ${e17.regiao} do brasil e sua capital é ${e17.capital}.`;
    e17.img='/assets/bandeiras/Pernambuco.png';

    let e18:Estado = new Estado();
    e18.nome='Piauí';
    e18.sigla='PI';
    e18.capital='Teresina';
    e18.regiao='Nordeste';
    e18.descricao=`O estado do ${e18.nome} está localizado na região ${e18.regiao} do brasil e sua capital é ${e18.capital}.`;
    e18.img='/assets/bandeiras/Piaui.png';

    let e19:Estado = new Estado();
    e19.nome='Rio de Janeiro';
    e19.sigla='RJ';
    e19.capital='Rio de Janeiro';
    e19.regiao='Sudeste';
    e19.descricao=`O estado do ${e19.nome} está localizado na região ${e19.regiao} do brasil e sua capital é ${e19.capital}.`;
    e19.img='/assets/bandeiras/RioDeJaneiro.png';

    let e20:Estado = new Estado();
    e20.nome='Rio Grande do Norte';
    e20.sigla='RN';
    e20.capital='Natal';
    e20.regiao='Nordeste';
    e20.descricao=`O estado do ${e20.nome} está localizado na região ${e20.regiao} do brasil e sua capital é ${e20.capital}.`;
    e20.img='/assets/bandeiras/RioGrandeDoNorte.png';

    let e21:Estado = new Estado();
    e21.nome='Rio Grande do Sul';
    e21.sigla='RS';
    e21.capital='Porto Alegre';
    e21.regiao='Sul';
    e21.descricao=`O estado do ${e21.nome} está localizado na região ${e21.regiao} do brasil e sua capital é ${e21.capital}.`;
    e21.img='/assets/bandeiras/RioGrandeDoSul.png';

    let e22:Estado = new Estado();
    e22.nome='Rondônia';
    e22.sigla='RO';
    e22.capital='Porto Velho';
    e22.regiao='Norte';
    e22.descricao=`O estado de ${e22.nome} está localizado na região ${e22.regiao} do brasil e sua capital é ${e22.capital}.`;
    e22.img='/assets/bandeiras/Rondonia.png';

    let e23:Estado = new Estado();
    e23.nome='Roraima';
    e23.sigla='RR';
    e23.capital='Boa Vista';
    e23.regiao='Norte';
    e23.descricao=`O estado de ${e23.nome} está localizado na região ${e23.regiao} do brasil e sua capital é ${e23.capital}.`;
    e23.img='/assets/bandeiras/Roraima.png';

    let e24:Estado = new Estado();
    e24.nome='Santa Catarina';
    e24.sigla='SC';
    e24.capital='Florianópolis';
    e24.regiao='Sul';
    e24.descricao=`O estado de ${e24.nome} está localizado na região ${e24.regiao} do brasil e sua capital é ${e24.capital}.`;
    e24.img='/assets/bandeiras/SantaCatarina.png';

    let e25:Estado = new Estado();
    e25.nome='São Paulo';
    e25.sigla='SP';
    e25.capital='São Paulo';
    e25.regiao='Sudeste';
    e25.descricao=`O estado de ${e25.nome} está localizado na região ${e25.regiao} do brasil e sua capital é ${e25.capital}.`;
    e25.img='/assets/bandeiras/SaoPaulo.png';

    let e26:Estado = new Estado();
    e26.nome='Sergipe';
    e26.sigla='SE';
    e26.capital='Aracaju';
    e26.regiao='Nordeste';
    e26.descricao=`O estado do ${e26.nome} está localizado na região ${e26.regiao} do brasil e sua capital é ${e26.capital}.`;
    e26.img='/assets/bandeiras/Sergipe.png';

    let e27:Estado = new Estado();
    e27.nome='Tocantins';
    e27.sigla='TO';
    e27.capital='Palmas';
    e27.regiao='Norte';
    e27.descricao=`O estado do ${e27.nome} está localizado na região ${e27.regiao} do brasil e sua capital é ${e27.capital}.`;
    e27.img='/assets/bandeiras/Tocantins.png';


    this.estados.push(e01);
    this.estados.push(e02);
    this.estados.push(e03);
    this.estados.push(e04);
    this.estados.push(e05);
    this.estados.push(e06);
    this.estados.push(e07);
    this.estados.push(e08);
    this.estados.push(e09);
    this.estados.push(e10);
    this.estados.push(e11);
    this.estados.push(e12);
    this.estados.push(e13);
    this.estados.push(e14);
    this.estados.push(e15);
    this.estados.push(e16);
    this.estados.push(e17);
    this.estados.push(e18);
    this.estados.push(e19);
    this.estados.push(e20);
    this.estados.push(e21);
    this.estados.push(e22);
    this.estados.push(e23);
    this.estados.push(e24);
    this.estados.push(e25);
    this.estados.push(e26);
    this.estados.push(e27);

    this.estadosFilter = this.estados;

  }

  exibirNorte(val:string){
    this.estadosFilter = this.estados.filter(obj => obj.regiao == val);
  }

  exibirTudo(){
    this.estadosFilter = this.estados;
  }

  onScroll(e:any) {
    let scrollXs = this.deviceXs ? 55 : 73;
    if (e.srcElement.scrollTop < scrollXs) {
      this.topVal = e.srcElement.scrollTop;
    } else {
      this.topVal = scrollXs;
    }
  }
  sideBarScroll() {
    let e = this.deviceXs ? 160 : 130;
    return e - this.topVal;
  }

  openDialog(obj?:Estado): void {

    const dialogRef = this.dialog.open(DialogMapaComponent, {
      data: {
        sigla: obj?.sigla,
        title: obj?.sigla + ' - '+obj?.nome,
        smart: this.deviceXs
      },
      minWidth:'300px',
      maxHeight: !this.deviceXs? 'auto' : '400px'
    });

  }


}