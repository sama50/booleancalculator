import React, { useState } from "react";
import Card from "./Card";
import Card2 from "./Card2";
import CardRender from "./CardRender";
import styled from "styled-components";
import { useDrop } from "react-dnd";

const cards = [
  {
    id: 8,
    card: "A",
  },
  {
    id: 9,
    card: "B",
  },
  {
    id: 10,
    card: "C",
  },
  {
    id: 11,
    card: "E",
  },
  {
    id: 12,
    card: "F",
  },
  {
    id: 14,
    card: "+",
  },
  {
    id: 15,
    card: "-",
  },
  {
    id: 16,
    card: "*",
  },
  {
    id: 17,
    card: "/",
  },
  {
    id: 18,
    card: "<",
  },
  {
    id: 19,
    card: ">",
  },
];

function DregDraw() {
  const [board, setBoard] = useState([]);

  const remove = (id) => {
    board.map((idx, p) => {
      if (p.id != id) {
        //     const pictureList = cards.filter((picture) => id === picture.id);
        // setBoard((board) => [...board, pictureList[0]]);
        setBoard(board.filter((item) => item.id !== id));
      }
    });
  };
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleClick = () => {
    let sum = 0;
    let ch = "";
    console.log(board);
    let flg = true;
    let i = 0;
    while (i < board.length) {
      const obj = board[i];
      if (obj.card >= "<" && obj.card <= ">" && flg) {
        ch = obj.card;
        i++;
      } else if (obj.card >= "A" && obj.card <= "Z" && flg) {
        sum = sum * i;
        i++;
      } else {
        if (obj.card >= "A" && obj.card <= "Z") {
          i++;
        } else {
          if (obj.card == "+") {
            i = i + 1;
            sum = sum + i;
          }
          if (obj.card == "-") {
            i = i + 1;
            sum = sum - i;
          }
          if (obj.card == "*") {
            i = i + 1;
            sum = sum * i;
          }
          if (obj.card == "/") {
            i = i + 1;
            sum = sum / i;
          }
        }
        i++;
      }
    }
    console.log(ch);
    console.log(sum + " " + no);
    // alert(sum<=no)
    if (ch === "<") {
      alert(sum <= no);
    } else if (ch === ">") {
      alert(sum > no);
    } else {
      alert("Somethink going to wrong");
    }
  };

  const addImageToBoard = (id) => {
    const pictureList = cards.filter((picture) => id === picture.id);

    setBoard((board) => [...board, pictureList[0]]);
  };
  let no = -1;
  const handlRSH = () => {
    const n = prompt("Enter");
    let obj = [
      {
        id: 20 + n,
        card: n,
      },
    ];
    no += n;
    if (n != undefined) {
      setBoard((board) => [...board, obj[0]]);
      console.log(board);
    }
  };

  return (
    <>
      <Conatiner>
        {cards.map((e) => {
          if (e.id < 14) {
            return <Card key={e.id} id={e.id} card={e.card} />;
          }
        })}
      </Conatiner>
      <ConatinerMiddle>
        {cards.map((e) => {
          if (e.id > 13) {
            return <Card2 key={e.id} id={e.id} card={e.card} />;
          }
        })}
        {/* <<Card2 id={-1} card={'RSH'} onClick={handlRSH}/> > */}
        <ClickButtho onClick={handlRSH}>RSH</ClickButtho>
      </ConatinerMiddle>
      <DownBox ref={drop}>
        {board.map((e) => {
          if (e.id > 13) {
            console.log(e.id);
            return (
              <CardRender
                key={e.id}
                id={e.id}
                card={e.card}
                on={"box"}
                de={"+"}
                size={120}
                inputColor={"#bc8f8f"}
                remove={remove}
              />
            );
          } else {
            console.log(e.id);
            return (
              <CardRender
                key={e.id}
                id={e.id}
                card={e.card}
                de={"+"}
                inputColor={"#9acd32"}
                remove={remove}
              />
            );
          }
        })}
      </DownBox>
      <Button onClick={handleClick}>Evaluate - s</Button>
    </>
  );
}

export default DregDraw;

const ClickButtho = styled.button`
  width: 120px;
  height: 70px;
  // padding: 0.2rem 0.2rem 0.2rem ;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: #bc8f8f;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  margin-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
`;

const Button = styled.button`
  background-color: #6495ed;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  margin-top: 20px;
  padding: 10px;
  width: 100%;
`;
const DownBox = styled.div`
  align-items: center;
  border: 5px dashed grey;
  display: flex;
  height: 150px;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const Conatiner = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  padding-left: 14px;
  padding-top: 14px;
  background-color: #ffff;
`;
const ConatinerMiddle = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  padding-left: 14px;
  padding-top: 14px;
  background-color: #ffff;
`;
