import React from "react";
import styled from "styled-components";
import { initialData } from "../data/initialData";
import OverRay from "../Components/OverRay";

const Container = styled.div`
  width: 35%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 2%;
  display: flex;
  flex-direction: column;
`;

const PickHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  div {
    padding: 0 20px;
  }
  > div:first-child {
    width: 35%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    div {
      width: 100px;
      height: 100px;
      border-radius: 20px;
      background-position: center center;
      background-size: cover;
    }
  }
  > div:last-child {
    width: 65%;
    display: flex;
    justify-content: flex-end;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      width: 100px;

      margin-top: 2%;
      background-color: #1cac48;
      border-radius: 30px;
      height: 5vh;
    }
  }
`;

const Desc = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  > div {
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div:first-child {
    width: 35%;
    font-size: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  > div:last-child {
    width: 65%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > div {
      span:first-child {
        width: 200px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;

const DescFormBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 35.5vh;
  align-items: center;
  padding: 20px;
  form {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    button {
      height: 5vh;
      border-radius: 30px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      background-color: #ffc000;
      cursor: pointer;
      color: white;
    }
    input {
      height: 5vh;
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0 10px;
    }
  }
`;

function Picknow({ id }) {
  return (
    <Container>
      {id === "1" ? (
        <>
          <PickHeader>
            <div>
              <div
                style={{
                  backgroundImage: `url(${initialData.funItem1.result[0].img})`,
                }}
              ></div>
            </div>
            <div>
              <div>????????????</div>
            </div>
          </PickHeader>
          <Desc>
            <div>??????</div>
            <div>{initialData.funItem1.result[0].title}</div>
          </Desc>
          <Desc>
            <div>????????? ??????</div>
            <div>
              <OverRay />
            </div>
          </Desc>
          <Desc>
            <div>?????????</div>
            <div>2021-06-03 04:04</div>
          </Desc>
          <Desc>
            <div>?????????</div>
            <div>????????? / 10??? / ????????????</div>
          </Desc>
          <Desc>
            <div>????????????</div>
            <div>??????</div>
          </Desc>
          <DescFormBox>
            <form>
              <input placeholder="??????????????? (max 30 text)" required></input>
              <button>????????????</button>
            </form>
            <form>
              <input placeholder="??????????????? (max 30 text)" required></input>
              <button>????????????</button>
            </form>
          </DescFormBox>
        </>
      ) : id === "2" ? (
        <>
          <PickHeader>
            <div>
              <div
                style={{
                  backgroundImage: `url(${initialData.funItem1.result[1].img})`,
                }}
              ></div>
            </div>
            <div>
              <div style={{ backgroundColor: "#0021FF" }}>?????????</div>
            </div>
          </PickHeader>
          <Desc>
            <div>??????</div>
            <div>{initialData.funItem1.result[0].title}</div>
          </Desc>
          <Desc>
            <div>????????? ??????</div>
            <div>
              <OverRay />
            </div>
          </Desc>
          <Desc>
            <div>?????????</div>
            <div>2021-06-03 04:04</div>
          </Desc>
          <Desc>
            <div>?????????</div>
            <div>????????? / 10??? / ????????????</div>
          </Desc>
          <Desc>
            <div>????????????</div>
            <div>??????</div>
          </Desc>
          <Desc>
            <div>?????? ???</div>
            <div>1,102,505</div>
          </Desc>
          <Desc>
            <div>????????? / ?????? ???</div>
            <div>1,105 / 255,523</div>
          </Desc>
          <Desc>
            <div>?????????</div>
            <div>3</div>
          </Desc>
          <Desc>
            <div>?????? ?????????</div>
            <div>2021-06-12 4:04</div>
          </Desc>
          <Desc>
            <div>?????? ?????????</div>
            <div>50 BNT</div>
          </Desc>
        </>
      ) : id === "3" ? (
        <>
          <PickHeader>
            <div>
              <div
                style={{
                  backgroundImage: `url(${initialData.funItem1.result[2].img})`,
                }}
              ></div>
            </div>
            <div>
              <div style={{ backgroundColor: "#FF3300" }}>??????</div>
            </div>
          </PickHeader>
          <Desc>
            <div>??????</div>
            <div>{initialData.funItem1.result[0].title}</div>
          </Desc>
          <Desc>
            <div>????????? ??????</div>
            <div>
              <OverRay />
            </div>
          </Desc>
          <Desc>
            <div>?????????</div>
            <div>2021-06-03 04:04</div>
          </Desc>
          <Desc>
            <div>?????????</div>
            <div>????????? / 10??? / ????????????</div>
          </Desc>
          <Desc>
            <div>????????????</div>
            <div>??????</div>
          </Desc>
          <Desc>
            <div>????????????</div>
            <div>???????????????.....!</div>
          </Desc>
        </>
      ) : (
        <>
          <PickHeader>
            <div>
              <div
                style={{
                  backgroundImage: `url(${initialData.funItem1.result[3].img})`,
                }}
              ></div>
            </div>
            <div>
              <div style={{ backgroundColor: "#B6B6B6" }}>??????</div>
            </div>
          </PickHeader>
          <Desc>
            <div>??????</div>
            <div>{initialData.funItem1.result[0].title}</div>
          </Desc>
          <Desc>
            <div>????????? ??????</div>
            <div>
              <OverRay />
            </div>
          </Desc>
          <Desc>
            <div>?????????</div>
            <div>2021-06-03 04:04</div>
          </Desc>
          <Desc>
            <div>?????????</div>
            <div>????????? / 10??? / ????????????</div>
          </Desc>
          <Desc>
            <div>????????????</div>
            <div>??????</div>
          </Desc>
          <DescFormBox>
            <form>
              <input placeholder="??????????????? (max 30 text)" required></input>
              <button>????????????</button>
            </form>
            <form>
              <input placeholder="??????????????? (max 30 text)" required></input>
              <button>????????????</button>
            </form>
          </DescFormBox>
        </>
      )}
    </Container>
  );
}

export default Picknow;
