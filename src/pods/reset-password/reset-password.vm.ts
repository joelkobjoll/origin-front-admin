export interface ResetPassword {
  oldPassword: string;
  newPassword: string;
  repeatPassword: string;
}

export const createEmptyResetPassword = (): ResetPassword => ({
  oldPassword: '',
  newPassword: '',
  repeatPassword: '',
});
