const StatusBar = ({ status }) => {
  if (!status) return null;
  return <div className="status-bar">{status}</div>;
};

export default StatusBar;
