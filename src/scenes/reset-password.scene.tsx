import React from 'react';
import { CenteredLayout } from 'layouts';
import { ResetPasswordContainer } from 'pods/reset-password';

export const ResetPasswordScene: React.FunctionComponent = () => {
  return (
    <CenteredLayout>
      <ResetPasswordContainer />
    </CenteredLayout>
  );
};
