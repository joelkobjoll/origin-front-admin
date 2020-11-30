import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';
import { TextFieldComponent } from 'common/components';
import { ResetPassword, createEmptyResetPassword } from '../reset-password.vm';
import { formValidation } from '../reset-password.validation';
import * as classes from './reset-password-form.styles';
import { literals } from 'core/i18n';

interface Props {
  onResetPassword: (reset: ResetPassword) => void;
}

export const ResetPasswordFormComponent: React.FunctionComponent<Props> = props => {
  const { onResetPassword } = props;
  return (
    <Formik
      onSubmit={onResetPassword}
      initialValues={createEmptyResetPassword()}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent
            name="oldPassword"
            label={`${literals.components.fields.oldPassword} *`}
            type="password"
            variant="outlined"
          />
          <TextFieldComponent
            name="newPassword"
            label={`${literals.components.fields.newPassword} *`}
            type="password"
            variant="outlined"
          />
          <TextFieldComponent
            name="repeatPassword"
            label={`${literals.components.fields.repeatPassword} *`}
            type="password"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Change Password
          </Button>
        </Form>
      )}
    </Formik>
  );
};
