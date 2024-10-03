# 🐻 Zustand
Zustand es una librería para manejar el estado global en aplicaciones React. Es minimalista, flexible y extremadamente fácil de usar. Con una API simple y directa, Zustand te permite gestionar el estado sin la necesidad de configuraciones complicadas o boilerplate pesado. ¡Es ideal para quienes buscan simplicidad y eficiencia! 🎯

## 🌟 ¿Qué es y para qué sirve Zustand?
Zustand es una librería de gestión de estado para React que puede ser usada tanto para estado local como para estado global. Sirve para compartir y mantener el estado entre varios componentes de manera sencilla, sin la necesidad de usar contextos o providers en exceso.

## 🔑 Principales Características:
- 📦 Sin boilerplate: Configuración mínima y sin necesidad de crear reducers o actions.
- 🎯 Rápido y eficiente: Optimizado para rendimiento, sin renderizados innecesarios.
✂️ Flexible: Puedes usarlo para estado local o global sin problemas.
- 🌍 Soporte para middlewares: Fácil integración con herramientas avanzadas como persistencia de estado y time travel debugging.
- 🔥 Pequeño: Solo ~1kB comprimido.

## 🚀 ¿Por qué usar Zustand?
- `Simplicidad:` A diferencia de otras soluciones como Redux, Zustand no necesita mucha configuración. Puedes comenzar a usarlo en minutos.
- `Escalabilidad:` Aunque es ligero, es lo suficientemente potente para gestionar el estado de aplicaciones grandes.
- `No más Providers anidados:` Con Zustand, puedes evitar el problema de tener múltiples Context.Provider anidados.
- `Sin re-renderizados innecesarios: `Zustand optimiza automáticamente los componentes para que solo se rendericen cuando el estado realmente cambia.
Soporte de middlewares: Puedes agregar persistencia, logs y más sin esfuerzo adicional.

## 🛠️ Cómo configurar Zustand
- 1. Instalación 📦
Instalar Zustand es muy sencillo. Solo necesitas agregar la dependencia a tu proyecto:

        npm install zustand

- 2. Crear el Store
Con Zustand, creas tu store de estado global usando el hook create. 🎯

        import create from 'zustand';

        // 🐻 Crear el store
        const useStore = create((set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        }));

        export default useStore;

- 3. Usar el Store en Componentes
Una vez que el store está creado, puedes acceder al estado y a las funciones desde cualquier componente usando el hook useStore. 🎉

        import React from 'react';
        import useStore from './store';

        const Counter = () => {
        // 👁️ Obtener el estado y las funciones del store
        const { count, increment, decrement } = useStore();

        return (
            <div>
            <h1>{count}</h1>
            <button onClick={increment}>Incrementar ➕</button>
            <button onClick={decrement}>Decrementar ➖</button>
            </div>
        );
        };

        export default Counter;

- 4. Middleware y Persistencia (Opcional)
Zustand permite agregar middlewares para funcionalidades avanzadas como persistencia del estado, sin necesidad de bibliotecas adicionales. 🌐

            import create from 'zustand';
            import { persist } from 'zustand/middleware';

            // 🐻 Crear un store con persistencia
            const useStore = create(
            persist(
                (set) => ({
                count: 0,
                increment: () => set((state) => ({ count: state.count + 1 })),
                }),
                {
                name: 'counter-storage', // 🔖 Nombre para la persistencia en localStorage
                }
            )
            );

            export default useStore;

Con esto, el estado de tu aplicación se guardará en localStorage y se restaurará automáticamente cuando recargues la página. 🔄

### 🎯 Beneficios de Zustand

- `Fácil de usar:` No necesitas conocimientos avanzados para empezar.
- `Ligero y rápido:` Minimiza el impacto en el rendimiento de la aplicación.
- `Totalmente flexible:` Puedes usarlo para pequeñas partes de la UI o para gestionar todo el estado de la aplicación.
- `Soporte de middlewares:` Añadir persistencia, logs o sincronización del estado es sencillo y natural.

### Zustand es una solución poderosa y sencilla para manejar el estado en aplicaciones React. Con su API ligera y eficiente, puedes concentrarte en construir tu aplicación sin preocuparte por configuraciones complejas. Es una excelente opción si buscas simplicidad, rendimiento y flexibilidad. 🐻💨