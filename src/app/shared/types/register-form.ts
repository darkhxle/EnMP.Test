import {FormControl} from "@angular/forms";

export interface RegisterForm {
  name: FormControl<string>;
  surname: FormControl<string>;
  email: FormControl<string>;
  phone: FormControl<string>;
  password: FormControl<string>;
  privacyPolicy: FormControl<boolean>;
}
