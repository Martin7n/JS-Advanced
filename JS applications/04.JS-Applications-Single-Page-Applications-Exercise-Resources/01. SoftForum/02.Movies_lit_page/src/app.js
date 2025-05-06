import page from 'page'

import { renderNav } from './views/navigation.js'
import { mainSectionCatalog} from './views/catalog.js'
import { renderDetails, delMovie } from "./views/details.js"
import { newMovieRender } from './views/addmovie.js'
import { loginTemplate } from './views/login.js'
import authActions from './api/auth.js'
import { renderRegister } from "./views/register.js";


function initial(){

    window.addEventListener('DOMContentLoaded', () => {
        page(renderNav); 
        page('/', mainSectionCatalog);
        page('/catalog', mainSectionCatalog);
        page('/catalog/:id', renderDetails);
        page('/delete/:id', delMovie)
        page('/addmovie', newMovieRender);
        page('/login', loginTemplate);
        page('/logout', authActions.logout);
        page('/register', renderRegister)
      
        page.start();
      });

    
}

initial()
