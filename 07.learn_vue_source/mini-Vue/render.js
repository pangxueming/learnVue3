/**
 * @param {String} tag 创建的元素标签名
 * @param {Object} props 传递过来的元素属性
 * @param {String | Array} children 传递过来的元素内容或者子元素
 * @returns vnode
 */
function h(tag, props, children) {
  // vnode -> 一个javascript对象

  return {
    tag,
    props,
    children
  }
}

/**
 * @param {Array} vnode 虚拟节点
 * @param {String} container 挂载的容器
 */
function mount(vnode, container) {
  // vnode -> element
  // 1.创建出真实的元素，并且在vnode保留el
  const el = vnode.el = document.createElement(vnode.tag);
  vnode.el = el;

  // 2.处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key]
      if (key.startsWith('on')) { // 对事件监听
        el.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  // 3.处理children
  if (vnode.children) {
    if (typeof vnode.children === 'string') {
      el.textContent = vnode.children
    } else {
      vnode.children.forEach(item => {
        mount(item, el);
      })
    }
  }

  // 4.将挂载到container上 
  container.appendChild(el);
}

/**
 * @param {Object} n1 新的节点
 * @param {Object} n2 旧的节点
 */
function patch(n1, n2) {
  if (n1.tag !== n2.tag) {
    const n1EleParent = n1.el.parentElement;

    n1EleParent.removeChild(n1.el);
    mount(n2, n1EleParent);
  } else {
    // 1.取出element对象，并且在n2中进行保存
    const el = n2.el = n1.el;

    // 2.处理props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};

    // 2.1.获取所有newProps添加到el
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

    // 2.2.删除旧的props
    for (const key in oldProps) {
      const oldValue = oldProps[key];
      if (key.startsWith('on')) {
        el.removeEventListener(key.slice(2).toLowerCase(), oldValue);
      }

      if (!(key in newProps)) {
        el.removeAttribute(key, oldValue);

      }
    }

    // 3.处理children
    const oldChildren = n1.children || [];
    const newChildren = n2.children || [];

    if (typeof newChildren === 'string') { // 情况一： newChildren本身是一个string
      // 边界情况（edge case）
      if (typeof oldChildren === 'string') {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren;
        }
      } else {
        el.innerHTML = newChildren;
      }
    } else { // 情况二： newChildren是一个数组
      if (typeof oldChildren === 'string') {
        el.innerHTML = '';
        newChildren.forEach(item => {
          mount(item, el);
        })
      } else {
        // oldChildren: [v1, v2, v3]
        // newChildren: [v1, v5, v8, v9]
        // 1.前面有相同的原生节点进行patch操作
        const commonLength = Math.min(oldChildren.length, newChildren.length);

        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i]);
        }

        // 2.newChildren.length > oldChildren.length 添加操作
        if (newChildren.length > oldChildren.length) {
          newChildren.slice(commonLength).forEach(item => {
            mount(item, el);
          })
        }

        // 3.newChildren.length < oldChildren.length 删除操作
        if (newChildren.length < oldChildren.length) {
          oldChildren.slice(commonLength).forEach(item => {
            el.removeChild(item.el);
          })
        }
      }
    }
  }
}
