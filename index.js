const express = require("express");
const app = express();

app.use(express.json());

app.post("/room", (req, res) => {
  const people = req.body.people;
  //   console.log(people);
  const room_id = req.body.room_id;
  const roomData = {
    "room-list": [
      {
        room_id: 1111,
        type_room: "deluxe",
        people: 1,
      },
      {
        room_id: 2222,
        type_room: "deluxe",
        people: 2,
      },
      {
        room_id: 3333,
        type_room: "deluxe",
        people: 3,
      },
      {
        room_id: 4444,
        type_room: "deluxe",
        people: 4,
      },
      {
        room_id: 5555,
        type_room: "deluxe",
        people: 5,
      },
      {
        room_id: 6666,
        type_room: "deluxe",
        people: 6,
      },
    ],
  };

  if (people) {
    const filteredData = {
      "room-list": roomData["room-list"].filter(
        (room) => room.people === Number(people)
      ),
    };
    res.json(filteredData);
    res.status(200).end();
  } else {
    res.json(roomData);
    res.status(200).end();
  }
});

app.listen(3000, () => {
  console.log("Webhook listening on port 3000");
});
