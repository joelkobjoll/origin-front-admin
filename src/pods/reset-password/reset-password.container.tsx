import { literals } from 'core/i18n';
import { resetPassword } from './reset-password.api';
import { ResetPassword } from './reset-password.vm';
import { ResetPaswordComponent } from './reset-password.component';
import { trackPromise } from 'react-promise-tracker';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { routes } from 'core/router';

export const ResetPasswordContainer: React.FunctionComponent = () => {
  const history = useHistory();

  const resetPasswordSucceded = (isValid: boolean): void => {
    if (isValid) {
      history.push(routes.submoduleList);
    }
  };

  const handleResetPassword = (reset: ResetPassword) => {
    trackPromise(
      resetPassword(reset.oldPassword, reset.newPassword, reset.repeatPassword)
    ).then(resetPasswordSucceded);
  };

  return <ResetPaswordComponent onResetPassword={handleResetPassword} />;
};
