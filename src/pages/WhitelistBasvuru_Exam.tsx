import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NonWLSidebar from "../components/NonWLSidebar";
import { User } from "../redux/types";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

type Props = {};
type Option = {
  id: number;
  text: string;
};

type Question = {
  id: number;
  type: string;
  question: string[] | string;
  selected: any;
  options: Option[];
  category: string;
};

type Test = {
  id: number;
  questions: Question[];
};

const WhitelistBasvuru_Exam = (props: Props) => {
  //@ts-ignore
  const user: User = useSelector((state) => state.user);
  const [Questions, setQuestions] = useState<Question[]>([]);
  const [testId, setTestId] = useState<number>();
  const dispatch: Dispatch<any> = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("whitelist-basvuru")
      .then((res) => {
        if (res.data.error) {
          navigate("/whitelist-basvuru");
          return;
        }
        setTestId(res.data.id);
        setQuestions(res.data.questions);
      })
      .catch((err) => {
        console.error(err);
        navigate("/whitelist-basvuru");
      });
  }, []);

  const HandleChange = (id: number, key: number, item: Question) => {
    var dummy: Question[] = Questions;
    dummy[key].selected = dummy[key].selected === id ? null : id;
    setQuestions([...dummy]);
  };

  const SendTest = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    axios
      .post("whitelist-basvuru", { userid: user.id, timer: 0, id: testId, test: Questions, discord: user.discord })
      .then((res) => {
        let result = res.data.result === 1 ? "basarili" : "basarisiz";
        navigate("/whitelist-basvuru/" + result);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main className="main-wrapper flex">
      <NonWLSidebar />
      <div className="container mainpage-wrapper">
        {/* <div className="mainpage-header mt-4 mb-0">
          <h1> Whitelist Başvuru </h1>
        </div> */}
        <div className="mainpage-container">
          <div className="flex col-12 pt-2 mt-4">
            <div className="mainpage-maincontent shadow-md col-12 px-4 py-4">
              <div className="basvuru-content-header flex flex-row flex-wrap mb-3 text-center">
                <h4 className="col-12 mt-4">Whitelist Başvuru Formu</h4>
                <Link className="col-12 mt-3" to={"/"}>
                  <button className="btn col-12 btn-success" onClick={(e) => SendTest(e)}>
                    Gönder
                  </button>
                </Link>
              </div>
              <div className="basvuru-content-container  overflow-y-scroll">
                {Questions &&
                  Questions.map((item: Question, key) => {
                    return (
                      <div className="basvuru-soru shadow-md pb-3" key={key}>
                        <div className="basvuru-soru-header">
                          <h6 className="text-sm font-semibold select-none">
                            Soru {key + 1}:{" "}
                            {item.type === "multi-line" /* @ts-ignore  */
                              ? item.question.map((x: string, key3) => {
                                  return (
                                    <span key={key3}>
                                      {" "}
                                      <br />
                                      {x}
                                    </span>
                                  );
                                })
                              : item.question}
                          </h6>
                        </div>
                        <div>
                          {item.options.map((option: Option, key2) => {
                            return (
                              <div className="flex" key={key2}>
                                <div className="pt-1">
                                  <input
                                    type="checkbox"
                                    checked={item.selected === option.id}
                                    onChange={(e) => HandleChange(option.id, key, item)}></input>
                                </div>
                                <h6
                                  className="text-sm m-0 pb-1 pt-1 px-2 cursor-default select-none"
                                  onClick={(e) => HandleChange(option.id, key, item)}>
                                  {option.text}
                                </h6>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhitelistBasvuru_Exam;
