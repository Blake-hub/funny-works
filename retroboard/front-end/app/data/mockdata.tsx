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
        name: "Jane du",
        role: "Designer",
        itemlocation: [3, 2] as [number, number],
      },
      {
        userId: "3",
        order:5,
        name: "Jerry yu",
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
        userId: "7",
        order:1,
        name: "Elizabth xu",
        role: "Developer",
        itemlocation: [2, 1] as [number, number],
      },
      {
        userId: "6",
        order:2,
        name: "James Merson",
        role: "Designer",
        itemlocation: [2, 2] as [number, number],
      }
    ]
  },
  {
    title: "Column3",
    columnId: 3,
    order: 1,
    items: [
      {
        userId: "9",
        order:1,
        name: "Jake Jones",
        role: "Developer",
        // avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
        itemlocation: [3, 1] as [number, number],
      },
      {
        userId: "10",
        order:2,
        name: "Kerwin Wang",
        role: "Designer",
        itemlocation: [3, 2] as [number, number],
      }
    ]
  }
]

export default data;