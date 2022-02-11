// reactからuseContextをimport
import { useContext } from "react";

// 作成したContextをimport
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

export const EditButton = () => {
  // Context内のisAdminを取得
  const { isAdmin } = useContext(AdminFlagContext);

  return (
    <button
      style={style}
      disabled={!isAdmin}
      className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white"
    >
      編集
    </button>
  );
};
