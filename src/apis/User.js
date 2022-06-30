import Api from "./Api";

export default {
    login(form) {
        return Api().get("/auth/login", form);
    },
    logout() {
        return Api().get("/auth/logout");
    },
}