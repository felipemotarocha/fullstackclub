const loginUser = (email, password) => {
  // Retorne uma promise
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = false;

      if (error) {
        return reject("Erro na conexão ao banco.");
      }

      resolve({ email, password });
    }, 3000);
  });
};

const getUserVideos = () => {
  return new Promise((resolve, reject) => {
    const error = true;

    if (error) {
      return reject("Erro ao recuperar os vídeos");
    }

    setTimeout(() => {
      resolve(["video_1", "video_2", "video_3"]);
    }, 2000);
  });
};

const getUserVideoDetails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: "1", name: "Node.js Assíncrono", duration: 1 });
    }, 2000);
  });
};

const user = loginUser("test@test.com", "password")
  .then((user) => {
    console.log("Usuário logado com sucesso!");
    console.log("Dados do usuário: ", user);

    return getUserVideos();
  })
  .then((videos) => {
    console.log("Vídeos do usuário recuperados com sucesso!", videos);

    return getUserVideoDetails();
  })
  .then((videoDetails) => {
    console.log("Detalhes do vídeo 1 do usuário:", videoDetails);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
