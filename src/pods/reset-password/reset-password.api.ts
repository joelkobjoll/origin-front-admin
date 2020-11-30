export const resetPassword = (
  oldPassword: string,
  newPassword: string,
  repeatPassword: string
): Promise<boolean> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(newPassword === repeatPassword && oldPassword === 'test');
    }, 1000);
  });
