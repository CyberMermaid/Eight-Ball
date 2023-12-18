import React, { useState } from 'react';

const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]

 function EightBall() {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const getColor = (e) => {
    e.preventDefault();
    if (!color) {
      return;
    }
    const index = Math.floor(Math.random() * answers.length);
    setColor(answers[index]);
  };

  return (
    <div>
      <form onSubmit={getColor}>
        <div>
          <label>color</label>
          <input
            value={color}
            onChange={(e) => setMsg(e.target.value)}
          />
        </div>
        <button type="submit">Get Message</button>
      </form>
      <div className="circle">
        <p>{msg}</p>
      </div>
    </div>
  );
}

export {EightBall}