import { defineStore } from "pinia";

// persist store data locally
function storeUser(user: any){
    window.localStorage.setItem('user', JSON.stringify(user))
} 

function getUser(){
    const user = window.localStorage.getItem('user');
    if(user) {
        try {
            return JSON.parse(user);
        } catch(error) {
            return null;
        } 
    }  
    return null;
} 

// TODO: handle types correctly
// TODO: handle info / token storage  ...
export const useAuthStore = defineStore('auth', {
    state: (): any => ({
        user: getUser()
    }),
    getters:{
        isLoggedIn: (state) => !!state.user 
    }, 
    actions: {
        login(email: string, pwd: string) {
            // simulate API call
            const fakeToken = '12345azerty';
            this.user = { email: 'boris@mail.com', token: fakeToken };
            storeUser(this.user);
        },
        logout() {
            this.user = null;
        } 
    } 
})