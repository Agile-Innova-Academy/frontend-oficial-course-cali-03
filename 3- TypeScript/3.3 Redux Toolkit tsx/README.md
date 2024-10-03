# 🎯 Redux Toolkit + TypeScript
Redux Toolkit es la forma recomendada de usar Redux para la gestión de estado en aplicaciones React. Con TypeScript, mejora aún más proporcionando tipos estáticos para mayor seguridad y un flujo de trabajo más claro. ⚡

## 🌟 ¿Por qué usar Redux Toolkit con TypeScript?
>- `Menos código repetitivo: `Redux Toolkit elimina la necesidad de escribir actions y reducers manualmente.
>- `Mejor desarrollo:` TypeScript aporta tipos estáticos, lo que significa menos errores y mejores autocompletados.
>- `Configuración simplificada:` Redux Toolkit tiene configuraciones listas para usar (configureStore), que incluyen Redux DevTools y thunk.
>- `Escalabilidad:` Es ideal para manejar estados complejos en aplicaciones grandes o pequeñas, todo mientras mantienes un código claro y mantenible.

## 🚀 Cómo configurar Redux Toolkit con TypeScript
`1. Instalación 🛠️`
Primero, necesitas instalar las dependencias necesarias:

        npm install @reduxjs/toolkit react-redux

Si no tienes TypeScript en tu proyecto, puedes instalarlo con:

    npm install typescript @types/react @types/react-dom

`2. Configurar el Store`
Con Redux Toolkit, configurar el store es súper fácil usando configureStore, que ya tiene las mejores prácticas integradas. 🎉

        // store.ts
        import { configureStore } from '@reduxjs/toolkit';
        import counterReducer from './features/counterSlice';

        export const store = configureStore({
        reducer: {
            counter: counterReducer, // Puedes agregar más reducers aquí
        },
        });

        // Inferir los tipos de `RootState` y `AppDispatch` del store
        export type RootState = ReturnType<typeof store.getState>;
        export type AppDispatch = typeof store.dispatch;

`3. Crear un Slice con TypeScript`
Un slice en Redux Toolkit es una combinación de un estado inicial, acciones y reducers. 🍕

        // features/counterSlice.ts
        import { createSlice, PayloadAction } from '@reduxjs/toolkit';

        interface CounterState {
        value: number;
        }

        const initialState: CounterState = {
        value: 0,
        };

        export const counterSlice = createSlice({
        name: 'counter',
        initialState,
        reducers: {
            increment: (state) => {
            state.value += 1; // Modificar el estado es seguro gracias a Immer
            },
            decrement: (state) => {
            state.value -= 1;
            },
            incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
            },
        },
        });

        // Exportar las acciones para usarlas en componentes
        export const { increment, decrement, incrementByAmount } = counterSlice.actions;

        // Exportar el reducer para incluirlo en el store
        export default counterSlice.reducer;

`4. Conectar Redux con React ⚛️`
Ahora que el store y el slice están configurados, necesitas conectar Redux con tu aplicación React usando el Provider. 🌍

        // index.tsx
        import React from 'react';
        import ReactDOM from 'react-dom';
        import { Provider } from 'react-redux';
        import { store } from './store';
        import App from './App';

        ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
        );

`5. Usar el Estado y Despachar Acciones en Componentes`
Usamos useSelector para leer el estado y useDispatch para despachar acciones en nuestros componentes. Aquí es donde TypeScript realmente brilla, con autocompletado y seguridad de tipos. 💪

        // Counter.tsx
        import React from 'react';
        import { useSelector, useDispatch } from 'react-redux';
        import { RootState, AppDispatch } from './store';
        import { increment, decrement, incrementByAmount } from './features/counterSlice';

        const Counter = () => {
        const count = useSelector((state: RootState) => state.counter.value);
        const dispatch = useDispatch<AppDispatch>();

        return (
            <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Incrementar ➕</button>
            <button onClick={() => dispatch(decrement())}>Decrementar ➖</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Incrementar +5 ➕➕</button>
            </div>
        );
        };

        export default Counter;

## 🎯 Tipos Inferidos en Redux Toolkit
Una de las grandes ventajas de Redux Toolkit con TypeScript es que puedes inferir tipos automáticamente:

`RootState:` Tipo para todo el estado global.
`AppDispatch:` Tipo para el método dispatch, que asegura que siempre despachamos las acciones correctas.

Esto significa que no necesitas definir manualmente tantos tipos, lo que hace tu código más limpio y fácil de mantener. 🚀

### 🛠️ Opciones Avanzadas: Thunks y Lógica Asíncrona
Con Redux Toolkit, puedes manejar lógica asíncrona con thunks fácilmente. Gracias a createAsyncThunk, puedes manejar promesas de manera sencilla. 🧩

        import { createAsyncThunk } from '@reduxjs/toolkit';
        import axios from 'axios';

        // Definir un thunk asincrónico
        export const fetchData = createAsyncThunk(
        'data/fetchData',
        async () => {
            const response = await axios.get('https://api.example.com/data');
            return response.data;
        }
        );

Luego, puedes manejar el estado para los casos pendientes, cumplidos y rechazados en tu slice. 👇

        const dataSlice = createSlice({
        name: 'data',
        initialState: { items: [], status: 'idle' },
        reducers: {},
        extraReducers: (builder) => {
            builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = 'failed';
            });
        },
        });

### Redux Toolkit con TypeScript es la combinación perfecta para manejar el estado de tu aplicación de forma eficiente, segura y sin complicaciones. Te ofrece lo mejor de ambos mundos: un flujo de trabajo claro, tipado estático y una API simplificada.
