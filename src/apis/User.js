import Api from "./Api";

export default {
    login(form) {
        return Api().get("/login", form);
    },
}