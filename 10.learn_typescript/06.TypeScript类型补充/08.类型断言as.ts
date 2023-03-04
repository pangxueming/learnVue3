// <img id="image" />
// 类型断言 as
// const el = document.getElementById('image') as HTMLImageElement; // 类型断言
// el.src = '图片地址';

class Person {

}

class Student extends Person {
  studying() {
    console.log('stu is studying');
  }
}

function sayHello(p: Person) {
  (p as Student).studying();
}

const stu = new Student();
sayHello(stu);
