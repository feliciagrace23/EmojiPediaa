import React from "react";

import Entry from "./Entry";
import emojipedia from "../emojipedia";

function emojiEntry(TermEmoji) {
  return (
    <Entry
      key={TermEmoji.id}
      emoji={TermEmoji.emoji}
      name={TermEmoji.name}
      description={TermEmoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emojiEntry)}</dl>
    </div>
  );
}

export default App;
