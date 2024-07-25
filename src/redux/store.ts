import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { loadingBarMiddleware } from './middlewares/loadingbar'
import { notificationMiddleware } from './middlewares/notification'
import { processing } from './middlewares/Processing'
import { rootReducer } from './rootReducer'

const middleWare = [processing, loadingBarMiddleware, notificationMiddleware]

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middleWare],
})

export type RootState = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<any>()
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
