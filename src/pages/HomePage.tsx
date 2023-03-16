const HomePage = () => {
  return (
    <>
      <div className={'filter-board'}>
        <div className="wrapper">
          <div className={'search-wrapper'}>
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <h1>Homepage</h1>
        <p>Homepage content</p>
      </div>
    </>
  );
};

export { HomePage };
