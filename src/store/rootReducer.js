import { SEARCH_PHOTO } from "./types";

const initialState = {
  photos: [
    // {
    //   id: "kimZX28vZHo",
    //   alt: "Prety dog",
    //   src:
    //     "https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODc3NDJ8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    // },
    // {
    //   id: "kimZX28vZH1",
    //   alt: "Prety dog",
    //   src:
    //     "https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODc3NDJ8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    // },
    // {
    //   id: "kimZX28vZH2",
    //   alt: "Prety dog",
    //   src:
    //     "https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODc3NDJ8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    // },
    // {
    //   id: "kimZX28vZH3",
    //   alt: "Prety dog",
    //   src:
    //     "https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODc3NDJ8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    // },
    // {
    //   id: "kimZX28vZH4",
    //   alt: "Prety dog",
    //   src:
    //     "https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODc3NDJ8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    // },
    // {
    //   id: "kimZX28vZH5",
    //   alt: "Prety dog",
    //   src:
    //     "https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODc3NDJ8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    // },
    // {
    //   id: "kimZX28vZH6",
    //   alt: "Prety dog",
    //   src:
    //     "https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODc3NDJ8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    // },
    // {
    //   id: "kimZX28vZH7",
    //   alt: "Prety dog",
    //   src:
    //     "https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODc3NDJ8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    // },
    // {
    //   id: "kimZX28vZH8",
    //   alt: "Prety dog",
    //   src:
    //     "https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODc3NDJ8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    // },
    // {
    //   id: "kimZX28vZH9",
    //   alt: "Prety dog",
    //   src:
    //     "https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODc3NDJ8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    // },
    // {
    //   id: "kimZX28vZ10",
    //   alt: "Prety dog",
    //   src:
    //     "https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODc3NDJ8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    // },
  ],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PHOTO:
      return { ...state, photos: [...state.photos, ...action.payload] };

    default:
      return state;
  }
};
