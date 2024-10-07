
    export type RemoteKeys = 'rspack_remote/button';
    type PackageType<T> = T extends 'rspack_remote/button' ? typeof import('rspack_remote/button') :any;