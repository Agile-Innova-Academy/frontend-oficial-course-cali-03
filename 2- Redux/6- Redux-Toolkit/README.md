# 🌟 ¿Qué es Redux Toolkit?
Redux Toolkit es la solución oficial recomendada para manejar el estado global de las aplicaciones usando Redux. ¡Es más fácil, más rápido y menos repetitivo! 😎

## 🎯 ¿Para qué sirve Redux Toolkit?
Redux Toolkit simplifica el manejo del estado en aplicaciones React. Proporciona herramientas que ayudan a gestionar estado global, lógica asíncrona y facilita la configuración de Redux con menos código.

## 🔑 Funciones clave:

### `Configurar Redux de manera más sencilla.`
- Reductores más fáciles de escribir y con menos código.
- Manejar acciones asíncronas con facilidad (como llamadas a APIs).
- Soporte integrado para herramientas de desarrollo y middleware.

### 🚀 ¿Por qué usar Redux Toolkit?
- 🛠 Fácil configuración: Incluye las mejores prácticas desde el inicio.
- ✂️ Menos código repetitivo: Ya no necesitas escribir tantos "actions" y "reducers" manualmente.
- 🧠 Inmutabilidad automática: Gracias a Immer, puedes modificar el estado de forma segura.
- ⚡ Mejor manejo de lógica asíncrona: Usa createAsyncThunk para acciones asíncronas, como llamadas a APIs.

# 🛠 Cómo usar Redux Toolkit
 
 `1. Instalar las dependencias`

        npm install @reduxjs/toolkit react-redux

 `2. Crear un Slice (rebanada)`
Un slice es una parte del estado que contiene un reductor y las acciones que lo modifican. 🍕

        import { createSlice } from '@reduxjs/toolkit';

        const counterSlice = createSlice({
        name: 'counter',  // 🔖 Nombre de la slice
        initialState: { value: 0 },  // 🚀 Estado inicial
        reducers: {  // 🛠 Reductores
            increment: (state) => { state.value += 1; },
            decrement: (state) => { state.value -= 1; },
        }
        });

        // 🚨 Exportar acciones y reducer
        export const { increment, decrement } = counterSlice.actions;
        export default counterSlice.reducer;

 `3. Configurar el Store`
El store es el objeto que guarda todo el estado de tu aplicación. 🌍

        import { configureStore } from '@reduxjs/toolkit';
        import counterReducer from './counterSlice';

        const store = configureStore({
        reducer: { counter: counterReducer },
        });

        export default store;

 `4. Proveer el Store a React`
Envuelve tu aplicación con el Provider para que React pueda acceder al estado global. 🎯

        import { Provider } from 'react-redux';
        import store from './store';
        import App from './App';

        const Root = () => (
        <Provider store={store}>
            <App />
        </Provider>
        );

        export default Root;

 `5. Despachar Acciones y Leer el Estado`
Usa useDispatch para despachar acciones y useSelector para leer el estado en tus componentes. 🔄


        import { useDispatch, useSelector } from 'react-redux';
        import { increment, decrement } from './counterSlice';

        const CounterComponent = () => {
        const dispatch = useDispatch();
        const counter = useSelector((state) => state.counter.value);

        return (
            <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(increment())}>Incrementar ➕</button>
            <button onClick={() => dispatch(decrement())}>Decrementar ➖</button>
            </div>
        );
        };


## 🔥 Beneficios de Redux Toolkit
- 📦 Todo en uno: Incluye herramientas como redux-thunk y Redux DevTools automáticamente.
- 🎯 Acciones asincrónicas fáciles: Usa createAsyncThunk para manejar acciones como llamadas a APIs sin esfuerzo.
- 🚀 Menos errores: Gracias a la configuración simplificada y las mejores prácticas integradas.

# Con Redux Toolkit 🎉, manejar el estado en tu aplicación React es más fácil, rápido y eficiente.







