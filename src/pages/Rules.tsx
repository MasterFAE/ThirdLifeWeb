import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import NonWLSidebar from "../components/NonWLSidebar";
type Props = {};

type Rules = {
  id: number;
  title: string;
  rulelist: string[];
};

const Rules = (props: Props) => {
  const [Rules, setRules] = useState<Rules[]>([]);
  useEffect(() => {
    axios
      .get("/rules")
      .then((result) => {
        setRules(result.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <main className="container-fluid main-wrapper flex flex-row">
      <NonWLSidebar />
      <div className="mainpage-wrapper ">
        <div className="mainpage-container flex mt-4 pb-8">
          <div className="mainpage-maincontent shadow-md px-4">
            <span className="text-center">
              <h1 className="mt-4">Kurallar</h1>
            </span>
            <div>
              {Rules.map((item) => {
                return <Rule item={item}></Rule>;
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const Rule = (props: any) => {
  const { item } = props;
  const [Open, setOpen] = useState(false);
  return (
    <div className="kurallar-category shadow-lg">
      <div className="kurallar-header">
        <h5 className="m-0 cursor-pointer" onClick={(e) => setOpen(!Open)}>
          {item.title}
        </h5>
      </div>
      <div className="kurallar-body">
        {Open && (
          <ul className="p-0 mb-2  col-12">
            {item.rulelist.map((xItem: string) => {
              return <li className="kurallar-item list-group-item">{xItem}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Rules;
