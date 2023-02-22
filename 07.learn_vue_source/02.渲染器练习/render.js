/**
 * @param {String} tag 生成vnode的元素节点
 * @param {Object} props 生成元素的属性
 * @param {String | Array} children 元素子节点或者元素内容
 */
function h(tag, props, children) {
  // 返回vnode javascript对象
  return {
    tag,
    props,
    children
  }
}

/**
 * @param {Object} vnode 传入的虚拟节点对象，对应生成vnode tree
 * @param {HTMLElement} container 挂载到对象的dom节点
 */
function mount(vnode, container) {
  const el = vnode.el = document.createElement(vnode.tag);
  const { props, children } = vnode;

  // 处理props
  if (props) {
    for (const key in props) {
      const value = props[key];

      if (key.startsWith('on')) {
        el.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  // 处理children
  if (children) {
    if (typeof children === 'string') {
      el.textContent = children;
    } else {
      children.forEach(item => {
        mount(item, el);
      })
    }
  }

  container.appendChild(el);
}

/**
 * @param {Object} n1 旧vnode节点
 * @param {Object} n2 新vnode节点
 */
function patch(n1, n2) {
  // 1.新旧节点的标签不同
  if (n1.tag !== n2.tag) {
    const n1EleParent = n1.el.parentElement; // 找到n1的父元素，让n1.el这个元素挂载在父元素的元素卸载

    n1EleParent.removeChild(n1.el);
    mount(n2, n1EleParent);
  } else {
    const el = n2.el = n1.el;

    // 2.新旧节点的标签相同
    // 2.1.比较新旧节点的props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};

    // 2.2.添加元素属性，事件
    for (const key in newProps) {
      const newValue = newProps[key];
      const oldValue = oldProps[key];

      if (newValue !== oldValue) {
        if (key.startsWith('on')) {
          el.addEventListener(key.slice(2).toLowerCase(), newValue);
        } else {
          el.setAttribute(key, newValue);
        }
      }
    }

    // 2.3.删除元素上多余的属性，事件
    for (const key in oldProps) {
      if (!(key in newProps)) { // 如果newProps没有这个属性，删除
        const oldValue = oldProps[key];

        if (key.startsWith('on')) {
          el.removeElementListener(key.slice(2).toLowerCase(), oldValue);
        } else {
          el.removeAttribute(key, oldValue);
        }
      }
    }

    // 3.处理children
    const oldChildren = n1.children || [];
    const newChildren = n2.children || [];

    if (typeof newChildren === 'string') {
      if (typeof oldChildren === 'string') {
        if (newChildren !== oldChildren) {// 旧节点是字符串内容，新节点也是字符串内容，且新旧内容不想等直接用textContent替换
          el.textContent = newChildren;
        }
      } else { // 旧节点内容是元素，将父元素的innerHTML直接设置为新节点字符串内容
        el.innerHTML = newChildren;
      }
    } else {
      if (typeof oldChildren === 'string') { // 旧节点内容是字符串
        el.innerHTML = ''; // 置空

        // 挂载
        newChildren.forEach(item => {
          mount(item, el);
        })

      } else { // 旧节点元素有子元素
        // 1.获取最小长度的children多长, 进行patch操作
        const commonLength = Math.min(oldChildren.length, newChildren.length);

        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i]);
        }

        // 1.1.newChildren > oldChildren 添加未添加的节点到父元素 mount
        if (newChildren.length > oldChildren.length) {
          for (const child of newChildren.slice(commonLength)) {
            mount(child, el);
          }
        }

        // 1.2 newChildren < oldChildren 删除多余的节点
        if (newChildren.length < oldChildren.length) {
          for (const child of oldChildren.slice(commonLength)) {
            debugger
            el.removeChild(child.el);
          }
        }
      }
    }
  }
}
