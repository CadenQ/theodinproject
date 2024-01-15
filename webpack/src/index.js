import _ from 'lodash';
import myName from './myName';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by the lodash script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.textContent = myName("Caden");

    return element;
}

document.body.appendChild(component());