const socketController = (socket) => {
    console.log("Client online:".green, socket.id);

    socket.on("disconnect", () => {
        console.log("Client offline:".red, socket.id);
    });

    socket.on("send-msg", (payload, callback) => {
        const id = 626;
        callback(id);

        socket.broadcast.emit("send-msg", payload);
    });
};

module.exports = {
    socketController,
};
