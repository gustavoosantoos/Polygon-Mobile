import { Component } from '@angular/core';

import { SairPage } from '../sair/sair';
import { HistoricoPage } from '../historico/historico';
import { HomePage } from '../home/home';
import {Platform} from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HistoricoPage;
  tab3Root = SairPage;

  constructor(private platform: Platform) {

  }

  exitApp() {
    console.log("Saindo da aplicação.");
    this.platform.exitApp();
  }
}
