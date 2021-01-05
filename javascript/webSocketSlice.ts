import { createSlice } from '@reduxjs/toolkit'
import { AppThunk, RootState } from './store'

const State:object = {
  message: {
    key: '',
    value: '',
    date: new Date().valueOf()
  },
  scaleDriver: {
    key: '',
    value: '',
    date: new Date().valueOf()
  }
}

const webSocketSlice = createSlice({
  name: 'websocket',
  initialState: State,
  reducers: {
    clearMessage: (state: any) => {
      state.message = null
    },
    setMessage: (state: any, { payload }) => {
      // console.error('setMessage收到消息:', payload)
      state.message = payload
      if ( payload && payload.key === 'scale' ) {
        state.scaleDriver = payload
      }
    }
  }
})

export const { clearMessage, setMessage } = webSocketSlice.actions

export const setMessageAsync = (data: any): AppThunk => (dispatch, getState) => {
  dispatch(setMessage(data))
}

export default webSocketSlice.reducer

export const message = (state: any) => state.websocket.message

export const scaleDriver = (state: any) => state.websocket.scaleDriver
