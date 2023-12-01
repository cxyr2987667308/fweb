/// <reference types="react-scripts" />
declare module 'react-ahax';
declare module 'action';
declare module '*.module.less' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
  declare module '*.less'
}
interface WindowContext {
  appId: number;
  hasHelpDocumentsBtn: boolean;
  hasModuleManage: boolean;
  id: number;
  instanceConfig: string;//'{"categoryId":500000021,"contractApplicationScene":1}'
  moduleControlType: string;//community_control
  moduleId: number;
  name: string;
  namespaceId: number;
  namespaceInfo: {
    namespaceId: number;
    portalType: string;//'EhOrganizations'
    portalId: number;
    domain: string;
    name: string;
  };
  organization: {
    id: number;
    namespaceId: number;
    name: string;
    organizationType: string; // 'PM'
    communityId: string;
  };
  organizationId: number;
  projectTreeCollapse: boolean;
  projectTreeFixed: boolean;
}

declare global {
  interface Window {
    envType: string;
    $$context: WindowContext;
  }
}
export type BaseParams = {
  categoryId: number;
  communityId: string;
  namespaceId: number;
  organizationId: number;
  moduleId?: number,
};



