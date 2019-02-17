import * as firebase from './firebase'
import createStore from './lab';
import createLoginStore from './login'

export default {
    labs: createStore(firebase.db, firebase.auth),
    login: createLoginStore(firebase.auth, firebase.googleProvider)
}