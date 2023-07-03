const loginUser = (email, password, onSuccess, onError) => {
  // Chamar banco de dados para pegar os dados do usuário
  setTimeout(() => {
    const error = false;

    if (error) {
      return onError("Erro na conexão ao banco.");
    }

    console.log("Usuário verificado no banco de dados!");
    onSuccess({ email });
  }, 3000);
};

const getUserVideos = (onSuccess, onError) => {
  // Chamar banco de dados para pegar os vídeos
  setTimeout(() => {
    onSuccess(["video_1", "video_2", "video_3"]);
  }, 2000);
};

const getUserVideoDetails = (onSuccess, onError) => {
  setTimeout(() => {
    onSuccess({ id: "1", name: "Node.js Assíncrono", duration: 1 });
  }, 2000);
};

const user = loginUser(
  "test@test.com",
  "password",
  (user) => {
    console.log("Usuário logado com sucesso!");
    console.log(user);

    getUserVideos(
      (videos) => {
        console.log("Vídeos do usuário recuperados com sucesso!", videos);

        getUserVideoDetails(
          (video) => {
            console.log("Detalhes do vídeo 1 do usuário:", video);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
