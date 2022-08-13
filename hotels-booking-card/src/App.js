import logo from "./logo.svg";
import "./App.css";
import BookingCard from "./components/BookingCard/BookingCard";

const rooms = [
  {
    name: "Vrbak",
    avarageRate: "8.7",
    distance: "3,2",
    place: "Novi Pazar",
    town: "Novi Pazar",
    comment: "Odlican",
    num: "324",
    source: "",
  },
  {
    name: "Vrbak",
    avarageRate: "8.7",
    distance: "3,2",
    place: "Novi Pazar",
    town: "Novi Pazar",
    comment: "Odlican",
    num: "3245",
    source: "",
  },
  {
    name: "Vrbak",
    avarageRate: "8.7",
    distance: "3,2",
    place: "Novi Pazar",
    town: "Novi Pazar",
    comment: "Odlican",
    num: "524",
    source: "",
  },
  {
    name: "Vrbak",
    avarageRate: "8.7",
    distance: "3,2",
    place: "Novi Pazar",
    town: "Novi Pazar",
    comment: "Odlican",
    num: "234",
    source: "",
  },
  {
    name: "Vrbak",
    avarageRate: "8.7",
    distance: "3,2",
    place: "Novi Pazar",
    town: "Novi Pazar",
    comment: "Odlican",
    num: "124",
    source: "",
  },
];

function App() {
  const goodNum = rooms.filter((el) => el.num > 300);
  console.log(goodNum);
  return (
    <div className="App">
      {goodNum.map((room) => (
        <BookingCard
          name={room.name}
          avarageRate={room.avarageRate}
          distance={room.distance}
          place={room.place}
          town={room.town}
          comment={room.comment}
          num={room.num}
        />
      ))}
    </div>
  );
}

export default App;
