import React from 'react';
import { ContainerComponent, ResetPasswordFormComponent } from './components';
import { ResetPassword } from './reset-password.vm';

interface Props {
  onResetPassword: (reset: ResetPassword) => void;
}

export const ResetPaswordComponent: React.FunctionComponent<Props> = ({
  onResetPassword,
}) => {
  return (
    <ContainerComponent title="Reset Password">
      <ResetPasswordFormComponent onResetPassword={onResetPassword} />
    </ContainerComponent>
  );
};
