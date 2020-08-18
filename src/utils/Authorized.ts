import RenderAuthorize from '@/components/Authorized';
import { getAuthority } from './authority';

let Authorized = RenderAuthorize(getAuthority());

//Reload the rights components
const reloadAuthorized = (): void => {
  Authorized = RenderAuthorize(getAuthority());
};

/**
 * hard code
 * block need it。
 */
window.reloadAuthorized = reloadAuthorized;

export { reloadAuthorized };
export default Authorized;
