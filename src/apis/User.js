import Api from "./Api";

export default {
    login(form) {
        return Api().post("/auth/login", form);
    },
    register(form) {
        return Api().post("/auth/register", form);
    },
    logout() {
        return Api().post("/auth/logout");
    },
}