// Import necessary modules
import { useState } from "react";
import axios from "axios";

// Component to fetch and display a random Bible verse
function RandomVerse() {
  const [verse, setVerse] = useState("");

  const fetchRandomVerse = async () => {
    try {
      const response = await axios.get(
        "https://labs.bible.org/api/?passage=random&type=text"
      );
      setVerse(response.data);
    } catch (error) {
      console.error("Error fetching random verse:", error);
    }
  };

  return (
    <div>
      <h2>Random Bible Verse</h2>
      <p>{verse}</p>
      <button onClick={fetchRandomVerse}>Get Random Verse</button>
    </div>
  );
}

// Component to fetch and display a specific Bible verse
function SpecificVerse() {
  const [verse, setVerse] = useState("");
  const [reference, setReference] = useState("John 3:16");

  const fetchSpecificVerse = async () => {
    try {
      const response = await axios.get(
        `https://labs.bible.org/api/?passage=${encodeURIComponent(
          reference
        )}&type=text`
      );
      setVerse(response.data);
    } catch (error) {
      console.error("Error fetching specific verse:", error);
    }
  };

  return (
    <div>
      <h2>Specific Bible Verse</h2>
      <input
        type="text"
        value={reference}
        onChange={(e) => setReference(e.target.value)}
      />
      <button onClick={fetchSpecificVerse}>Get Verse</button>
      <p>{verse}</p>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div>
      <h1>Bible Verse Fetcher</h1>
      <RandomVerse />
      <SpecificVerse />
    </div>
  );
}

export default App;
