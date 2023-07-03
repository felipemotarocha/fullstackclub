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

const getUserData = async () => {
  try {
    const user = await loginUser("test@test.com", "password");

    console.log("Usuário logado com sucesso!");
    console.log("Dados do usuário: ", user);

    const videos = await getUserVideos();

    console.log("Vídeos do usuário recuperados com sucesso!", videos);

    const videoDetails = await getUserVideoDetails();

    console.log("Detalhes do vídeo 1 do usuário:", videoDetails);
  } catch (error) {
    console.log(error);
  }
};

const init = async () => {
  console.log("Pegando dados do usuário...");

  await getUserData();

  console.log("Dados do usuário recuperados com sucesso!");
};

init();
