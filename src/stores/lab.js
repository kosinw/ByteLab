import { extendObservable, action } from 'mobx';

function Lab(name: '', code: '') {
    extendObservable(this, {
        name,
        code,
        sprites: []
    });
}

const defaultCode = `
// ▄▄▄▄ ▓██   ██▓▄▄▄█████▓▓█████  ██▓    ▄▄▄       ▄▄▄▄   
// ▓█████▄▒██  ██▒▓  ██▒ ▓▒▓█   ▀ ▓██▒   ▒████▄    ▓█████▄ 
// ▒██▒ ▄██▒██ ██░▒ ▓██░ ▒░▒███   ▒██░   ▒██  ▀█▄  ▒██▒ ▄██
// ▒██░█▀  ░ ▐██▓░░ ▓██▓ ░ ▒▓█  ▄ ▒██░   ░██▄▄▄▄██ ▒██░█▀  
// ░▓█  ▀█▓░ ██▒▓░  ▒██▒ ░ ░▒████▒░██████▒▓█   ▓██▒░▓█  ▀█▓
// ░▒▓███▀▒ ██▒▒▒   ▒ ░░   ░░ ▒░ ░░ ▒░▓  ░▒▒   ▓▒█░░▒▓███▀▒
// ▒░▒   ░▓██ ░▒░     ░     ░ ░  ░░ ░ ▒  ░ ▒   ▒▒ ░▒░▒   ░ 
//  ░    ░▒ ▒ ░░    ░         ░     ░ ░    ░   ▒    ░    ░ 
// ░     ░ ░                 ░  ░    ░  ░     ░  ░ ░      
//       ░░ ░                                            ░

// here put your initialization code
let init = () => {

};

// here put your drawing logic
let draw = () => {

};

// here put your update logic
let update = () => {

};
`;

const createStore = (db, auth) => {
    function LabStore(db, auth) {
        this.ref = db.ref("labs");

        extendObservable(this, {
            currentLab: new Lab('', defaultCode),
            labs: [],
            currentUser: null,
            addLab: action(name => {
                if (!!this.currentUser) {
                    // do adding store code
                } else {
                }
            })
        });

        if (!!auth.currentUser) {
            this.currentUser = auth.currentUser;
        }
    }

    return new LabStore(db, auth);
}

export default createStore;