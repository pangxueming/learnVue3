function createApp(rootComponent) {

  return {
    mount(seletor) {
      const container = document.querySelector(seletor);
      let isMounted = false;
      let oldVnode = null;

      watchEffect(() => {
        if (!isMounted) {
          oldVnode = rootComponent.render();
          mount(oldVnode, container);
          isMounted = true;
        } else {
          const newVnode = rootComponent.render();
          patch(oldVnode, newVnode);
          oldVnode = newVnode;
        }
      })
    }
  }
}