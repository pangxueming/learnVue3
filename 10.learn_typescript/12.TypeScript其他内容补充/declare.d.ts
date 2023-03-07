// 声明模块
declare module 'lodash' {
  export function join(arr: any[]): string;
}

// 声明变量/函数/类
declare let personName: string;
declare let personAge: number;
declare let personHeigth: number;

declare function personFoo(): void;

declare class Person {
  name: string;
  age: number;

  constructor(name: string, age: number);
}

// 声明文件
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.gif';

// 声明命名空间
declare namespace $ {
  export function ajax(setting: any): any;
}