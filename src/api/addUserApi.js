export const addUserAPI = async (randomNum) => {
  const request = await fetch(
    `https://dummyjson.com/todos?limit=${randomNum}&skip=10`
  );
  //   console.log("smth");
  //   const request = await fetch(
  //     `https://source.unsplash.com/random/200x200?sig=${randomNum}`
  //   );

  //   // console.log(request.json());
  //   const img = await request.json();
  //   console.log("img", img);
  return await request.json(); // request we get - we make object with .json() method
};
