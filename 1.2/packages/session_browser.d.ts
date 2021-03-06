/// <reference path="ejson.d.ts" />

declare module Session {
  function equals(key: string, value: string | number | boolean | any): boolean;
  function get(key: string): any;
  function set(key: string, value: EJSONable | any): void;
  function setDefault(key: string, value: EJSONable | any): void;
}
