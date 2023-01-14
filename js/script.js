console.log("js ok");
console.log("vue ok", Vue);

const app = Vue.createApp({
  data() {
    return {
      user: {
        name: "Gennara Liudopati",
        avatar: "_io",
      },
      contacts: [
        {
          name: "Michele",
          avatar: "_1",
        },
        {
          name: "Fabio",
          avatar: "_2",
        },
        {
          name: "Samuele",
          avatar: "_3",
        },
        {
          name: "Luisa",
          avatar: "_4",
        },
      ],
    };
  },
});

app.mount("#root");
