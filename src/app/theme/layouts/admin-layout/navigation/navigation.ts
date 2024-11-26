export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
  roles?: number[]; // Añadir roles
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Menú Principal',
        type: 'item',
        classes: 'nav-item',
        url: '//dashboard/default',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'gestionUsuarios',
    title: 'Gestion de Usuarios',
    type: 'group',
    icon: 'icon-navigation',
    roles: [1], // Añadir roles
    children: [
      {
        id: 'listaUsuarios',
        title: 'Lista de Usuarios',
        type: 'item',
        classes: 'nav-item',
        url: '/user-table',
        icon: 'user',
        roles: [1, 2], // Añadir roles
        breadcrumbs: false
      },
    ]
  },
  {
    id: 'gestionProductos',
    title: 'Gestion de Productos',
    type: 'group',
    icon: 'icon-navigation',
    roles: [1],
    children: [
      {
        id: 'listaProductos',
        title: 'Lista de Productos',
        type: 'item',
        classes: 'nav-item',
        url: '/productos-table',
        icon: 'user',
        roles: [1],
        breadcrumbs: false
      },
    ]
  },
  {
    id: 'gestionInventario',
    title: 'Gestion de Inventario',
    type: 'group',
    icon: 'icon-navigation',
    roles: [1],
    children: [
      {
        id: 'gestionInventario',
        title: 'Gestion de Inventario',
        type: 'item',
        classes: 'nav-item',
        url: '/inventario-table',
        roles: [1],
        icon: 'user',
        breadcrumbs: false
      },
    ]
  },
  {
    id: 'utilities',
    title: 'Informes',
    type: 'group',
    icon: 'icon-navigation',
    roles: [1],
    children: [
      {
        id: 'produccion',
        title: 'Producción',
        type: 'item',
        classes: 'nav-item',
        roles: [1],
        url: '/produccion',
        icon: 'profile'
      },
    ]
  },
  {
    id: 'gestionUSUARIOreal',
    title: 'Modificar mis Datos',
    type: 'group',
    icon: 'icon-navigation',
    roles: [1,2],
    children: [
      {
        id: 'gestionUSUARIOreal',
        title: 'Modificar mis Datos',
        type: 'item',
        classes: 'nav-item',
        url: '/consultar-editar-usuario',
        roles: [1, 2],
        icon: 'user',
        breadcrumbs: false
      },
      {
        id: 'produccion-personal',
        title: 'Consultar Mi Producción',
        type: 'item',
        classes: 'nav-item',
        url: '/produccion-personal',
        roles: [1, 2],
        icon: 'user',
        breadcrumbs: false
      },
    ]
  },
];
