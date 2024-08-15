const Online = document.querySelector("#Online");
const Offline = document.querySelector("#Offline");
const msg = document.querySelector("#message");
const btnSend = document.querySelector("#btnSend");

const socket = io();

socket.on("connect", () => {
    Offline.style.display = "none";
    Online.style.display = "";
});

socket.on("disconnect", () => {
    Online.style.display = "none";
    Offline.style.display = "";
});

socket.on("send-msg", (payload) => {
    console.log(payload);
});

btnSend.addEventListener("click", () => {
    const message = msg.value;
    const payload = {
        message,
        id: "2222313",
        fecha: new Date().getTime(),
    };

    socket.emit("send-msg", payload, (id) => {
        console.log("From the server", id, payload.message);
    });
});

