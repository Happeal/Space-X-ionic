import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LaunchListPage } from '../launch-list/launch-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LaunchListPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
