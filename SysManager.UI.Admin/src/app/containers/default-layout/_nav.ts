import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name:'Modulos',
    title:true
  },
  {
    name:'Produto',
    url:'/product',
    iconComponent:{name:'cil-inbox'},
    children:[
      {
        iconComponent:{name:'cil-Menu'},
        name:'Meus Produtos',
        url: '/product/product'
      },
      {
        iconComponent:{name:'cil-Spreadsheet'},
        name:'Novo Produto',
        url: '/product/maintenance'

      }
    ]
  },
  {
    name:'Cad. Auxiliares',
    title:true
  },
  {
    name:'Unidade de Medida',
    url:'/unity',
    iconComponent:{name:'cil-inbox'},
    children:[
      {
        iconComponent:{name:'cil-Menu'},
        name:'Minhas Unidades',
        url: '/unity/unity'
      },
      {
        iconComponent:{name:'cil-Spreadsheet'},
        name:'Nova Unidade',
        url: '/unity/maintenance'

      }
    ]
  },
  {
    name:'Tipo de Produto',
    url:'/product-type',
    iconComponent:{name:'cil-inbox'},
    children:[
      {
        iconComponent:{name:'cil-Menu'},
        name:'Meus Tipos',
        url: '/product-type/product-type'
      },
      {
        iconComponent:{name:'cil-Spreadsheet'},
        name:'Novo Tipo',
        url: '/product-type/maintenance'

      }
    ]
  },
  {
    name:'Categoria',
    url:'/category',
    iconComponent:{name:'cil-inbox'},
    children:[
      {
        iconComponent:{name:'cil-Menu'},
        name:'Minhas Categorias',
        url: '/category/category'
      },
      {
        iconComponent:{name:'cil-Spreadsheet'},
        name:'Nova Categoria',
        url: '/pcategory/maintenance'
      }
    ]
  },
  {
    name:'Logout',
    title:true
  },
  {
    name:'Sair',
    url:'/login',
    iconComponent:{name:'cil-AccountLogout'}
  }  

];
