import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { getTotalUniqueUser } from "../Redux/AppData/action";

const UserTable = () => {
  const dispatch = useDispatch();

  const [panelUserList, setPanelUserList] = useState("total");

  const [userSearchInput, setUserSearchInput] = useState("");

  const uniqueData = useSelector((store) => store.AppReducer.uniqueUser);
  const totalUniqueData = useSelector(
    (store) => store.AppReducer.totalUniqueUser
  );
  const weekData = useSelector((store) => store.AppReducer.weeklyuniqueUser);
  const monthData = useSelector((store) => store.AppReducer.monthlyuniqueUser);

  const handleUserSearchInput = (value) => {
    setUserSearchInput(value);
    dispatch(getTotalUniqueUser({ input: value }));
  };

  const [adminpanelInteractionUserData, setAdminpanelInteractionUserData] =
    useState(totalUniqueData);

  useEffect(() => {
    if (panelUserList === "monthly") {
      setAdminpanelInteractionUserData(monthData);
    } else if (panelUserList === "weekly") {
      setAdminpanelInteractionUserData(weekData);
    } else if (panelUserList === "daily") {
      setAdminpanelInteractionUserData(uniqueData);
    } else {
      setAdminpanelInteractionUserData(totalUniqueData);
    }
  }, [
    adminpanelInteractionUserData,
    panelUserList,
    totalUniqueData,
    monthData,
    weekData,
    uniqueData,
    userSearchInput,
  ]);

  return (
    <div>
      <div className="rightthirdBoxAdmin">
        <div className="rightthirdBoxAdminSearchBox">
          <FiSearch />
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => handleUserSearchInput(e.target.value)}
            value={userSearchInput}
            placeholder="Search by name or phone number"
          />
        </div>
        <select
          name=""
          id=""
          onChange={(e) => setPanelUserList(e.target.value)}
        >
          <option value="total">Total</option>
          <option value="monthly">This month</option>
          <option value="weekly">Last 7 days</option>
          <option value="daily">Today</option>
        </select>
      </div>
      <div className="rightfourthBoxAdmin">
        {adminpanelInteractionUserData.length > 0 ? (
          <table className="userTableAdmin">
            <thead>
              <tr>
                <th className="userTableAdminHead">Sr.No.</th>
                <th className="userTableAdminHead">Name</th>
                <th className="userTableAdminHead">Phone Number</th>
                <th className="userTableAdminHead">Message Count</th>
              </tr>
            </thead>
            <tbody>
              {adminpanelInteractionUserData &&
                adminpanelInteractionUserData.map((user, i) => {
                  return (
                    <tr key={i}>
                      <td className="userTableAdminBody">{i + 1}</td>
                      <td className="userTableAdminBody">{user.name}</td>
                      <td className="userTableAdminBody">{user.recipient}</td>
                      <td className="userTableAdminBody">
                        {user.message_count}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <h2>No data found</h2>
        )}
      </div>
    </div>
  );
};

export default UserTable;
