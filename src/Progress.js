const Progress = () => (
  <div className="px-4 max-w-6xl m-auto my-8 ">
    <div className="w-100 mb-4">
      <div className="shadow stats mb-4">
        <div className="stat bg-primary">
          <div className="stat-title">Kings</div>
          <div className="stat-value">0</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
      <progress
        className="progress progress-error h-4 w-100"
        value="10"
        max="100"
      />

      {/* <progress
      className="progress progress-warning w-100 h-4"
      value="10"
      max="100"
    /> */}
    </div>
    <div className="w-100 mb-4">
      <div className="shadow stats mb-4">
        <div className="stat bg-primary">
          <div className="stat-title">UCL</div>
          <div className="stat-value">0</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>

      <progress
        className="progress progress-warning w-100 h-4"
        value="10"
        max="100"
      />
    </div>
  </div>
);

export default Progress;
