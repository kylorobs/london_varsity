import ScrollIntoView from './ScrollIntoView';

const Progress = () => (
  <div className="px-4 max-w-6xl m-auto my-8 ">
    <ScrollIntoView>
      <div className="w-100 mb-4 flex content-center h-24">
        <div className="shadow stats w-40 mr-4">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
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
            <div className="stat-figure text-ucl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
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
