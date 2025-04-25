import { createSlice } from '@reduxjs/toolkit'
const initialState = { assets: [], watchlist: [] }
const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setAssets: (s, a) => { s.assets = a.payload },
    updateTick: (s, a) => {
      const c = s.assets.find(v => v.id === a.payload.id)
      if (c) c[a.payload.field] = a.payload.value
    }
  }
})
export const { setAssets, updateTick } = cryptoSlice.actions
export const selectAssets = s => s.crypto.assets
export default cryptoSlice.reducer