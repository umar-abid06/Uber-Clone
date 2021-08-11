import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  origin: 0,
  destination: 0,
  travelTimeInformation: 0,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setOrigin, setDestination, setTravelTimeInformation} =
  navSlice.actions;

//Selectors (We need to pull back the information from the data layer therefore we are making selectors)

export const selectOrigin = state => state.nav.origin;
export const selectDestination = state => state.nav.destination;
export const selectTravelTimeInformation = state =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
