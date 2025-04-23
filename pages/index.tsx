"use client";

import { useEffect, useState } from "react";

export default function Index() {
  const [content, setContent] = useState(<></>);

  useEffect(() => {
    let lastUserId = 0;
    const generateProducts = () => {
      const users = [];
      for (let i = 0; i < 5; ++i) {
        const photos = [
          "sp1.jpeg",
          "sp2.jpeg",
          "sp3.jpeg",
          "sp4.jpeg",
          "sp5.jpeg",
          "sp6.jpeg",
          "sp7.jpeg",
          "sp8.jpeg",
        ]
          .map(
            (name) => (
              <img
                key={name}
                style={{ flex: "auto", border: "1px solid black" }}
                src={`/sp/${name}`}
              />
            ),
            []
          )
          .flat();
        users.push(
          <div
            key={lastUserId}
            data-uid={lastUserId}
            className="User flex flex-wrap gap-px p-px mb-6 border"
          >
            <b>User {lastUserId++}</b>
            {photos}
          </div>
        );
      }
      return users;
    };

    setContent(
      <section
        key={Math.floor(Math.random() * 100000)}
        className="GeneratedProducts gap-2 grid grid-cols-2"
      >
        {generateProducts()}
      </section>
    );
  }, []);

  return (
    <>
      {content}
      <style jsx>{`
        .GeneratedProducts img {
          width: 11vmin;
          height: 8vmin;
          object-fit: cover;
        }
      `}</style>
    </>
  );
}