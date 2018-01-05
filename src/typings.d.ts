/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
/* This declaration allows us to use JSON files without TS complaining */
declare module '*.json' {
  const value: any;
  export default value;
}
