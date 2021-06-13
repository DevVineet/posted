import React from "react";
import { Post } from "../components/Post";
import { PostBox } from "../components/PostBox";

var Chance = require("chance");
var chance = new Chance();

export const Message = () => {
  return (
    <>
      <div className="hidden md:block md:w-7/12 border-r">
        <div className="m-4">
          <h1 className="text-xl font-medium">Messages</h1>
        </div>
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
      <div className="w-12/12">
        <div className="">
          <div className="m-4">
            <h1 className="text-xl font-medium">Messages</h1>
          </div>
          <div className="p-4 sticky top-0 bg-white">
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
