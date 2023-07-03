const loadProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Ocorreu um erro!");
    }, 3000);
  });
};

const loadCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: "1", name: "Notebooks" }]);
    }, 3000);
  });
};

const loadUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: "1", name: "Felipe Rocha", age: 21 }]);
    }, 3000);
  });
};

const init = async () => {
  //   const products = await loadProducts();
  //   const categories = await loadCategories();
  //   const users = await loadUsers();

  // Promise.all executa várias Promises simultâneamente
  try {
    const results = await Promise.allSettled([loadProducts(), loadCategories(), loadUsers()]);

    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

init();
