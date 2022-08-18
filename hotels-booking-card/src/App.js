import logo from "./logo.svg";
import "./App.css";
import BookingCard from "./components/BookingCard/BookingCard";
import Form from "./components/Form/Form";

const rooms = [
  {
    name: "Vrbak",
    avarageRate: "8.7",
    distance: "3,2",
    place: "Novi Pazar",
    town: "Novi Pazar",
    comment: "Odlican",
    num: "324",
    source:
      "https://images.trvl-media.com/hotels/1000000/30000/25100/25033/47a9e846.jpg?impolicy=resizecrop&rw=1200&ra=fit",
  },
  {
    name: "Vrbak",
    avarageRate: "8.7",
    distance: "3,2",
    place: "Novi Pazar",
    town: "Novi Pazar",
    comment: "Odlican",
    num: "3245",
    source:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/274704589.jpg?k=03d079b0e4b53ea5d50d1c120d76653de3f19df0f07d17ab58f6764e5809d6ad&o=&hp=1",
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
      <Form />
      {goodNum.map((room) => (
        <BookingCard
          name={room.name}
          avarageRate={room.avarageRate}
          distance={room.distance}
          place={room.place}
          town={room.town}
          comment={room.comment}
          num={room.num}
          source={room.source}
        />
      ))}
    </div>
  );
}

export default App;
