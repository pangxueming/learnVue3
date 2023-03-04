// const info = {
//   name: 'zhangsan',
//   age: 25
// }

// info.name = 'lisi';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Request = {
  url: string,
  method: Method
}
function request(url: string, method: Method) { };

// const options: Request = {
//   url: 'http://127.0.0.1:8080',
//   method: 'POST'
// }

const options = {
  url: 'http://127.0.0.1:8080',
  method: 'POST'
}

request(options.url, options.method as Method);

export { };
