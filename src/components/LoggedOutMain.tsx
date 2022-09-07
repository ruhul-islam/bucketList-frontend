import "./LoggedOutMain.css";

let newsfeed: string[] = [
  "Greg visited Mount Rushmore and didn't have to scroll through his ex's Instagram!",
  "David didn't go skydiving, so he had to chew the same piece of gum for 24 hours",
  "Emily went to the gym for 7 days straight so she didn't have to drink an entire Monster energy drink",
];

let testimonials: string[] = [
  `"Vive has helped me get out of my comfort zone and start living life again!" -David, Tampa`,
  `"I worked up the courage to finally go scuba diving, and that's where I met my husband. Thanks for the adventures, Vive!" -Mary, Boston`,
  `"I always had big dreams to go backpacking in Europe, but I never got around to it. Vive helped make my dream a reality. 5 stars!" -Katerina, Boise`,
  `"I was supposed to go kayaking in the Grand Canyon by September 01, 2022. I didn't get around to doing it, so I had to wear my shoes on the wrong feet for three hours. I wish I had chosen to do the adventure instead!" -Kyle, Detroit`,
];

const LoggedOutMain = () => {
  // Shuffle array
  const shuffled = newsfeed.sort(() => 0.5 - Math.random());
  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, 3);

  // Shuffle array
  const shuffledTestimonials = testimonials.sort(() => 0.5 - Math.random());
  // Get sub-array of first n elements after shuffled
  let selectedTestimonials = shuffledTestimonials.slice(0, 3);

  return (
    <div className="LoggedOutMain">
      <div className="container">
        <div className="newsfeed-container">
          <h2>News Feed</h2>
          {selected.map((i) => (
            <li>{i}</li>
          ))}
        </div>
        <div className="testimonials-container">
          <h2>Testimonials</h2>
          {selectedTestimonials.map((i) => (
            <li>{i}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoggedOutMain;
