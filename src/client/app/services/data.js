class Data {

  static getData() {
    return new Promise((resolve) => {
      setTimeout(() =>
        resolve([{
          description: 'hello duck 1',
          price: 1
        }, {
          description: 'hello duck 2',
          price: 2
        }, {
          description: 'hello duck 3',
          price: 3
        }]), 500);
    });
  }
}

export default Data;
