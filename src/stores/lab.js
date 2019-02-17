import { extendObservable, action } from 'mobx';

function Lab(name: '') {
    extendObservable(this, {
        name,
        code: '',
        sprites: []
    });
}

const createStore = (db, auth) => {
    function LabStore(db, auth) {
        this.ref = db.ref("labs");

        extendObservable(this, {
            currentLab: new Lab(),
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