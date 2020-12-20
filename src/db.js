const db = {
  fields: [
    {
      _id: "5fddf038b7f4ca7ea60a4818",
      field_name: "Les Corts",
      city: "Barcelona",
      country: "Spain",
      address: "Travessera de les Corts, 268",
      coordinates: {
        lat: "41.3863462",
        lon: "2.1324956",
      },
      photos: [
        "https://images.unsplash.com/photo-1607030298395-ed979957b555",
        "https://images.unsplash.com/photo-1606408475869-165b56cac4d3",
      ],
    },
    {
      _id: "5fddf4523fb9aff4fef2337b",
      field_name: "Maxvorstadt",
      city: "Munich",
      country: "Germany",
      address: "Gabelsbergerstraße 59",
      coordinates: {
        lat: "48.1485258",
        lon: "11.563697",
      },
      photos: [
        "https://images.unsplash.com/photo-1607919964533-d6b80088f752",
        "https://images.unsplash.com/photo-1607550315608-257a07a8b132",
        "https://images.unsplash.com/photo-1607853554251-bd2eed4145da",
      ],
    },
    {
      _id: "5fddf7e2159a961d94e36a34",
      field_name: "Jefferson Park",
      city: "Los Angeles",
      country: "United States",
      address: "2660 Arlington Ave",
      coordinates: {
        lat: "34.0314495",
        lon: "-118.319875",
      },
      photos: ["https://images.unsplash.com/photo-1608145622309-0f9539f2390f"],
    },
    {
      _id: "5fdf3531b9045952f8c6e1ea",
      field_name: "Retiro",
      city: "Madrid",
      country: "Spain",
      address: "C. de Narváez, 66",
      coordinates: {
        lat: "40.4176099",
        lon: "-3.6779803",
      },
      photos: [
        "https://images.unsplash.com/photo-1606762803100-5b4833aaccc0",
        "https://images.unsplash.com/photo-1606029099404-2a5abbd981dc",
      ],
    },
  ],
  games: [
    {
      _id: "5fddf9ae3fb9aff4fef2337d",
      field_id: "5fdf3531b9045952f8c6e1ea",
      start_time: "2020-10-17T11:00:00.000Z",
      goals_away: 3,
      goals_home: 2,
      is_finished: true,
      signups: [
        "5fde4c72159a961d94e36a46",
        "5fde4d55159a961d94e36a4d",
        "5fde4dc0159a961d94e36a52",
        "5fde4c9f159a961d94e36a47",
        "5fde4bd03fb9aff4fef2337f",
      ],
      messages: [
        {
          from: "5fde4d55159a961d94e36a4d",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello guys, this is a testing message",
        },
        {
          from: "5fde4bd03fb9aff4fef2337f",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello welcome to the game chat",
        },
      ],
    },
    {
      _id: "5fddfbe1159a961d94e36a35",
      field_id: "5fddf038b7f4ca7ea60a4818",
      start_time: "2020-10-26T11:00:00.000Z",
      goals_away: 1,
      goals_home: 1,
      is_finished: true,
      signups: [
        "5fde4d55159a961d94e36a4d",
        "5fde4d7e159a961d94e36a4f",
        "5fde4da3159a961d94e36a51",
        "5fde4d1a159a961d94e36a4b",
        "5fde4cff159a961d94e36a4a",
      ],
      messages: [
        {
          from: "5fde4d55159a961d94e36a4d",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello guys, this is a testing message",
        },
        {
          from: "5fde4bd03fb9aff4fef2337f",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello welcome to the game chat",
        },
      ],
    },
    {
      _id: "5fddfd40159a961d94e36a3d",
      field_id: "5fddf038b7f4ca7ea60a4818",
      start_time: "2020-11-01T11:00:00.000Z",
      goals_away: 3,
      goals_home: 5,
      is_finished: true,
      signups: [
        "5fde4cbb159a961d94e36a48",
        "5fde4c72159a961d94e36a46",
        "5fde4da3159a961d94e36a51",
      ],
    },
    {
      _id: "5fddfc45159a961d94e36a36",
      field_id: "5fdf3531b9045952f8c6e1ea",
      start_time: "2020-11-06T11:00:00.000Z",
      goals_away: 2,
      goals_home: 5,
      is_finished: true,
      signups: [
        "5fde4c72159a961d94e36a46",
        "5fde4cff159a961d94e36a4a",
        "5fde4d55159a961d94e36a4d",
        "5fde4da3159a961d94e36a51",
        "5fde4dc0159a961d94e36a52",
      ],
    },
    {
      _id: "5fddfc6c159a961d94e36a37",
      field_id: "5fddf4523fb9aff4fef2337b",
      start_time: "2020-11-10T11:00:00.000Z",
      goals_away: 2,
      goals_home: 0,
      is_finished: true,
      signups: [
        "5fde4d55159a961d94e36a4d",
        "5fde4d90159a961d94e36a50",
        "5fde4d3c159a961d94e36a4c",
        "5fde4cd3159a961d94e36a49",
        "5fde4c59159a961d94e36a45",
      ],
      messages: [
        {
          from: "5fde4d55159a961d94e36a4d",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello guys, this is a testing message",
        },
        {
          from: "5fde4bd03fb9aff4fef2337f",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello welcome to the game chat",
        },
      ],
    },
    {
      _id: "5fddfca3159a961d94e36a38",
      field_id: "5fddf038b7f4ca7ea60a4818",
      start_time: "2020-11-14T11:00:00.000Z",
      goals_away: 1,
      goals_home: 3,
      is_finished: true,
      signups: [
        "5fde4d7e159a961d94e36a4f",
        "5fde4d3c159a961d94e36a4c",
        "5fde4c9f159a961d94e36a47",
        "5fde4c72159a961d94e36a46",
      ],
    },
    {
      _id: "5fddfcc7159a961d94e36a39",
      field_id: "5fddf7e2159a961d94e36a34",
      start_time: "2020-11-19T11:00:00.000Z",
      goals_away: null,
      goals_home: null,
      is_finished: false,
      signups: [
        "5fde4cff159a961d94e36a4a",
        "5fde4cd3159a961d94e36a49",
        "5fde4c9f159a961d94e36a47",
        "5fde4dc0159a961d94e36a52",
        "5fde4d55159a961d94e36a4d",
      ],
      messages: [
        {
          from: "5fde4d55159a961d94e36a4d",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello guys, this is a testing message",
        },
        {
          from: "5fde4bd03fb9aff4fef2337f",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello welcome to the game chat",
        },
      ],
    },
    {
      _id: "5fddfcda159a961d94e36a3a",
      field_id: "5fddf7e2159a961d94e36a34",
      start_time: "2020-11-25T11:00:00.000Z",
      goals_away: 1,
      goals_home: 1,
      is_finished: true,
      signups: [
        "5fde4c9f159a961d94e36a47",
        "5fde4cbb159a961d94e36a48",
        "5fde4d1a159a961d94e36a4b",
        "5fde4dc0159a961d94e36a52",
      ],
      messages: [
        {
          from: "5fde4d55159a961d94e36a4d",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello guys, this is a testing message",
        },
        {
          from: "5fde4bd03fb9aff4fef2337f",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello welcome to the game chat",
        },
      ],
    },
    {
      _id: "5fddfd00159a961d94e36a3b",
      field_id: "5fdf3531b9045952f8c6e1ea",
      start_time: "2020-11-29T11:00:00.000Z",
      goals_away: 2,
      goals_home: 3,
      is_finished: true,
      signups: [
        "5fde4d6d159a961d94e36a4e",
        "5fde4d90159a961d94e36a50",
        "5fde4c59159a961d94e36a45",
        "5fde4d55159a961d94e36a4d",
      ],
    },
    {
      _id: "5fddfd1e159a961d94e36a3c",
      field_id: "5fddf4523fb9aff4fef2337b",
      start_time: "2020-12-03T11:00:00.000Z",
      goals_away: 0,
      goals_home: 1,
      is_finished: true,
      signups: ["5fde4cbb159a961d94e36a48", "5fde4d55159a961d94e36a4d"],
      messages: [
        {
          from: "5fde4d55159a961d94e36a4d",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello guys, this is a testing message",
        },
        {
          from: "5fde4bd03fb9aff4fef2337f",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello welcome to the game chat",
        },
      ],
    },
    {
      _id: "5fddfd74159a961d94e36a3e",
      field_id: "5fddf4523fb9aff4fef2337b",
      start_time: "2020-12-12T11:00:00.000Z",
      goals_away: 4,
      goals_home: 0,
      is_finished: true,
      signups: [
        "5fde4d6d159a961d94e36a4e",
        "5fde4cbb159a961d94e36a48",
        "5fde4d7e159a961d94e36a4f",
      ],
      messages: [
        {
          from: "5fde4d55159a961d94e36a4d",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello guys, this is a testing message",
        },
        {
          from: "5fde4bd03fb9aff4fef2337f",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello welcome to the game chat",
        },
      ],
    },
    {
      _id: "5fddfd99159a961d94e36a3f",
      field_id: "5fddf7e2159a961d94e36a34",
      start_time: "2020-12-16T11:00:00.000Z",
      goals_away: 4,
      goals_home: 0,
      is_finished: true,
      signups: [
        "5fde4d55159a961d94e36a4d",
        "5fde4c72159a961d94e36a46",
        "5fde4dc0159a961d94e36a52",
        "5fde4bd03fb9aff4fef2337f",
        "5fde4c59159a961d94e36a45",
      ],
    },
    {
      _id: "5fddfdb8159a961d94e36a40",
      field_id: "5fddf038b7f4ca7ea60a4818",
      start_time: "2020-12-19T11:00:00.000Z",
      goals_away: 2,
      goals_home: 3,
      is_finished: true,
      signups: [
        "5fde4cd3159a961d94e36a49",
        "5fde4cbb159a961d94e36a48",
        "5fde4d90159a961d94e36a50",
      ],
      messages: [
        {
          from: "5fde4d55159a961d94e36a4d",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello guys, this is a testing message",
        },
        {
          from: "5fde4bd03fb9aff4fef2337f",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello welcome to the game chat",
        },
      ],
    },
    {
      _id: "5fddfec8159a961d94e36a41",
      field_id: "5fddf7e2159a961d94e36a34",
      start_time: "2020-12-27T11:00:00.000Z",
      goals_away: null,
      goals_home: null,
      is_finished: true,
      signups: [
        "5fde4c9f159a961d94e36a47",
        "5fde4d55159a961d94e36a4d",
        "5fde4c59159a961d94e36a45",
      ],
      messages: [
        {
          from: "5fde4d55159a961d94e36a4d",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello guys, this is a testing message",
        },
        {
          from: "5fde4bd03fb9aff4fef2337f",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello welcome to the game chat",
        },
      ],
    },
    {
      _id: "5fddff1d159a961d94e36a42",
      field_id: "5fdf3531b9045952f8c6e1ea",
      start_time: "2021-01-03T11:00:00.000Z",
      goals_away: null,
      goals_home: null,
      is_finished: false,
      signups: [
        "5fde4c72159a961d94e36a46",
        "5fde4cd3159a961d94e36a49",
        "5fde4c9f159a961d94e36a47",
        "5fde4bd03fb9aff4fef2337f",
      ],
      messages: [
        {
          from: "5fde4d55159a961d94e36a4d",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello guys, this is a testing message",
        },
        {
          from: "5fde4bd03fb9aff4fef2337f",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello welcome to the game chat",
        },
      ],
    },
    {
      _id: "5fddff45159a961d94e36a43",
      field_id: "5fddf038b7f4ca7ea60a4818",
      start_time: "2021-01-07T11:00:00.000Z",
      goals_away: null,
      goals_home: null,
      is_finished: false,
      signups: [
        "5fde4cff159a961d94e36a4a",
        "5fde4cd3159a961d94e36a49",
        "5fde4c72159a961d94e36a46",
        "5fde4d3c159a961d94e36a4c",
        "5fde4d55159a961d94e36a4d",
      ],
      messages: [
        {
          from: "5fde4d55159a961d94e36a4d",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello guys, this is a testing message",
        },
        {
          from: "5fde4bd03fb9aff4fef2337f",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello welcome to the game chat",
        },
      ],
    },
    {
      _id: "5fddff68159a961d94e36a44",
      field_id: "5fdf3531b9045952f8c6e1ea",
      start_time: "2021-01-11T11:00:00.000Z",
      goals_away: null,
      goals_home: null,
      is_finished: false,
      signups: [
        "5fde4d3c159a961d94e36a4c",
        "5fde4cbb159a961d94e36a48",
        "5fde4da3159a961d94e36a51",
        "5fde4d90159a961d94e36a50",
      ],
      messages: [
        {
          from: "5fde4d55159a961d94e36a4d",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello guys, this is a testing message",
        },
        {
          from: "5fde4bd03fb9aff4fef2337f",
          date: "2020-10-15T10:30:00.000Z",
          message: "Hello welcome to the game chat",
        },
      ],
    },
  ],
  users: [
    {
      _id: "5fde4bd03fb9aff4fef2337f",
      fullname: "Joy Roberts",
      email: "joy.roberts@example.com",
      address: "6424 Adams St",
      phone_number: "(781)-604-8965",
    },
    {
      _id: "5fde4c59159a961d94e36a45",
      fullname: "Tristan Moore",
      email: "tristan.moore@example.com",
      address: "4950 Karen Dr",
      phone_number: "(650)-309-4203",
    },
    {
      _id: "5fde4c72159a961d94e36a46",
      fullname: "Bessie Perez",
      email: "bessie.perez@example.com",
      address: "1501 Timber Wolf",
      phone_number: "(836)-783-4933",
    },
    {
      _id: "5fde4c9f159a961d94e36a47",
      fullname: "Jackie Newman",
      email: "jackie.newman@example.com",
      address: "1929 Oak Lawn Ave",
      phone_number: "(839)-791-8847",
    },
    {
      _id: "5fde4cbb159a961d94e36a48",
      fullname: "Elaine Terry",
      email: "elaine.terry@example.com",
      address: "8165 Smokey Ln",
      phone_number: "(866)-475-4543",
    },
    {
      _id: "5fde4cd3159a961d94e36a49",
      fullname: "Tristan Sims",
      email: "tristan.sims@example.com",
      address: "5005 Central St",
      phone_number: "(646)-469-7574",
    },
    {
      _id: "5fde4cff159a961d94e36a4a",
      fullname: "Troy Diaz",
      email: "troy.diaz@example.com",
      address: "3069 Mockingbird Ln",
      phone_number: "(316)-272-1694",
    },
    {
      _id: "5fde4d1a159a961d94e36a4b",
      fullname: "Michele Miles",
      email: "michele.miles@example.com",
      address: "5057 Karen Dr",
      phone_number: "(716)-256-1746",
    },
    {
      _id: "5fde4d3c159a961d94e36a4c",
      fullname: "Shane Smith",
      email: "shane.smith@example.com",
      address: "9112 Adams St",
      phone_number: "(834)-598-0625",
    },
    {
      _id: "5fde4d55159a961d94e36a4d",
      fullname: "Judy Wood",
      email: "judy.wood@example.com",
      address: "5484 Parker Rd",
      phone_number: "(888)-509-6053",
    },
    {
      _id: "5fde4d6d159a961d94e36a4e",
      fullname: "Justin Stephens",
      email: "justin.stephens@example.com",
      address: "7168 Mockingbird Ln",
      phone_number: "(922)-694-2156",
    },
    {
      _id: "5fde4d7e159a961d94e36a4f",
      fullname: "Jean Holt",
      email: "jean.holt@example.com",
      address: "254 Green Rd",
      phone_number: "(572)-646-3050",
    },
    {
      _id: "5fde4d90159a961d94e36a50",
      fullname: "Jose Morgan",
      email: "jose.morgan@example.com",
      address: "3856 Bruce St",
      phone_number: "(125)-048-8195",
    },
    {
      _id: "5fde4da3159a961d94e36a51",
      fullname: "Micheal Mitchell",
      email: "micheal.mitchell@example.com",
      address: "3612 Nowlin Rd",
      phone_number: "(857)-927-4674",
    },
    {
      _id: "5fde4dc0159a961d94e36a52",
      fullname: "Carter Ellis",
      email: "carter.ellis@example.com",
      address: "8032 Dogwood Ave",
      phone_number: "(733)-491-2809",
    },
  ],
  reviews: [
    {
      game_id: "5fddf9ae3fb9aff4fef2337d",
      user_id: "5fde4c72159a961d94e36a46",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddf9ae3fb9aff4fef2337d",
      user_id: "5fde4d55159a961d94e36a4d",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddf9ae3fb9aff4fef2337d",
      user_id: "5fde4dc0159a961d94e36a52",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddf9ae3fb9aff4fef2337d",
      user_id: "5fde4c9f159a961d94e36a47",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddf9ae3fb9aff4fef2337d",
      user_id: "5fde4bd03fb9aff4fef2337f",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfbe1159a961d94e36a35",
      user_id: "5fde4d55159a961d94e36a4d",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfbe1159a961d94e36a35",
      user_id: "5fde4d7e159a961d94e36a4f",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfbe1159a961d94e36a35",
      user_id: "5fde4da3159a961d94e36a51",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfbe1159a961d94e36a35",
      user_id: "5fde4d1a159a961d94e36a4b",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfbe1159a961d94e36a35",
      user_id: "5fde4cff159a961d94e36a4a",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd40159a961d94e36a3d",
      user_id: "5fde4cbb159a961d94e36a48",
      rating: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd40159a961d94e36a3d",
      user_id: "5fde4c72159a961d94e36a46",
      rating: 1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd40159a961d94e36a3d",
      user_id: "5fde4da3159a961d94e36a51",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfc45159a961d94e36a36",
      user_id: "5fde4c72159a961d94e36a46",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfc45159a961d94e36a36",
      user_id: "5fde4cff159a961d94e36a4a",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfc45159a961d94e36a36",
      user_id: "5fde4d55159a961d94e36a4d",
      rating: 1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfc45159a961d94e36a36",
      user_id: "5fde4da3159a961d94e36a51",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfc45159a961d94e36a36",
      user_id: "5fde4dc0159a961d94e36a52",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfc6c159a961d94e36a37",
      user_id: "5fde4d55159a961d94e36a4d",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfc6c159a961d94e36a37",
      user_id: "5fde4d90159a961d94e36a50",
      rating: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfc6c159a961d94e36a37",
      user_id: "5fde4d3c159a961d94e36a4c",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfc6c159a961d94e36a37",
      user_id: "5fde4cd3159a961d94e36a49",
      rating: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfc6c159a961d94e36a37",
      user_id: "5fde4c59159a961d94e36a45",
      rating: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfca3159a961d94e36a38",
      user_id: "5fde4d7e159a961d94e36a4f",
      rating: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfca3159a961d94e36a38",
      user_id: "5fde4d3c159a961d94e36a4c",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfca3159a961d94e36a38",
      user_id: "5fde4c9f159a961d94e36a47",
      rating: 1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfca3159a961d94e36a38",
      user_id: "5fde4c72159a961d94e36a46",
      rating: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfcc7159a961d94e36a39",
      user_id: "5fde4cff159a961d94e36a4a",
      rating: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfcc7159a961d94e36a39",
      user_id: "5fde4cd3159a961d94e36a49",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfcc7159a961d94e36a39",
      user_id: "5fde4c9f159a961d94e36a47",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfcc7159a961d94e36a39",
      user_id: "5fde4dc0159a961d94e36a52",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfcc7159a961d94e36a39",
      user_id: "5fde4d55159a961d94e36a4d",
      rating: 1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfcda159a961d94e36a3a",
      user_id: "5fde4c9f159a961d94e36a47",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfcda159a961d94e36a3a",
      user_id: "5fde4cbb159a961d94e36a48",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfcda159a961d94e36a3a",
      user_id: "5fde4d1a159a961d94e36a4b",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfcda159a961d94e36a3a",
      user_id: "5fde4dc0159a961d94e36a52",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd00159a961d94e36a3b",
      user_id: "5fde4d6d159a961d94e36a4e",
      rating: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd00159a961d94e36a3b",
      user_id: "5fde4d90159a961d94e36a50",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd00159a961d94e36a3b",
      user_id: "5fde4c59159a961d94e36a45",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd00159a961d94e36a3b",
      user_id: "5fde4d55159a961d94e36a4d",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd1e159a961d94e36a3c",
      user_id: "5fde4cbb159a961d94e36a48",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd1e159a961d94e36a3c",
      user_id: "5fde4d55159a961d94e36a4d",
      rating: 1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd74159a961d94e36a3e",
      user_id: "5fde4d6d159a961d94e36a4e",
      rating: 1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd74159a961d94e36a3e",
      user_id: "5fde4cbb159a961d94e36a48",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd74159a961d94e36a3e",
      user_id: "5fde4d7e159a961d94e36a4f",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd99159a961d94e36a3f",
      user_id: "5fde4d55159a961d94e36a4d",
      rating: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd99159a961d94e36a3f",
      user_id: "5fde4c72159a961d94e36a46",
      rating: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd99159a961d94e36a3f",
      user_id: "5fde4dc0159a961d94e36a52",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd99159a961d94e36a3f",
      user_id: "5fde4bd03fb9aff4fef2337f",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfd99159a961d94e36a3f",
      user_id: "5fde4c59159a961d94e36a45",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfdb8159a961d94e36a40",
      user_id: "5fde4cd3159a961d94e36a49",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfdb8159a961d94e36a40",
      user_id: "5fde4cbb159a961d94e36a48",
      rating: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfdb8159a961d94e36a40",
      user_id: "5fde4d90159a961d94e36a50",
      rating: 1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfec8159a961d94e36a41",
      user_id: "5fde4c9f159a961d94e36a47",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfec8159a961d94e36a41",
      user_id: "5fde4d55159a961d94e36a4d",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddfec8159a961d94e36a41",
      user_id: "5fde4c59159a961d94e36a45",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddff1d159a961d94e36a42",
      user_id: "5fde4c72159a961d94e36a46",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddff1d159a961d94e36a42",
      user_id: "5fde4cd3159a961d94e36a49",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddff1d159a961d94e36a42",
      user_id: "5fde4c9f159a961d94e36a47",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddff1d159a961d94e36a42",
      user_id: "5fde4bd03fb9aff4fef2337f",
      rating: 1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddff45159a961d94e36a43",
      user_id: "5fde4cff159a961d94e36a4a",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddff45159a961d94e36a43",
      user_id: "5fde4cd3159a961d94e36a49",
      rating: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddff45159a961d94e36a43",
      user_id: "5fde4c72159a961d94e36a46",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddff45159a961d94e36a43",
      user_id: "5fde4d3c159a961d94e36a4c",
      rating: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddff45159a961d94e36a43",
      user_id: "5fde4d55159a961d94e36a4d",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddff68159a961d94e36a44",
      user_id: "5fde4d3c159a961d94e36a4c",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddff68159a961d94e36a44",
      user_id: "5fde4cbb159a961d94e36a48",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddff68159a961d94e36a44",
      user_id: "5fde4da3159a961d94e36a51",
      rating: 1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      game_id: "5fddff68159a961d94e36a44",
      user_id: "5fde4d90159a961d94e36a50",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
  ],
  availabilities: [
    {
      field_id: "5fdf3531b9045952f8c6e1ea",
      start_time: "2020-10-17T11:00:00.000Z",
    },
    {
      field_id: "5fdf3531b9045952f8c6e1ea",
      start_time: "2020-10-21T11:00:00.000Z",
    },
    {
      field_id: "5fddf038b7f4ca7ea60a4818",
      start_time: "2020-10-26T11:00:00.000Z",
    },
    {
      field_id: "5fddf038b7f4ca7ea60a4818",
      start_time: "2020-11-01T11:00:00.000Z",
    },
    {
      field_id: "5fddf038b7f4ca7ea60a4818",
      start_time: "2020-11-03T11:00:00.000Z",
    },
    {
      field_id: "5fdf3531b9045952f8c6e1ea",
      start_time: "2020-11-06T11:00:00.000Z",
    },
    {
      field_id: "5fdf3531b9045952f8c6e1ea",
      start_time: "2020-11-09T11:00:00.000Z",
    },
    {
      field_id: "5fddf4523fb9aff4fef2337b",
      start_time: "2020-11-10T11:00:00.000Z",
    },
    {
      field_id: "5fddf038b7f4ca7ea60a4818",
      start_time: "2020-11-12T11:00:00.000Z",
    },
    {
      field_id: "5fddf038b7f4ca7ea60a4818",
      start_time: "2020-11-14T11:00:00.000Z",
    },
    {
      field_id: "5fddf7e2159a961d94e36a34",
      start_time: "2020-11-19T11:00:00.000Z",
    },
    {
      field_id: "5fddf4523fb9aff4fef2337b",
      start_time: "2020-11-22T11:00:00.000Z",
    },
    {
      field_id: "5fddf7e2159a961d94e36a34",
      start_time: "2020-11-25T11:00:00.000Z",
    },
    {
      field_id: "5fdf3531b9045952f8c6e1ea",
      start_time: "2020-11-29T11:00:00.000Z",
    },
    {
      field_id: "5fdf3531b9045952f8c6e1ea",
      start_time: "2020-12-01T11:00:00.000Z",
    },
    {
      field_id: "5fddf4523fb9aff4fef2337b",
      start_time: "2020-12-03T11:00:00.000Z",
    },
    {
      field_id: "5fddf4523fb9aff4fef2337b",
      start_time: "2020-12-12T11:00:00.000Z",
    },
    {
      field_id: "5fddf7e2159a961d94e36a34",
      start_time: "2020-12-14T11:00:00.000Z",
    },
    {
      field_id: "5fddf7e2159a961d94e36a34",
      start_time: "2020-12-16T11:00:00.000Z",
    },
    {
      field_id: "5fddf038b7f4ca7ea60a4818",
      start_time: "2020-12-19T11:00:00.000Z",
    },
    {
      field_id: "5fddf038b7f4ca7ea60a4818",
      start_time: "2020-12-22T11:00:00.000Z",
    },
    {
      field_id: "5fddf7e2159a961d94e36a34",
      start_time: "2020-12-27T11:00:00.000Z",
    },
    {
      field_id: "5fddf7e2159a961d94e36a34",
      start_time: "2020-12-29T11:00:00.000Z",
    },
    {
      field_id: "5fdf3531b9045952f8c6e1ea",
      start_time: "2021-01-03T11:00:00.000Z",
    },
    {
      field_id: "5fdf3531b9045952f8c6e1ea",
      start_time: "2021-01-02T11:00:00.000Z",
    },
    {
      field_id: "5fddf038b7f4ca7ea60a4818",
      start_time: "2021-01-07T11:00:00.000Z",
    },
    {
      field_id: "5fddf038b7f4ca7ea60a4818",
      start_time: "2021-01-09T11:00:00.000Z",
    },
    {
      field_id: "5fdf3531b9045952f8c6e1ea",
      start_time: "2021-01-11T11:00:00.000Z",
    },
    {
      field_id: "5fdf3531b9045952f8c6e1ea",
      start_time: "2021-01-15T11:00:00.000Z",
    },
  ],
  chats: [
    {
      _id: "5fde4bdd3fb9aff44032337f",
      from_user: "5fde4c59159a961d94e36a45",
      to_user: "5fde4d90159a961d94e36a50",
      text: "Hello this is a test message",
      date: "2020-12-21T11:00:00.000Z",
    },
    {
      _id: "5fde4bdd3fb9aff44032337f",
      from_user: "5fde4d90159a961d94e36a50",
      to_user: "5fde4c59159a961d94e36a45",
      text: "Sure! Nice to meet you",
      date: "2020-12-21T11:30:00.000Z",
    },
  ],
};
export default db;
