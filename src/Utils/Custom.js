export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div align="center">
        <div class="toolt">
          <br />
          <span>{label}</span>
          <br />
          <br />
          {payload.map((ele, index) => (
            <div>
              <medium key={index} className="text-secondary">
                {ele.name} :{" "}
                {Math.trunc((ele.value / 1000000000) * 100) / 100 + "  Billion"}
              </medium>
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};
