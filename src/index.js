import './style.css';
import AppHeader from './views/AppHeader';
import AppFooter from './views/AppFooter';
import AppMain from './views/AppMain';

import AppHeaderController from './controllers/AppHeaderController';

AppHeader.render();
AppMain.render();
AppFooter.render();

AppHeaderController.addInputHandler();
