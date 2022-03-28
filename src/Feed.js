import { CalendarToday, Create } from "@material-ui/icons";
import React from "react";
import "./Feed.css";
import InputOptions from "./InputOptions";
import {
  Image,
  CalendarViewDay,
  Subscriptions,
  EventNote,
} from "@material-ui/icons";
import Post from "./Post";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { serverTimestamp ,collection} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from 'react-flip-move'
const Feed = () => {
	const user  = useSelector(selectUser)
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: serverTimestamp(),
    });
	setInput('');
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions title="Photo" color="#70b5f9" Icon={Image} />
          <InputOptions title="Video" color="orange" Icon={Subscriptions} />
          <InputOptions title="Event" color="gray" Icon={EventNote} />
          <InputOptions
            title="Write Article"
            color="lightgreen"
            Icon={CalendarViewDay}
          />
        </div>
      </div>

      {/*posts */}
	  <FlipMove>
	  {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
		  photoUrl={photoUrl}
        />
      ))}
	  </FlipMove>
  
      <Post
        name="tejas pawar"
        description="this is a test"
        message="WOW this worked"
      />
    </div>
  );
};

export default Feed;
