const initialState = [
  {
    id: "kimZX28vZHo",
    alt: "Prety dog",
    src:
      "https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODc3NDJ8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: "kimZX28vZH1",
    alt: "Prety dog",
    src:
      "https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODc3NDJ8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
  },
];

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_PHOTO":
      return { ...state, action };

    default:
      return state;
  }
};
