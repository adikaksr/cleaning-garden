'use strict'
const User = use("App/Models/User");
const { validateAll } = use("Validator");

class UserController {
    daftarView({ view }) {
        return view.render("daftar");
    }
    
    async daftar({ request, response, session, auth }) {
        const rules = {
          name: "required|string",
          email: "string",
          password: "required",
          no_hp: "required|integer",
          domisili: "required|string"
        };
        const data = request.post();
        const validation = await validateAll(data, rules);
        if (validation.fails()) {
          // true succes jika error maka ia akan mereturn error
          session // bawaan adonis memakai session untuk cek validasi data input
            .withErrors(validation.messages())
            .flashAll();
          return response.redirect("back"); // untuk ke halamannya
        }
    
        const user = new User();
        user.name = data.name;
        user.email = data.email;
        user.password = data.password;
        user.no_hp = data.no_hp;
        user.domisili = data.domisili;
        await user.save();
        await auth.attempt(data.email, data.password);
    
        return response.redirect("/", true);
    }

    dashboard({ view }) {
        return view.render("home");
    }

    async masuk({ request, response, auth, session }) {
        const data = request.post();
        const rules = {
          email: "required",
          password: "required",
        };
        const validation = await validateAll(data, rules);
        if (validation.fails()) {
          // true susces jika error maka ia akan mereturn error
          session // bawaan adonis memakai session untuk cek validasi data input
            .withErrors(validation.messages())
            .flashAll();
          return response.redirect("back"); // untuk ke halamannya
        }
    
        const { email, password } = request.only(["email", "password"]);
        const token = await auth.attempt(email, password);
    
        return response.redirect("/", true);
      }

      masukView({ view }) {
        return view.render("masuk");
    }

    async destroy({ auth, response }) {
        await auth.logout();
        return response.redirect("back");
      }

}

module.exports = UserController
