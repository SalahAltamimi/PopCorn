function Error({ error }) {
  console.log(error);
  return <p className="text-slate-100 text-center my-36 w-full">{error}</p>;
}

export default Error;
