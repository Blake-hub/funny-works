const data = [
  {
    title: "Column1",
    columnId: 1,
    order: 3,
    items: [
      {
        userId: "1",
        order:3,
        name: "John Doe",
        role: "Developer",
        // avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
        itemlocation: [3, 3] as [number, number],
      },
      {
        userId: "2",
        order:2,
        name: "Jane Doe",
        role: "Designer",
        itemlocation: [3, 2] as [number, number],
      },
      {
        userId: "3",
        order:5,
        name: "Jake Doe",
        role: "Designer",
        itemlocation: [3, 5] as [number, number],
      }
    ]
  },
  {
    title: "Column2",
    columnId: 2,
    order: 2,
    items: [
      {
        userId: "1",
        order:1,
        name: "John Doe",
        role: "Developer",
        // avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
        itemlocation: [2, 1] as [number, number],
      },
      {
        userId: "2",
        order:2,
        name: "Jane Doe",
        role: "Designer",
        itemlocation: [2, 2] as [number, number],
      }
    ]
  }
]

export default data;