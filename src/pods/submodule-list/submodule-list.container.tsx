import React from 'react';
import { SumoduleListComponent } from './submodule-list.component';
import { DashboardItemProps } from 'common/components';
import { routes } from 'core/router';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GroupIcon from '@material-ui/icons/Group';
import LockIcon from '@material-ui/icons/Lock';

export const SubmoduleListContainer: React.FunctionComponent = () => {
  const items: DashboardItemProps[] = React.useMemo(
    (): DashboardItemProps[] => [
      {
        title: 'Proyectos',
        linkTo: routes.projects,
        icon: AccountBalanceIcon,
      },
      {
        title: 'Empleados',
        linkTo: routes.employees,
        icon: GroupIcon,
      },
      {
        title: 'Cambiar clave',
        linkTo: routes.resetPassword,
        icon: LockIcon,
      },
    ],
    []
  );

  return <SumoduleListComponent items={items} />;
};
