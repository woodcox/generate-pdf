import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';
import PdfmeGenerator from './pdfgen.jsx';
import yourName from './yourName.jsx';
import yourPartner from './yourPartner.jsx';

render(
    () => (
        <Router>
            <Route path="/" component={PdfmeGenerator} /> {/* Define the home page route */}
            <Route path="/name" component={yourName} /> 
            <Route path="/partner" component={yourPartner} />
        </Router>
    ), 
    document.getElementById('pdfapp')
);
