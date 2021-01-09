export interface FileSystem {
  get: (filename: string) => Promise<string>;
  set: (filename: string, data: string) => Promise<void>;
  remove: (filename: string) => Promise<void>;
}
