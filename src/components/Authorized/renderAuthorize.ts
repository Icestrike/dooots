let CURRENT: string | string[] | Promise<{ authority: string | string[] }> =
  'NULL';

type CurrentAuthorityType =
  | string
  | string[]
  | Promise<{ authority: string | string[] }>
  | (() => typeof CURRENT);

const renderAuthorize = <T>(
  Authorized: T,
): ((currentAuthority: CurrentAuthorityType) => T) => (
  currentAuthority: CurrentAuthorityType,
): T => {
  if (currentAuthority) {
    if (typeof currentAuthority === 'function') {
      CURRENT = currentAuthority();
    }
    if (
      Object.prototype.toString.call(currentAuthority) === '[object String]' ||
      Array.isArray(currentAuthority)
    ) {
      CURRENT = currentAuthority as string[];
    }
    if (currentAuthority instanceof Promise) {
      currentAuthority
        .then((authority: { authority: string | string[] }) => {
          CURRENT = authority['authority'];
        })
        .catch(err => {
          CURRENT = 'ERROR';
          throw new Error(err);
        });
      CURRENT = currentAuthority as Promise<{ authority: string | string[] }>;
    }
  } else {
    CURRENT = 'NULL';
  }
  return Authorized;
};

export { CURRENT };
export default <T>(Authorized: T) => renderAuthorize<T>(Authorized);
