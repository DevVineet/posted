import React from "react";
import { Post } from "../components/Post";
import { Navigation } from "../components/Navigation";
import { PostBox } from "../components/PostBox";
import user from "../assets/icons/user.svg";
import { Link } from "../components/shared/Link";
import { Layout } from "../components/Layout";
var Chance = require("chance");
var chance = new Chance();

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col justify-between fixed px-8 py-6">
      <Navigation />
      <Link icon={user} name="Farhan" />
    </div>
  );
};

const Content = () => {
  return (
    <>
      <div className="w-7/12 border-r">
        <div className="m-4">
          <h1 className="text-xl font-medium">Home</h1>
        </div>
        <PostBox />
        <div>
          {Array(10)
            .fill(0)
            .map((item, index) => {
              const content = chance.paragraph({ sentences: 2 });
              const author = chance.word({ word: 5 });
              const date = chance.birthday({ string: true, american: false });
              return (
                <Post
                  key={index}
                  num={index}
                  content={content}
                  author={author}
                  date={date}
                />
              );
            })}
        </div>
      </div>
      <div className="w-5/12">
        <div className="fixed h-screen overflow-auto">
          <div className="m-4 sticky top-0">
            <input
              type="text"
              placeholder="Search for post"
              className="p-4 py-2 border w-full box-border rounded-md"
            />
          </div>
          <div>
            <Post
              key={1}
              keyword="forest"
              num={1}
              content={chance.paragraph({ sentences: 1 })}
              author={chance.word({ word: 5 })}
              date={chance.birthday({ string: true, american: false })}
            />
            <Post
              key={1}
              keyword="mountains"
              num={2}
              content={chance.paragraph({ sentences: 1 })}
              author={chance.word({ word: 5 })}
              date={chance.birthday({ string: true, american: false })}
            />
            <Post
              key={1}
              keyword="lakes"
              num={3}
              content={chance.paragraph({ sentences: 1 })}
              author={chance.word({ word: 5 })}
              date={chance.birthday({ string: true, american: false })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

function Home() {
  return <Layout Sidebar={Sidebar} Content={Content} />;
}

export default Home;
