import { Component } from '@angular/core';

import { SairPage } from '../sair/sair';
import { HistoricoPage } from '../historico/historico';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HistoricoPage;
  tab3Root = SairPage;

  constructor() {

  }
}
