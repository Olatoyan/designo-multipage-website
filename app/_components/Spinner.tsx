function Spinner() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="loader">
        <div className="circle outer"></div>
        <div className="circle inner"></div>
      </div>
    </div>
  );
}

export default Spinner;
