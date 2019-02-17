import * as firebase from './firebase'
import createStore from './lab';

export default {
    labs: createStore(firebase.db, firebase.auth)
}