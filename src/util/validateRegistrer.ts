import { FormGroup } from "@angular/forms";
import { userModel } from "../models/user-model";

export class validateRegistrer {
    static validate(data: FormGroup): userModel {
      
       let obj = new userModel();

        if (data.controls.name.errors) {
            if (data.controls.name.errors.required) {
                obj.v_name = "Campo de preenchimento obrigatório";
            } else if (data.controls.name.errors.minlength) {
                obj.v_name = "Este campo deve possuir pelo menos 3 caracteres.";
            } else if (data.controls.name.errors.maxlength) {
                obj.v_name = "Este campo não deve possuir mais que 15 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.lastName.errors) {
            if (data.controls.lastName.errors.required) {
                obj.v_lastName = "Campo de preenchimento obrigatório";
            } else if (data.controls.lastName.errors.minlength) {
                obj.v_lastName = "Este campo deve possuir pelo menos 3 caracteres.";
            } else if (data.controls.lastName.errors.maxlength) {
                obj.v_lastName = "Este campo não deve possuir mais que 15 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.comercialAdress.errors) {
            if (data.controls.comercialAdress.errors.required) {
                obj.v_comercialAdress = "Campo de preenchimento obrigatório";
            } else if (data.controls.comercialAdress.errors.minlength) {
                obj.v_comercialAdress = "Este campo deve possuir pelo menos 3 caracteres.";
            } else if (data.controls.comercialAdress.errors.maxlength) {
                obj.v_comercialAdress = "Este campo não deve possuir mais que 20 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.numberComercial.errors) {
            if (data.controls.numberComercial.errors.required) {
                obj.v_numberComercial = "Campo de preenchimento obrigatório";
            } else if (data.controls.numberComercial.errors.minlength) {
                obj.v_numberComercial = "Este campo deve possuir pelo menos 3 caracteres.";
            } else if (data.controls.numberComercial.errors.maxlength) {
                obj.v_numberComercial = "Este campo não deve possuir mais que 15 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.complementAdress.errors) {
            if (data.controls.complementAdress.errors.minlength) {
                obj.v_complementAdress = "Este campo deve possuir pelo menos 3 caracteres.";
            } else if (data.controls.complementAdress.errors.maxlength) {
                obj.v_complementAdress = "Este campo não deve possuir mais que 15 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.cep.errors) {
            if (data.controls.cep.errors.required) {
                obj.v_cep = "Campo Cep preenchimento obrigatório";
            } else if (data.controls.cep.errors.minlength) {
                obj.v_cep = "Campo Cep deve possuir pelo menos 8 caracteres.";
            } else if (data.controls.cep.errors.maxlength) {
                obj.v_cep = "Campo Cep não deve possuir mais que 12 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.city.errors) {
            if (data.controls.city.errors.required) {
                obj.v_city = "Campo cidade preenchimento obrigatório";
            } else if (data.controls.city.errors.minlength) {
                obj.v_city = "Campo cidade deve possuir pelo menos 4 caracteres.";
            } else if (data.controls.city.errors.maxlength) {
                obj.v_city = "Campo cidade não deve possuir mais que 15 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.state.errors) {
            if (data.controls.state.errors.required) {
                obj.v_state = "Campo UF preenchimento obrigatório";
            } else if (data.controls.state.errors.minlength) {
                obj.v_state = "Campo UF deve possuir pelo menos 4 caracteres.";
            } else if (data.controls.state.errors.maxlength) {
                obj.v_state = "Campo UF não deve possuir mais que 15 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.comercialPhone.errors) {
            if (data.controls.comercialPhone.errors.required) {
                obj.v_comercialPhone = "Campo de preenchimento obrigatório";
            } else if (data.controls.comercialPhone.errors.minlength) {
                obj.v_comercialPhone = "Este campo deve possuir pelo menos 10 caracteres.";
            } else if (data.controls.comercialPhone.errors.maxlength) {
                obj.v_comercialPhone = "Este campo não deve possuir mais que 20 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.celPhone.errors) {
            if (data.controls.celPhone.errors.minlength) {
                obj.v_comercialPhone = "Este campo deve possuir pelo menos 10 caracteres.";
            } else if (data.controls.celPhone.errors.maxlength) {
                obj.v_comercialPhone = "Este campo não deve possuir mais que 20 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.email.errors) {
            if (data.controls.email.errors.required) {
                obj.v_email = "Campo de preenchimento obrigatório";
            } else if (data.controls.email.errors.minlength) {
                obj.v_email = "Este campo deve possuir pelo menos 3 caracteres.";
            } else if (data.controls.email.errors.maxlength) {
                obj.v_email = "Este campo não deve possuir mais que 20 caracteres.";
            }
            obj.valid = true;
        }

        return obj;
    }
}