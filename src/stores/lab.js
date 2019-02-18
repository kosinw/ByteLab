import { extendObservable, action } from 'mobx';

function Lab(name: '', code: '') {
    extendObservable(this, {
        name,
        code,
        sprites: []
    });
}

const defaultCode = `
// here put your initialization code
init = () => {

};

// here put your drawing logic
draw = () => {

};

// here put your update logic
update = () => {

};
`;

const createStore = (db, auth) => {
    function LabStore(db, auth) {
        this.ref = db.ref("labs");
        this.auth = auth;

        extendObservable(this, {
            currentLab: new Lab('', defaultCode),
            labs: [],
            currentUser: null,
            updateStore: () => {
                localStorage.setItem('cached_lab', JSON.stringify(this.currentLab));
            },
        });

        if (!!auth.currentUser) {
            this.currentUser = auth.currentUser;
        }

        if (!!localStorage.getItem('cached_lab')) {
            this.currentLab = JSON.parse(localStorage.getItem('cached_lab'));
        }
    }    

    return new LabStore(db, auth);
}

export default createStore;