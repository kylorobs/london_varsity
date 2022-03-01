import ScrollIntoView from './ScrollIntoView';

const Progress = () => (
  <div className="px-4 max-w-6xl m-auto my-8 ">
    <ScrollIntoView>
      <div className="w-100 mb-4 flex content-center h-24">
        <div className="shadow stats w-40 mr-4">
          <div className="stat">
            <div className="stat-title text-center text-kings font-bold">
              Kings
            </div>
            <div className="stat-value text-center text-kings ">0</div>
          </div>
        </div>
        <progress
          className="progress progress-secondary h-4 w-100 self-center after:content-[🏆]"
          value="10"
          max="100"
        />
        <div className="self-center text-3xl">🏆</div>
      </div>
    </ScrollIntoView>
    <ScrollIntoView>
      <div className="w-100 mb-4 flex content-center h-24">
        <div className="shadow stats w-40 mr-4">
          <div className="stat">
            <div className="stat-title text-ucl font-bold text-center">UCL</div>
            <div className="stat-value text-center text-ucl">0</div>
          </div>
        </div>

        <progress
          className="progress progress-warning h-4 w-100 self-center"
          value="10"
          max="100"
        />
        <div className="self-center text-3xl">🏆</div>
      </div>
    </ScrollIntoView>
  </div>
);

export default Progress;
