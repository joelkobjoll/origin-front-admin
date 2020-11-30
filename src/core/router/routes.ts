import { generatePath } from 'react-router-dom';

interface BaseRoutes {
  editEmployee: string;
  editProject: string;
  employees: string;
  login: string;
  projects: string;
  resetPassword: string;
  root: string;
  submoduleList: string;
}

const baseRoutes: BaseRoutes = {
  editEmployee: '/employees/:id',
  editProject: '/projects/:id',
  employees: '/employees',
  login: '/login',
  projects: '/projects',
  resetPassword: '/reset-password',
  root: '/',
  submoduleList: '/submodule-list',
};

interface Routes extends Omit<BaseRoutes, 'editProject' | 'editEmployee'> {
  editProject: (id?: string) => string;
  editEmployee: (id?: string) => string;
}

export const routes: Routes = {
  ...baseRoutes,
  editProject: id =>
    id ? generatePath(baseRoutes.editProject, { id }) : baseRoutes.editProject,
  editEmployee: id =>
    id
      ? generatePath(baseRoutes.editEmployee, { id })
      : baseRoutes.editEmployee,
};
