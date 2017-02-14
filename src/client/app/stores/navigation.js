import { observable, action } from 'mobx';

class NavigationStore {
  @observable isOpen;

  constructor() {
    this.isOpen = false;
  }

  @action setMenuVisibility = (bool) => {
    navigationStore.isOpen = bool === undefined ? !navigationStore.isOpen : bool;
  };
}

const navigationStore = new NavigationStore();

export default navigationStore;
export { NavigationStore };