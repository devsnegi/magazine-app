import React, { useContext, useEffect, useState } from "react";

import { MagazineContext } from "../contexts/MagazineContext";
import { ListContainer } from "./ListContainer";
import { MagazineHistory } from "./MagazineHistory";
import { Magazine } from "../types/appTypes";
import { getMagazineList } from "../utility/getMagazineUtil";
import { getSubscriptionByUserId } from "../utility/getSubscriptionUtil";

export const List = () => {
  // @ts-ignore
  const { state } = useContext(MagazineContext);
  const [magazines, setMagazines] = useState([]);
  const showSubScription = state.showSubScription;

  const getMagazineData = async () => {
    if (state?.showSubScription) {
      const data = await getSubscriptionByUserId(state.userId);
      setMagazines(data);
    } else {
      const data = await getMagazineList();
      setMagazines(data);
    }
  };

  useEffect(() => {
    getMagazineData();
  }, []);

  useEffect(() => {
    getMagazineData();
  }, [showSubScription]);

  const renderMagazine = () => {
    return magazines.map((magazine: Magazine) => {
      return (
        <div className="book-list">
          <h2>Magazine List</h2>
          {state?.showSubScription ? (
            <div>
              <ul>
                <MagazineHistory key={magazine?.id} magazine={magazine} />
              </ul>
            </div>
          ) : (
            <ul>
              <ListContainer magazine={magazine} />
            </ul>
          )}
        </div>
      );
    });
  };
  return magazines.length ? renderMagazine() : <h2>No data to display</h2>;
};
