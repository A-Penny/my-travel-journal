import Navbar from "./Navbar";
import Location from "./Location";
import data from '../data';


function App() {
  const items = data.map(item => {
    return <Location 
        key={item.id}
        title={item.title}
        location={item.location}
        mapLink={item.mapLink}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imgUrl={item.imgUrl}

    />
  })

  return (
    <div className="App">
      <Navbar />
      {items}
    </div>
  );
}

export default App;
