const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

export const EditButton = (props) => {
  const { isAdmin } = props;
  // isAdminがfalse（管理者でない）時にボタンを非活性にする
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
