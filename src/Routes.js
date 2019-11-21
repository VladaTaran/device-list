import {
  Home,
  NoMatch,
  SubPage,
  TestPage
} from './pages';

const Routes = [
  {
    path: '/',
    exact: true,
    main: Home,
    label: 'Home',
    icon: 'home',
    routes: []
  },
  {
    path: '/page2',
    main: Home,
    label: 'Group Of Pages',
    icon: 'global',
    routes: [
      {
        path: '/page2/sub',
        label: 'SubPage',
        exact: true,
        main: SubPage,
      }
    ]
  },
  {
    path: '/test',
    label: 'Test Page',
    main: TestPage,
    routes: []
  },
  {
    main: NoMatch,
    label: 'Not found',
    routes: []
  },
];

export default Routes;
