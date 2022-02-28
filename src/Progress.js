import ScrollIntoView from './ScrollIntoView';

const Progress = () => (
  <div className="px-4 max-w-6xl m-auto my-8 ">
    <ScrollIntoView>
      <div className="w-100 mb-4 flex content-center h-24">
        <div className="shadow stats w-40 mr-4">
          <div className="stat">
            <div className="stat-figure text-primary">🏆</div>
            <div className="stat-title text-kings font-bold">Kings</div>
            <div className="stat-value text-kings ">0</div>
          </div>
        </div>
        <progress
          className="progress progress-secondary h-4 w-100 self-center"
          value="10"
          max="100"
        />
      </div>
    </ScrollIntoView>
    <ScrollIntoView>
      <div className="w-100 mb-4 flex content-center h-24">
        <div className="shadow stats w-40 mr-4">
          <div className="stat">
            <div className="stat-figure text-primary">🏆</div>
            <div className="stat-title text-ucl font-bold">UCL</div>
            <div className="stat-value text-ucl">0</div>
          </div>
        </div>

        <progress
          className="progress progress-warning h-4 w-100 self-center"
          value="10"
          max="100"
        />
      </div>
    </ScrollIntoView>
  </div>
);

export default Progress;
