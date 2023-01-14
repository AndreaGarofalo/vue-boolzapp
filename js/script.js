console.log("js ok");
console.log("vue ok", Vue);

const app = Vue.createApp({
  name: "boolzapp",
  data() {
    return {
      currentIndex: 0,
      newMessage: "",
      currentStatus: "",
      user: {
        name: "Gennara Liudopati",
        avatar: "_io",
      },
      contacts: [
        {
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              text: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              text: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              text: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              text: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "received",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              text: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              text: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              text: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Luisa",
          avatar: "_4",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  computed: {
    currentContact() {
      return this.contacts[this.currentIndex];
    },
    currentChat() {
      return this.currentContact.messages;
    },
    buildNewMessage() {
      const date = new Date().toJSON().slice(0, 10).split("-");
      const localDate = date[2] + "/" + date[1] + "/" + date[0];
      const time = new Date().toLocaleTimeString();
      const newDate = localDate + " " + time;
      const text = this.newMessage;
      const status = this.currentStatus;
      return { date: newDate, text: text, status: status };
    },
  },
  methods: {
    setCurrentIndex(index) {
      this.currentIndex = index;
    },
    sendMessage() {
      if (this.newMessage.trim()) {
        this.currentStatus = "sent";
        this.currentChat.push(this.buildNewMessage);
        this.newMessage = "";
        setTimeout(this.reply, 1000);
      }
    },
    reply() {
      this.newMessage = "ok";
      this.currentStatus = "received";
      this.currentChat.push(this.buildNewMessage);
      this.newMessage = "";
    },
  },
});

app.mount("#root");
