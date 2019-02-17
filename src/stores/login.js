import { extendObservable, action, computed } from 'mobx';

const createStore = (auth, googleProvider) => {
    function Store() {
        this.auth = auth;
        this.googleProvider = googleProvider;

        auth.onAuthStateChanged(user => {            
            this.currentUser = user;
        });

        extendObservable(this, {
            currentUser: null,
            signOut: action(() => this.auth.signOut()),
            signInWithGoogle: action(() => this.auth.signInWithPopup(this.googleProvider))
        });
    }

    return new Store();
}

export default createStore;