import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const passwordIsEqual = ({ value, values }) => {
  const validationResult = {
    type: 'PASSWORD_NOT_EQUAL',
    succeeded: value === values.newPassword,
    message: '¡Ojo! Debe ser igual que tu contraseña',
  };
  return validationResult;
};

const validationSchema: ValidationSchema = {
  field: {
    oldPassword: [Validators.required],
    newPassword: [Validators.required],
    repeatPassword: [Validators.required, passwordIsEqual],
  },
};

export const formValidation = createFormikValidation(validationSchema);
