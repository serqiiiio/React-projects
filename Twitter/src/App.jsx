import "./App.css";
import Card from "./assets/twitterFollowCard";
function App() {
  const users = [
    {
      name: "Paulo Sergio",
      nickName: "serqiiiii",
      imageSrc: "./images/serqiiii.jpg",
      initialFollowing: true,
    },
    {
      name: "Link",
      nickName: "legendofzelda",
      imageSrc: "./images/link.png",
      initialFollowing: false,
    },
    {
      name: "Cristiano Ronaldo",
      nickName: "cristiano",
      imageSrc: "./images/bicho.jpg",
      initialFollowing: true,
    },
  ];
  return (
    <section className="cards-section">
      {users.map((user) => {
        const { userName, nickName, imageSrc, initialFollowing } = user;
        return (
          <Card
            key={nickName}
            nickName={nickName}
            imageSrc={imageSrc}
            initialFollowing={initialFollowing}
          >
            {userName}
          </Card>
        );
      })}
    </section>
  );
}

export default App;
